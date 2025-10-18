// Enhanced static render for SEO
window.seoContent = {
  title: "Progressive Forces of Afghanistan (PFA Movement)",
  description: "Defending women's rights and promoting gender equality in Afghanistan. PFA Movement stands against Taliban oppression.",
  keywords: "Afghanistan women rights, gender equality, PFA Movement, women empowerment, Taliban opposition"
};

// Pre-render critical content for SEO
document.addEventListener('DOMContentLoaded', function() {
  const root = document.getElementById('root');
  if (root && root.innerHTML === '') {
    // Basic fallback content for crawlers
    root.innerHTML = `
      <div style="padding: 20px; text-align: center;">
        <h1>Progressive Forces of Afghanistan Movement</h1>
        <p>Defending women's rights and promoting gender equality in Afghanistan</p>
        <nav>
          <a href="/">Home</a> | 
          <a href="/?lang=de">Deutsch</a> | 
          <a href="/?lang=fa">فارسی</a>
        </nav>
      </div>
    `;
  }
});