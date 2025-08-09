import React, { useState } from 'react';
import './CategorySelector.css';
import BirtChartIcon from '../assets/BirthChartCard.svg';
import CareerGoalIcon from '../assets/CareerGoal.svg';
import LovelifeIcon from '../assets/Lovelife.svg';
import GeneralSupportIcon from '../assets/GeneralSupportIcon.svg'

const CategorySelector = ({ onSelect }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const categories = [
    { title: "Birth Charts", subtitle: "What career path aligns best with my birth chart?" },
    { title: "Career Goals", subtitle: "Am I likely to settle abroad for work?" },
    { title: "Lovelife Insights", subtitle: "How do Venus and Mars influence my lovelife?" },
    { title: "General Support", subtitle: "Is this a karmic relationship, and what can I learn from it?" },
    { title: "Birth Charts", subtitle: "What career path aligns best with my birth chart?", icon: BirtChartIcon },
    { title: "Career Goals", subtitle: "Am I likely to settle abroad for work?", icon: CareerGoalIcon },
    { title: "Lovelife Insights", subtitle: "How do Venus and Mars influence my lovelife?", icon: LovelifeIcon },
    { title: "General Support", subtitle: "Is this a karmic relationship, and what can I learn from it?", icon: GeneralSupportIcon }
  ];

  const handleSelect = (cat, index) => {
    setSelectedIndex(index);
    onSelect && onSelect(cat);
  };

  return (
    <div className="category-selector">
      <h2 className="heading">How can we assist you today?</h2>
      <p className="subtext">
        Get expert guidance powered by AI agents specializing in Astrology, Horoscopes, and Spiritual Insights.
        Choose the celestial guide that aligns with your needs and begin your journey with the stars.
      </p>

      <div className="category-grid">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className={`category-tile ${selectedIndex === idx ? 'selected' : ''}`}
            onClick={() => handleSelect(cat, idx)}
          >
            <div className="tile-header">
              {cat.icon && (
                typeof cat.icon === 'string'
                  ? <img src={cat.icon} alt={cat.title} className="icon" />
                  : <span className="icon">{cat.icon}</span>
              )}
              <h4>{cat.title}</h4>
            </div>

            <p>{cat.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
