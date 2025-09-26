import { useEffect } from 'react';

export const useAnimation = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll(
      ".employee-card, .mission-card, .value-card, .issue-card, .vision-item, .news-card, .story-card"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate__fadeInUp");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    animatedElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      animatedElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
};