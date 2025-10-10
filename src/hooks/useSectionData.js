// hooks/useSectionData.js
import { useState, useEffect } from 'react';
import { defaultContent } from '../data/sectionData';

export const useSectionData = (sectionKey) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Check if defaultContent exists and has data
      if (!defaultContent || typeof defaultContent !== 'object') {
        throw new Error('Default content data is not loaded properly');
      }

      // Extract section data from the language-first structure
      const sectionData = {};
      Object.keys(defaultContent).forEach(language => {
        // Safely check if the section exists in this language
        if (defaultContent[language] && defaultContent[language][sectionKey]) {
          sectionData[language] = defaultContent[language][sectionKey];
        }
      });

      if (Object.keys(sectionData).length === 0) {
        throw new Error(`Section '${sectionKey}' not found in any language`);
      }

      // Load saved data from localStorage
      const savedData = localStorage.getItem(`pfa_${sectionKey}`);
      
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        setData(parsedData);
      } else {
        setData(sectionData);
      }
      setError(null);
    } catch (err) {
      console.error('Error loading section data:', err);
      setError(err.message);
      setData({});
    } finally {
      setIsLoading(false);
    }
  }, [sectionKey]);

  const saveData = (newData) => {
    try {
      setData(newData);
      localStorage.setItem(`pfa_${sectionKey}`, JSON.stringify(newData));
      setError(null);
    } catch (err) {
      console.error('Error saving data:', err);
      setError('Failed to save data');
    }
  };

  const updateLanguageData = (language, field, value) => {
    const updatedData = {
      ...data,
      [language]: {
        ...(data[language] || {}), // Ensure language object exists
        [field]: value
      }
    };
    saveData(updatedData);
  };

  const updateNestedLanguageData = (language, path, value) => {
    const keys = path.split('.');
    const currentLangData = data[language] || {};
    
    const updatedLangData = updateNestedObject(currentLangData, keys, value);
    
    const updatedData = {
      ...data,
      [language]: updatedLangData
    };
    
    saveData(updatedData);
  };

  const updateNestedObject = (obj, keys, value) => {
    if (!obj || typeof obj !== 'object') {
      obj = {};
    }
    
    if (keys.length === 1) {
      return { ...obj, [keys[0]]: value };
    }
    
    const currentKey = keys[0];
    return {
      ...obj,
      [currentKey]: updateNestedObject(obj[currentKey], keys.slice(1), value)
    };
  };

  const handleImageUpload = (language, field, file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      updateLanguageData(language, field, e.target.result);
    };
    reader.onerror = () => {
      setError('Failed to upload image');
    };
    reader.readAsDataURL(file);
  };

  const resetToDefault = () => {
    // Re-extract default data for this section
    const sectionData = {};
    Object.keys(defaultContent).forEach(language => {
      if (defaultContent[language] && defaultContent[language][sectionKey]) {
        sectionData[language] = defaultContent[language][sectionKey];
      }
    });
    setData(sectionData);
    localStorage.removeItem(`pfa_${sectionKey}`);
  };

  return {
    data,
    isLoading,
    error,
    updateLanguageData,
    updateNestedLanguageData,
    handleImageUpload,
    saveData,
    resetToDefault
  };
};