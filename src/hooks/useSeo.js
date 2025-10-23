// src/hooks/useSeo.js
import { useEffect } from 'react';

export function useSeo({ title, description, lang = 'en' }) {
  useEffect(() => {
    // Update document language
    document.documentElement.lang = lang;
    
    // Update title
    if (title) {
      document.title = title;
    }
    
    // Update meta description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        document.head.appendChild(metaDescription);
      }
      metaDescription.content = description;
    }

    // Handle hreflang tags for multilingual SEO
    updateHreflangTags(lang);
  }, [title, description, lang]);
}

function updateHreflangTags(currentLang) {
  const baseUrl = 'https://pfa-movement.com';
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fa', name: 'Persian' },
    { code: 'de', name: 'German' }
  ];

  // Remove existing hreflang tags
  document.querySelectorAll('link[rel="alternate"]').forEach(tag => tag.remove());

  // Add new hreflang tags for each language
  languages.forEach(lang => {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = lang.code;
    link.href = `${baseUrl}?lang=${lang.code}`;
    document.head.appendChild(link);
  });

  // Add x-default
  const defaultLink = document.createElement('link');
  defaultLink.rel = 'alternate';
  defaultLink.hreflang = 'x-default';
  defaultLink.href = baseUrl;
  document.head.appendChild(defaultLink);

  // Set canonical URL for current language
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = currentLang === 'en' ? baseUrl : `${baseUrl}?lang=${currentLang}`;
}