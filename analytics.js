// Real Analytics Tracking System
class IndependenceDayAnalytics {
  constructor() {
    this.data = {
      visits: 0,
      certificates: 0,
      downloads: 0,
      shares: 0,
      users: []
    };
    this.loadData();
    this.trackVisit();
  }

  loadData() {
    const saved = localStorage.getItem('idayAnalytics');
    if (saved) {
      this.data = JSON.parse(saved);
    }
  }

  saveData() {
    localStorage.setItem('idayAnalytics', JSON.stringify(this.data));
  }

  trackVisit() {
    this.data.visits++;
    this.saveData();
  }

  trackCertificate(name, city) {
    this.data.certificates++;
    this.data.users.push({
      name: name,
      city: city,
      action: 'certificate_generated',
      timestamp: new Date().toISOString()
    });
    this.saveData();
  }

  trackDownload(name) {
    this.data.downloads++;
    this.data.users.push({
      name: name,
      action: 'certificate_downloaded',
      timestamp: new Date().toISOString()
    });
    this.saveData();
  }

  trackShare(platform) {
    this.data.shares++;
    this.data.users.push({
      action: `shared_on_${platform}`,
      timestamp: new Date().toISOString()
    });
    this.saveData();
  }

  getStats() {
    return {
      totalVisits: this.data.visits,
      certificatesGenerated: this.data.certificates,
      totalDownloads: this.data.downloads,
      socialShares: this.data.shares,
      recentUsers: this.data.users.slice(-10).reverse()
    };
  }
}

// Initialize analytics
window.analytics = new IndependenceDayAnalytics();

// Export for admin dashboard
window.getAnalytics = () => window.analytics.getStats();