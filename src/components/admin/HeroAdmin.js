// components/admin/HeroAdmin.js
import React, { useState } from 'react';
import { useSectionData } from '../../hooks/useSectionData';

const HeroAdmin = () => {
  const [activeLanguage, setActiveLanguage] = useState('en');
  const { data, isLoading, error, updateLanguageData, handleImageUpload } = useSectionData('hero');

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger">
        <h4>Error Loading Hero Section</h4>
        <p>{error}</p>
      </div>
    );
  }

  const currentData = data[activeLanguage] || {};

  const handleSave = () => {
    alert('Hero section updated successfully!');
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>🎯 Hero Section Management</h2>
        <button onClick={handleSave} className="btn btn-success">
          💾 Save Changes
        </button>
      </div>

      {/* Language Selector */}
      <div className="mb-3">
        <label className="form-label">Select Language:</label>
        <select 
          className="form-select"
          value={activeLanguage}
          onChange={(e) => setActiveLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="fa">فارسی</option>
          <option value="de">Deutsch</option>
        </select>
      </div>

      {/* Background Image */}
      <div className="card mb-4">
        <div className="card-header">
          <h5>Background Image</h5>
        </div>
        <div className="card-body">
          {currentData.backgroundImage && (
            <div className="mb-3">
              <img 
                src={currentData.backgroundImage} 
                alt="Hero Background" 
                className="img-fluid rounded"
                style={{ maxHeight: '200px' }}
              />
            </div>
          )}
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files[0]) {
                handleImageUpload(activeLanguage, 'backgroundImage', e.target.files[0]);
              }
            }}
          />
        </div>
      </div>

      {/* Title Input */}
      <div className="card mb-4">
        <div className="card-header">
          <h5>Title</h5>
        </div>
        <div className="card-body">
          <input
            type="text"
            className="form-control"
            value={currentData.title || ''}
            onChange={(e) => updateLanguageData(activeLanguage, 'title', e.target.value)}
            placeholder="Enter hero title"
          />
        </div>
      </div>

      {/* Subtitle Input */}
      <div className="card mb-4">
        <div className="card-header">
          <h5>Subtitle</h5>
        </div>
        <div className="card-body">
          <textarea
            className="form-control"
            rows="3"
            value={currentData.subtitle || ''}
            onChange={(e) => updateLanguageData(activeLanguage, 'subtitle', e.target.value)}
            placeholder="Enter hero subtitle"
          />
        </div>
      </div>

      {/* Support Button Text */}
      <div className="card mb-4">
        <div className="card-header">
          <h5>Support Button Text</h5>
        </div>
        <div className="card-body">
          <input
            type="text"
            className="form-control"
            value={currentData.supportButton || ''}
            onChange={(e) => updateLanguageData(activeLanguage, 'supportButton', e.target.value)}
            placeholder="Enter support button text"
          />
        </div>
      </div>

      {/* Preview Section */}
      <div className="card">
        <div className="card-header">
          <h5>Preview</h5>
        </div>
        <div className="card-body">
          <div 
            className="hero-preview p-5 rounded text-white text-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${currentData.backgroundImage || 'https://via.placeholder.com/1200x600'})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '300px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <h1>{currentData.title || 'Title Preview'}</h1>
            <p className="lead">{currentData.subtitle || 'Subtitle preview'}</p>
            {currentData.supportButton && (
              <button className="btn btn-primary btn-lg mt-3">
                {currentData.supportButton}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAdmin;