// Enhanced static-render.js for all languages
window.seoBoost = {
  init: function() {
    // Only add content for crawlers when root is empty
    const root = document.getElementById('root');
    if (root && root.innerHTML === '' && this.isLikelyCrawler()) {
      this.addCrawlerContent();
    }
  },
  
  isLikelyCrawler: function() {
    const ua = navigator.userAgent;
    return /bot|crawler|spider|googlebot|bingbot|slurp|duckduckbot|baiduspider|yandexbot|sogou|exabot|facebot|ia_archiver/i.test(ua);
  },
  
  addCrawlerContent: function() {
    const root = document.getElementById('root');
    const lang = document.documentElement.lang || 'en';
    
    const content = {
      en: `
        <div style="padding: 40px 20px; max-width: 800px; margin: 0 auto; font-family: Arial, sans-serif;">
          <h1>Progressive Forces of Afghanistan Movement (PFA)</h1>
          <p><strong>Defending women's rights and promoting gender equality in Afghanistan against Taliban oppression.</strong></p>
          <p>The PFA Movement works tirelessly to protect human rights, ensure education access, and promote democratic values in Afghanistan.</p>
          <h2>Our Mission</h2>
          <ul>
            <li>Protect women's rights and safety</li>
            <li>Promote gender equality and education</li>
            <li>Oppose Taliban oppression</li>
            <li>Support democratic values</li>
          </ul>
          <p>Contact: contact@pfa-movement.com | +49-1573-1629920</p>
        </div>
      `,
      fa: `
        <div style="padding: 40px 20px; max-width: 800px; margin: 0 auto; font-family: Vazirmatn, Tahoma, sans-serif; direction: rtl; text-align: right;">
          <h1>جنبش نیروهای مترقی افغانستان (پی اف ای)</h1>
          <p><strong>دفاع از حقوق زنان و ترویج برابری جنسیتی در افغانستان در برابر ظلم طالبان.</strong></p>
          <p>جنبش پی اف ای برای حفاظت از حقوق بشر، تضمین دسترسی به آموزش و ترویج ارزش‌های دموکراتیک در افغانستان تلاش می‌کند.</p>
          <h2>ماموریت ما</h2>
          <ul>
            <li>حفاظت از حقوق و امنیت زنان</li>
            <li>ترویج برابری جنسیتی و آموزش</li>
            <li>مقابله با ظلم طالبان</li>
            <li>حمایت از ارزش‌های دموکراتیک</li>
          </ul>
          <p>تماس: contact@pfa-movement.com | ۴۹-۱۵۷۳-۱۶۲۹۹۲۰+</p>
        </div>
      `,
      de: `
        <div style="padding: 40px 20px; max-width: 800px; margin: 0 auto; font-family: Arial, sans-serif;">
          <h1>Progressiven Kräfte der Afghanistan-Bewegung (PFA)</h1>
          <p><strong>Verteidigung der Frauenrechte und Förderung der Gleichstellung in Afghanistan gegen die Taliban-Unterdrückung.</strong></p>
          <p>Die PFA-Bewegung setzt sich unermüdlich für den Schutz der Menschenrechte, den Bildungszugang und die Förderung demokratischer Werte in Afghanistan ein.</p>
          <h2>Unsere Mission</h2>
          <ul>
            <li>Schutz der Frauenrechte und Sicherheit</li>
            <li>Förderung der Geschlechtergleichheit und Bildung</li>
            <li>Opposition gegen Taliban-Unterdrückung</li>
            <li>Unterstützung demokratischer Werte</li>
          </ul>
          <p>Kontakt: contact@pfa-movement.com | +49-1573-1629920</p>
        </div>
      `
    };
    
    root.innerHTML = content[lang] || content.en;
  }
};

// Initialize for crawlers
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => window.seoBoost.init());
} else {
  window.seoBoost.init();
}