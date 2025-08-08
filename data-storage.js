// Data Storage and Management System

class DataStorage {
  constructor() {
    this.initializeStorage();
  }

  initializeStorage() {
    // Initialize localStorage with default data if not exists
    if (!localStorage.getItem('independenceData')) {
      const defaultData = {
        visitors: [],
        certificates: [],
        shares: { whatsapp: 0, facebook: 0, twitter: 0, copy: 0 },
        analytics: {
          totalVisitors: 0,
          certificatesGenerated: 0,
          totalShares: 0,
          activeUsers: 0,
          downloadsCount: 0
        },
        settings: {
          lastUpdated: new Date().toISOString()
        }
      };
      localStorage.setItem('independenceData', JSON.stringify(defaultData));
    }
  }

  getData() {
    return JSON.parse(localStorage.getItem('independenceData'));
  }

  saveData(data) {
    data.settings.lastUpdated = new Date().toISOString();
    localStorage.setItem('independenceData', JSON.stringify(data));
  }

  // Visitor tracking
  trackVisitor(visitorInfo) {
    const data = this.getData();
    const visitor = {
      id: Date.now(),
      ip: visitorInfo.ip || 'Unknown',
      location: visitorInfo.location || 'Unknown',
      userAgent: navigator.userAgent,
      visitTime: new Date().toISOString(),
      pagesViewed: 1,
      timeSpent: 0,
      referrer: document.referrer || 'Direct'
    };
    
    data.visitors.push(visitor);
    data.analytics.totalVisitors++;
    this.saveData(data);
    return visitor.id;
  }

  // Certificate generation
  saveCertificate(certificateData) {
    const data = this.getData();
    const certificate = {
      id: Date.now(),
      name: certificateData.fullName,
      city: certificateData.city,
      generatedAt: new Date().toISOString(),
      downloaded: false,
      shared: false,
      ip: this.getVisitorIP()
    };
    
    data.certificates.push(certificate);
    data.analytics.certificatesGenerated++;
    this.saveData(data);
    return certificate.id;
  }

  // Share tracking
  trackShare(platform) {
    const data = this.getData();
    data.shares[platform] = (data.shares[platform] || 0) + 1;
    data.analytics.totalShares++;
    this.saveData(data);
  }

  // Get statistics
  getStats() {
    const data = this.getData();
    return {
      totalVisitors: data.analytics.totalVisitors,
      certificatesGenerated: data.analytics.certificatesGenerated,
      totalShares: data.analytics.totalShares,
      activeUsers: this.getActiveUsers(),
      topSharedPlatform: this.getTopSharedPlatform(),
      recentCertificates: data.certificates.slice(-5).reverse()
    };
  }

  getActiveUsers() {
    const data = this.getData();
    const last24Hours = new Date(Date.now() - 24 * 60 * 60 * 1000);
    return data.visitors.filter(visitor => 
      new Date(visitor.visitTime) > last24Hours
    ).length;
  }

  getTopSharedPlatform() {
    const data = this.getData();
    const shares = data.shares;
    return Object.keys(shares).reduce((a, b) => shares[a] > shares[b] ? a : b);
  }

  // Export data
  exportData(type = 'all') {
    const data = this.getData();
    let exportData;
    
    switch(type) {
      case 'visitors':
        exportData = data.visitors;
        break;
      case 'certificates':
        exportData = data.certificates;
        break;
      case 'shares':
        exportData = data.shares;
        break;
      default:
        exportData = data;
    }
    
    return exportData;
  }

  // Clear old data (older than 30 days)
  cleanupOldData() {
    const data = this.getData();
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    
    data.visitors = data.visitors.filter(visitor => 
      new Date(visitor.visitTime) > thirtyDaysAgo
    );
    
    data.certificates = data.certificates.filter(cert => 
      new Date(cert.generatedAt) > thirtyDaysAgo
    );
    
    this.saveData(data);
  }

  getVisitorIP() {
    // In a real application, you would get this from server
    return 'Unknown';
  }
}

// Initialize data storage
const dataStorage = new DataStorage();

// Track page visit
document.addEventListener('DOMContentLoaded', function() {
  // Track visitor
  dataStorage.trackVisitor({
    location: 'India', // You can use IP geolocation API
    ip: 'Unknown'
  });
  
  // Update live stats
  updateLiveStats();
  
  // Clean up old data periodically
  if (Math.random() < 0.1) { // 10% chance on each visit
    dataStorage.cleanupOldData();
  }
});

// Update live statistics on page
function updateLiveStats() {
  const stats = dataStorage.getStats();
  
  // Update visitor count
  const visitorsElement = document.getElementById('visitorsCount');
  if (visitorsElement) {
    visitorsElement.textContent = stats.totalVisitors.toLocaleString();
  }
  
  // Update certificates count
  const certificatesElement = document.getElementById('certificatesCount');
  if (certificatesElement) {
    certificatesElement.textContent = stats.certificatesGenerated.toLocaleString();
  }
  
  // Update shares count
  const sharesElement = document.getElementById('sharesCount');
  if (sharesElement) {
    sharesElement.textContent = stats.totalShares.toLocaleString();
  }
}

// Enhanced certificate generation with data saving
function generateCertificateWithData(formData) {
  const certificateId = dataStorage.saveCertificate(formData);
  updateLiveStats();
  return certificateId;
}

// Enhanced sharing with tracking
function shareWithTracking(platform) {
  dataStorage.trackShare(platform);
  updateLiveStats();
  
  // Original sharing logic
  switch(platform) {
    case 'whatsapp':
      shareOnWhatsApp();
      break;
    case 'facebook':
      shareOnFacebook();
      break;
    case 'twitter':
      shareOnTwitter();
      break;
    case 'copy':
      copyLink();
      break;
  }
}

// Update certificate form submission
document.addEventListener('DOMContentLoaded', function() {
  const certificateForm = document.getElementById('certificateForm');
  if (certificateForm) {
    certificateForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = {
        fullName: document.getElementById('fullName').value,
        city: document.getElementById('city').value
      };
      
      const certificateId = generateCertificateWithData(formData);
      
      // Show success message
      document.getElementById('certificatePreview').style.display = 'block';
      certificateForm.style.display = 'none';
      
      // Play music 2 times
      playCertificateMusic();
    });
  }
});

// Export function for admin panel
function exportDataForAdmin(type) {
  const data = dataStorage.exportData(type);
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `independence_day_${type}_${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

// Make functions available globally
window.dataStorage = dataStorage;
window.shareWithTracking = shareWithTracking;
window.exportDataForAdmin = exportDataForAdmin;