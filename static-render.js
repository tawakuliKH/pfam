// static-render.js - Server-side rendering fallback for search engines
(function() {
    const isSearchEngine = /googlebot|bingbot|slurp|duckduckbot|baiduspider|yandexbot|sogou|exabot|facebookexternalhit|facebot|twitterbot/i.test(navigator.userAgent);
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'en';
    
    if (isSearchEngine) {
        // Create static content for search engines
        const staticContent = {
            'en': {
                title: 'Progressive Forces of Afghanistan Movement | PFA',
                description: 'Defending women\'s rights and promoting gender equality in Afghanistan. Fighting Taliban oppression and human rights violations.',
                content: `
                    <h1>Progressive Forces of Afghanistan Movement (PFA)</h1>
                    <p><strong>Defending women's rights and promoting gender equality in Afghanistan</strong></p>
                    <p>The Progressive Forces of Afghanistan Movement fights for women's rights, gender equality, and human rights in Afghanistan. We stand against Taliban oppression and work towards a better future for all Afghans.</p>
                    <h2>Our Mission</h2>
                    <ul>
                        <li>Defend women's and girls' rights in Afghanistan</li>
                        <li>Promote gender equality and social justice</li>
                        <li>Combat Taliban regime and human rights abuses</li>
                        <li>Support education and employment for Afghan women</li>
                    </ul>
                    <p>Join our movement to support women's rights in Afghanistan.</p>
                `
            },
            'fa': {
                title: 'جنبش نیروهای مترقی افغانستان | دفاع از حقوق زنان',
                description: 'دفاع از حقوق زنان و ترویج برابری جنسیتی در افغانستان. مبارزه با ستم طالبان و نقض حقوق بشر.',
                content: `
                    <h1>جنبش نیروهای مترقی افغانستان (PFA)</h1>
                    <p><strong>دفاع از حقوق زنان و ترویج برابری جنسیتی در افغانستان</strong></p>
                    <p>جنبش نیروهای مترقی افغانستان برای حقوق زنان، برابری جنسیتی و حقوق بشر در افغانستان مبارزه می‌کند. ما در برابر ستم طالبان ایستاده‌ایم و برای آینده‌ای بهتر برای تمام افغان‌ها کار می‌کنیم.</p>
                    <h2>ماموریت ما</h2>
                    <ul>
                        <li>دفاع از حقوق زنان و دختران در افغانستان</li>
                        <li>ترویج برابری جنسیتی و عدالت اجتماعی</li>
                        <li>مقابله با حکومت طالبان و نقض حقوق بشر</li>
                        <li>حمایت از تحصیل و اشتغال برای زنان افغان</li>
                    </ul>
                    <p>به جنبش ما بپیوندید تا از حقوق زنان در افغانستان حمایت کنید.</p>
                `
            },
            'de': {
                title: 'Progressiven Kräfte der Afghanistan-Bewegung | Frauenrechte',
                description: 'Verteidigung der Frauenrechte und Förderung der Gleichstellung in Afghanistan. Kampf gegen Taliban-Unterdrückung und Menschenrechtsverletzungen.',
                content: `
                    <h1>Progressiven Kräfte der Afghanistan-Bewegung (PFA)</h1>
                    <p><strong>Verteidigung der Frauenrechte und Förderung der Gleichstellung in Afghanistan</strong></p>
                    <p>Die Progressiven Kräfte der Afghanistan-Bewegung kämpfen für Frauenrechte, Gleichstellung der Geschlechter und Menschenrechte in Afghanistan. Wir stellen uns gegen die Taliban-Unterdrückung und arbeiten an einer besseren Zukunft für alle Afghanen.</p>
                    <h2>Unsere Mission</h2>
                    <ul>
                        <li>Verteidigung der Rechte von Frauen und Mädchen in Afghanistan</li>
                        <li>Förderung der Gleichstellung der Geschlechter und sozialer Gerechtigkeit</li>
                        <li>Bekämpfung des Taliban-Regimes und von Menschenrechtsverletzungen</li>
                        <li>Unterstützung von Bildung und Beschäftigung für afghanische Frauen</li>
                    </ul>
                    <p>Schließen Sie sich unserer Bewegung an, um die Frauenrechte in Afghanistan zu unterstützen.</p>
                `
            }
        };

        const content = staticContent[lang] || staticContent['en'];
        
        // Replace the entire page with static content
        document.write(`
            <!DOCTYPE html>
            <html lang="${lang}" ${lang === 'fa' ? 'dir="rtl"' : ''}>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${content.title}</title>
                <meta name="description" content="${content.description}">
                <meta name="robots" content="index, follow">
                <link rel="canonical" href="https://pfa-movement.com/?lang=${lang}">
                <style>
                    body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.6; }
                    h1 { color: #2c5aa0; text-align: center; }
                    h2 { color: #2c5aa0; margin-top: 30px; }
                    ul { padding-left: 20px; }
                    .container { background: #f9f9f9; padding: 30px; border-radius: 10px; margin-top: 20px; }
                    @media (max-width: 600px) { body { padding: 10px; } .container { padding: 20px; } }
                </style>
            </head>
            <body>
                <div class="container">
                    ${content.content}
                    <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center;">
                        <p><strong>Contact:</strong> contact@pfa-movement.com</p>
                        <p><a href="https://pfa-movement.com/?lang=${lang}">Visit our main website</a></p>
                    </div>
                </div>
                
                <!-- Hidden link to help Google discover other language versions -->
                <div style="display: none;">
                    <a href="https://pfa-movement.com/?lang=en" hreflang="en">English</a>
                    <a href="https://pfa-movement.com/?lang=de" hreflang="de">Deutsch</a>
                    <a href="https://pfa-movement.com/?lang=fa" hreflang="fa">فارسی</a>
                </div>
            </body>
            </html>
        `);
        
        // Stop execution since we've replaced the entire page
        throw new Error('Static render complete');
    }
})();