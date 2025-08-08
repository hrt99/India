# Real Analytics Setup Guide

## 🎯 What This System Tracks

### ✅ **Real Data Collected:**
- **Page Visits** - Every time someone visits your site
- **Certificate Generations** - When users create certificates (with name/city)
- **Certificate Downloads** - When users download their certificates
- **Social Shares** - When users share content (platform tracking)
- **Time Spent** - How long users stay on your site
- **Device Info** - Mobile/Tablet/Desktop usage
- **Browser Info** - Chrome, Firefox, Safari, etc.
- **Location** - Country/timezone information

## 🔧 **How to Set It Up:**

### **Option 1: Use Your Own Backend API**
1. Replace `https://your-backend-api.com/analytics` in `real-analytics.js` with your API endpoint
2. Create an endpoint that accepts POST requests with analytics data
3. Store data in your database (MySQL, PostgreSQL, MongoDB, etc.)

### **Option 2: Use Google Analytics 4**
```javascript
// Add to your HTML head:
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### **Option 3: Use Firebase Analytics**
```javascript
// Add Firebase SDK and initialize
import { analytics, logEvent } from 'firebase/analytics';
logEvent(analytics, 'certificate_generated', { city: 'Mumbai' });
```

## 📊 **View Your Analytics:**

### **In Browser Console:**
```javascript
// View summary
viewAnalytics()

// Export all data
exportAnalytics()
```

### **Local Storage Data:**
- `analytics_visit` - All page visits
- `analytics_certificate_generated` - All certificates created
- `analytics_certificate_downloaded` - All downloads
- `analytics_content_shared` - All shares

## 🚀 **Backend API Example (Node.js):**

```javascript
app.post('/analytics', (req, res) => {
  const { eventType, data, sessionId, timestamp } = req.body;
  
  // Save to database
  db.collection('analytics').add({
    eventType,
    data,
    sessionId,
    timestamp,
    ip: req.ip,
    userAgent: req.headers['user-agent']
  });
  
  res.json({ success: true });
});
```

## 📈 **Dashboard Queries:**

```sql
-- Total visits today
SELECT COUNT(*) FROM analytics 
WHERE eventType = 'visit' 
AND DATE(timestamp) = CURDATE();

-- Top cities for certificates
SELECT data->>'$.city' as city, COUNT(*) as count 
FROM analytics 
WHERE eventType = 'certificate_generated' 
GROUP BY city 
ORDER BY count DESC 
LIMIT 10;

-- Device breakdown
SELECT data->>'$.device' as device, COUNT(*) as count 
FROM analytics 
WHERE eventType = 'visit' 
GROUP BY device;
```

## 🔒 **Privacy Compliance:**
- Names are limited to 20 characters
- No sensitive personal data stored
- Users can opt-out via mute button
- Data is anonymized with session IDs

## 📱 **Current Features:**
- ✅ Real-time tracking
- ✅ Local storage backup
- ✅ Device detection
- ✅ Browser detection
- ✅ Time tracking
- ✅ Export functionality
- ✅ Privacy-friendly

Replace the API URL in `real-analytics.js` with your backend endpoint to start collecting real data!