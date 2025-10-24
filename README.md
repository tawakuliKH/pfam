# Progressive Forces of Afghanistan Movement (PFA) - Official Website

![PFA Movement Logo](https://pfa-movement.com/logo-512.png)

## 🌟 About The Project

The Progressive Forces of Afghanistan Movement (PFA) is a non-profit organization dedicated to defending women's rights, promoting gender equality, and fighting for justice in Afghanistan. This official website serves as the digital platform for our movement, providing information about our mission, leadership team, activities, and ways to support our cause.

### 🎯 Key Features

- **Multi-language Support**: Full support for English, German, and Persian (Farsi) with RTL layout
- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **SEO Optimized**: Comprehensive search engine optimization with structured data
- **Interactive Components**: Dynamic news gallery, announcement system, and donation platform
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🚀 Live Demo

**Live Website**: [https://pfa-movement.com](https://pfa-movement.com)

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **React Router** - Client-side routing
- **React i18next** - Internationalization and localization
- **Bootstrap 5** - Responsive CSS framework
- **Font Awesome** - Icons and UI elements
- **Animate.css** - CSS animations

### Backend & Deployment
- **Static Site Generation** - Optimized for performance
- **HTTPS & Security** - Secure connections and best practices
- **CDN Integration** - Fast content delivery worldwide

### SEO & Analytics
- **Structured Data** - Schema.org markup for search engines
- **Open Graph** - Social media sharing optimization
- **Meta Tags** - Comprehensive SEO meta information
- **Multi-language SEO** - hreflang tags for international SEO

## 📁 Project Structure

```
src/
├── components/
│   ├── Home.js              # Main landing page
│   ├── Navbar.js            # Navigation with language switcher
│   ├── Hero.js              # Hero section with call-to-action
│   ├── About.js             # Leadership team and organization info
│   ├── Values.js            # Core values and principles
│   ├── Story.js             # Organization history
│   ├── Issues.js            # Key issues we address
│   ├── Contact.js           # Contact information
│   ├── Donate.js            # Donation system
│   ├── NewsDetail.js        # News and stories detail page
│   ├── Gallery.js           # Photo and video gallery
│   ├── Announcements.js     # Official announcements system
│   └── Footer.js            # Site footer
├── hooks/
│   ├── useAnimation.js      # Scroll animations
│   └── useSeo.js           # SEO management
├── locales/
│   ├── en/                  # English translations
│   ├── de/                  # German translations
│   └── fa/                  # Persian translations
├── i18n.js                  # Internationalization configuration
└── App.css                  # Global styles and theming
```

## 🎨 Design System

### Color Palette
- **Primary**: `#0b6b6b` (Teal)
- **Primary Dark**: `#064949` (Dark Teal)
- **Primary Light**: `#0e8a8a` (Light Teal)
- **Accent**: `#e67e22` (Orange)
- **Secondary**: `#1a9aa9` (Blue Teal)

### Typography
- **Primary Font**: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif
- **RTL Support**: Vazirmatn for Persian language
- **Responsive**: Fluid typography scaling

## 🌐 Multi-language Support

The website supports three languages with automatic detection:

1. **English** (Default) - `?lang=en`
2. **German** (Deutsch) - `?lang=de`
3. **Persian** (فارسی) - `?lang=fa`

### RTL Implementation
- Automatic text direction switching for Persian
- Font family optimization for each language
- Proper alignment and layout adjustments

## 📱 Key Sections

### 1. Homepage
- Hero section with mission statement
- Leadership team with interactive modals
- Organization values and principles
- Historical timeline
- Current issues addressed
- Contact information
- Donation system

### 2. News & Stories
- Dynamic image galleries
- Categorized content (News vs Stories)
- Auto-sliding carousels
- Related content suggestions

### 3. Gallery
- Photo galleries with pagination
- Video content integration
- Modal viewing experience
- YouTube channel integration

### 4. Announcements
- Official statements and documents
- Multi-language PDF downloads
- Categorized announcement system
- Professional file management

### 5. Donation System
- Multiple donation tiers
- Payment method selection
- Transparent spending breakdown
- Secure donation processing

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pfa-movement/website.git
   cd website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

### Environment Setup

Create a `.env` file in the root directory:
```env
REACT_APP_SITE_URL=https://pfa-movement.com
REACT_APP_CONTACT_EMAIL=contact@pfa-movement.com
REACT_APP_PHONE_NUMBER=+49-1573-1629920
```

## 📊 SEO & Performance

### Optimization Features
- **Lazy Loading**: Images and components load on demand
- **Code Splitting**: Optimized bundle sizes
- **Compressed Assets**: Optimized images and fonts
- **Caching Strategy**: Efficient browser caching
- **Structured Data**: Rich snippets for search engines

### SEO Implementation
- Meta tags for each page
- Open Graph and Twitter Cards
- XML sitemap generation
- Robot.txt configuration
- Canonical URL management

## 🤝 Contributing

We welcome contributions from the community! Please follow these steps:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow React best practices
- Maintain consistent code style
- Add proper documentation
- Test across all supported languages
- Ensure responsive design compatibility

## 📝 Content Management

### Adding New Content

#### News Articles
Add new news items in `src/locales/[language]/translation.json`:
```json
"news4": {
  "title": "Your News Title",
  "date": "January 1, 2024",
  "author": "Author Name",
  "content": ["Paragraph 1", "Paragraph 2"]
}
```

#### Announcements
Update the `announcementsData` array in `src/components/Announcements.js`:
```javascript
{
  id: 3,
  date: "January 1, 2024",
  title: {
    en: "English Title",
    fa: "عنوان فارسی",
    ps: "پښتو عنوان",
    ur: "اردو عنوان"
  },
  files: [
    {
      language: "English",
      code: "en",
      name: "file_name.pdf",
      url: "/announcements/file_name.pdf",
      size: "1.5 MB"
    }
  ],
  description: {
    en: "English description",
    fa: "شرح فارسی",
    ps: "پښتو شرح",
    ur: "اردو تفصیل"
  }
}
```

## 🌍 Deployment

### Production Build
```bash
npm run build
```

The build folder contains optimized production files ready for deployment.

### Deployment Platforms
- **Netlify**: Connect GitHub repository for automatic deployments
- **Vercel**: Zero-configuration deployment
- **AWS S3 + CloudFront**: Scalable static hosting
- **GitHub Pages**: Free hosting for open-source projects

## 🔧 Configuration

### Language Configuration
Update `src/i18n.js` to add new languages:
```javascript
const resources = {
  en: { translation: enTranslation },
  de: { translation: deTranslation },
  fa: { translation: faTranslation },
  // Add new language here
};
```

### SEO Configuration
Modify `src/hooks/useSeo.js` for custom SEO settings:
```javascript
useSeo({
  title: "Custom Page Title",
  description: "Custom page description",
  lang: "en"
});
```

## 📞 Support

For support and inquiries:
- **Email**: contact@pfa-movement.com
- **Phone**: +49-1573-1629920
- **LinkedIn**: [Progressive Forces of Afghanistan Movement](https://www.linkedin.com/in/progressive-forces-of-afghanistan-movement)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React community for excellent documentation
- Bootstrap team for responsive framework
- i18next for internationalization solutions
- All contributors and supporters of the PFA Movement

---

<div align="center">

**Made with ❤️ for the women of Afghanistan**

[🏠 Website](https://pfa-movement.com) | [📧 Contact](mailto:contact@pfa-movement.com) | [💼 LinkedIn](https://www.linkedin.com/in/progressive-forces-of-afghanistan-movement)

</div>