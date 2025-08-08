// Real Analytics Implementation
class RealAnalytics {
  constructor() {
    this.apiUrl = 'https://your-backend-api.com/analytics'; // Replace with your API
    this.sessionId = this.generateSessionId();
    this.startTime = Date.now();
    this.init();
  }

  init() {
    // Track page visit
    this.trackVisit();
    
    // Track page unload
    window.addEventListener('beforeunload', () => {
      this.trackTimeSpent();
    });
  }

  generateSessionId() {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  async sendData(eventType, data) {
    try {
      const payload = {
        eventType,
        data,
        sessionId: this.sessionId,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referrer: document.referrer,
        url: window.location.href
      };

      // Send to your backend API
      await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      // Also store locally as backup
      this.storeLocally(eventType, payload);
    } catch (error) {
      console.log('Analytics error:', error);
      // Fallback to local storage
      this.storeLocally(eventType, { eventType, data, timestamp: new Date().toISOString() });
    }
  }

  storeLocally(eventType, data) {
    const key = `analytics_${eventType}`;
    const existing = JSON.parse(localStorage.getItem(key) || '[]');
    existing.push(data);
    
    // Keep only last 100 entries
    if (existing.length > 100) {
      existing.splice(0, existing.length - 100);
    }
    
    localStorage.setItem(key, JSON.stringify(existing));
  }

  trackVisit() {
    const visitData = {
      country: this.getCountry(),
      device: this.getDeviceType(),
      browser: this.getBrowser(),
      screenSize: `${screen.width}x${screen.height}`,
      language: navigator.language
    };
    
    this.sendData('visit', visitData);
  }

  trackCertificate(name, city) {
    const certData = {
      name: name.substring(0, 20), // Limit for privacy
      city,
      device: this.getDeviceType()
    };
    
    this.sendData('certificate_generated', certData);
  }

  trackDownload(name) {
    const downloadData = {
      name: name.substring(0, 20), // Limit for privacy
      device: this.getDeviceType()
    };
    
    this.sendData('certificate_downloaded', downloadData);
  }

  trackShare(platform) {
    const shareData = {
      platform,
      device: this.getDeviceType()
    };
    
    this.sendData('content_shared', shareData);
  }

  trackTimeSpent() {
    const timeSpent = Math.round((Date.now() - this.startTime) / 1000);
    this.sendData('time_spent', { seconds: timeSpent });
  }

  getCountry() {
    // You can use a geolocation API or get from server
    return Intl.DateTimeFormat().resolvedOptions().timeZone.split('/')[0] || 'Unknown';
  }

  getDeviceType() {
    const width = window.innerWidth;
    if (width <= 480) return 'Mobile';
    if (width <= 768) return 'Tablet';
    return 'Desktop';
  }

  getBrowser() {
    const ua = navigator.userAgent;
    if (ua.includes('Chrome')) return 'Chrome';
    if (ua.includes('Firefox')) return 'Firefox';
    if (ua.includes('Safari')) return 'Safari';
    if (ua.includes('Edge')) return 'Edge';
    return 'Other';
  }

  // Get analytics summary (for admin dashboard)
  getAnalyticsSummary() {
    const visits = JSON.parse(localStorage.getItem('analytics_visit') || '[]');
    const certificates = JSON.parse(localStorage.getItem('analytics_certificate_generated') || '[]');
    const downloads = JSON.parse(localStorage.getItem('analytics_certificate_downloaded') || '[]');
    const shares = JSON.parse(localStorage.getItem('analytics_content_shared') || '[]');

    return {
      totalVisits: visits.length,
      totalCertificates: certificates.length,
      totalDownloads: downloads.length,
      totalShares: shares.length,
      deviceBreakdown: this.getDeviceBreakdown(visits),
      topCities: this.getTopCities(certificates),
      shareBreakdown: this.getShareBreakdown(shares)
    };
  }

  getDeviceBreakdown(visits) {
    const devices = {};
    visits.forEach(visit => {
      const device = visit.data?.device || 'Unknown';
      devices[device] = (devices[device] || 0) + 1;
    });
    return devices;
  }

  getTopCities(certificates) {
    const cities = {};
    certificates.forEach(cert => {
      const city = cert.data?.city || 'Unknown';
      cities[city] = (cities[city] || 0) + 1;
    });
    return Object.entries(cities)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10)
      .reduce((obj, [city, count]) => ({ ...obj, [city]: count }), {});
  }

  getShareBreakdown(shares) {
    const platforms = {};
    shares.forEach(share => {
      const platform = share.data?.platform || 'Unknown';
      platforms[platform] = (platforms[platform] || 0) + 1;
    });
    return platforms;
  }
}

// Initialize real analytics
const realAnalytics = new RealAnalytics();

// Replace the fake analytics with real one
window.analytics = realAnalytics;

// Admin function to view analytics (call in console)
window.viewAnalytics = () => {
  console.log('Analytics Summary:', realAnalytics.getAnalyticsSummary());
  return realAnalytics.getAnalyticsSummary();
};

// Export analytics data (for admin)
window.exportAnalytics = () => {
  const data = {
    visits: JSON.parse(localStorage.getItem('analytics_visit') || '[]'),
    certificates: JSON.parse(localStorage.getItem('analytics_certificate_generated') || '[]'),
    downloads: JSON.parse(localStorage.getItem('analytics_certificate_downloaded') || '[]'),
    shares: JSON.parse(localStorage.getItem('analytics_content_shared') || '[]')
  };
  
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `analytics_${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
};