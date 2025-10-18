// Enhanced static-render.js for better SEO
window.seoBoost = {
  init: function() {
    // Add critical content immediately for crawlers
    this.addSEOContent();
    this.enhanceMetaTags();
    this.setCanonicalURL();
  },
  
  addSEOContent: function() {
    const root = document.getElementById('root');
    if (root && !this.hasVisibleContent()) {
      root.innerHTML = this.getFallbackContent();
    }
  },
  
  hasVisibleContent: function() {
    return document.body.textContent.trim().length > 200;
  },
  
  getFallbackContent: function() {
    const lang = document.documentElement.lang || 'en';
    const content = {
      en: `
        <div class="seo-fallback">
          <h1>Progressive Forces of Afghanistan Movement</h1>
          <p>Defending women's rights and promoting gender equality in Afghanistan. 
             PFA Movement stands against Taliban oppression and fights for human rights, 
             education access, and democratic values.</p>
          <nav>
            <a href="/">Home</a> | <a href="/?lang=de">German</a> | <a href="/?lang=fa">Persian</a>
          </nav>
        </div>
      `,
      fa: `
        <div class="seo-fallback" dir="rtl">
          <h1>جنبش نیروهای مترقی افغانستان</h1>
          <p>دفاع از حقوق زنان و ترویج برابری جنسیتی در افغانستان. 
             جنبش پی اف ای در برابر ستم طالبان ایستاده و برای حقوق بشر، 
             دسترسی به آموزش و ارزش‌های دموکراتیک مبارزه می‌کند.</p>
          <nav>
            <a href="/?lang=fa">خانه</a> | <a href="/?lang=en">English</a> | <a href="/?lang=de">آلمانی</a>
          </nav>
        </div>
      `,
      de: `
        <div class="seo-fallback">
          <h1>Progressiven Kräfte der Afghanistan-Bewegung</h1>
          <p>Verteidigung der Frauenrechte und Förderung der Gleichstellung in Afghanistan. 
             Die PFA-Bewegung steht gegen die Taliban-Unterdrückung und kämpft für Menschenrechte, 
             Bildungszugang und demokratische Werte.</p>
          <nav>
            <a href="/?lang=de">Startseite</a> | <a href="/?lang=en">Englisch</a> | <a href="/?lang=fa">Persisch</a>
          </nav>
        </div>
      `
    };
    return content[lang] || content.en;
  },
  
  enhanceMetaTags: function() {
    // Ensure meta tags are properly set
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && !metaDescription.content) {
      metaDescription.content = "Defending women's rights and promoting gender equality in Afghanistan. PFA Movement against Taliban oppression.";
    }
  },
  
  setCanonicalURL: function() {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    let canonicalUrl = 'https://pfa-movement.com/';
    
    if (langParam && langParam !== 'en') {
      canonicalUrl = `https://pfa-movement.com/?lang=${langParam}`;
    }
    
    // Remove existing canonical
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }
    
    // Add new canonical
    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = canonicalUrl;
    document.head.appendChild(link);
  }
};

// Initialize immediately
document.addEventListener('DOMContentLoaded', function() {
  window.seoBoost.init();
});

// Also initialize if DOM is already loaded
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  window.seoBoost.init();
}