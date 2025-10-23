// crawl-priority.js - Urgent crawl signals for Persian version
(function() {
  // Only trigger for Persian pages that need indexing
  if (window.location.search.includes('lang=fa')) {
    
    // Add immediate content for crawlers
    const crawlSignal = document.createElement('div');
    crawlSignal.style.display = 'none';
    crawlSignal.innerHTML = `
      <!-- URGENT: Persian page needs indexing -->
      <h1>جنبش نیروهای مترقی افغانستان</h1>
      <p>سازمان دفاع از حقوق زنان در افغانستان. مبارزه با طالبان و حمایت از آموزش دختران.</p>
      <p>کلمات کلیدی: حقوق زنان افغانستان, جنبش مترقی افغانستان, مبارزه با طالبان, آموزش دختران</p>
    `;
    document.body.appendChild(crawlSignal);

    // Signal high importance to crawlers
    const metaImportance = document.createElement('meta');
    metaImportance.name = 'robots';
    metaImportance.content = 'max-snippet:200, max-image-preview:large, max-video-preview:-1';
    document.head.appendChild(metaImportance);
  }
})();