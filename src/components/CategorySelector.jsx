// import React, { useState } from 'react';
// import './CategorySelector.css';
// import {
//   FaRegChartBar,
//   FaSuitcase,
//   FaHeart,
//   FaHandsHelping
// } from 'react-icons/fa';

// const CategorySelector = ({ onSelect }) => {
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   const categories = [
//     { title: "Birth Charts", subtitle: "What career path aligns best with my birth chart?" },
//     { title: "Career Goals", subtitle: "Am I likely to settle abroad for work?" },
//     { title: "Lovelife Insights", subtitle: "How do Venus and Mars influence my lovelife?" },
//     { title: "General Support", subtitle: "Is this a karmic relationship, and what can I learn from it?" },
//     {
//       title: "Birth Charts",
//       subtitle: "What career path aligns best with my birth chart?",
//       icon: <FaRegChartBar size={16} />
//     },
//     {
//       title: "Career Goals",
//       subtitle: "Am I likely to settle abroad for work?",
//       icon: <FaSuitcase size={16} />
//     },
//     {
//       title: "Lovelife Insights",
//       subtitle: "How do Venus and Mars influence my lovelife?",
//       icon: <FaHeart size={16} />
//     },
//     {
//       title: "General Support",
//       subtitle: "Is this a karmic relationship, and what can I learn from it?",
//       icon: <FaHandsHelping size={16} />
//     }
//   ];

//   const handleSelect = (cat, index) => {
//     setSelectedIndex(index);
//     onSelect && onSelect(cat);
//   };

//   return (
//     <div className="category-selector">
//       <h2 className="heading">How can we assist you today?</h2>
//       <p className="subtext">
//         Get expert guidance powered by AI agents specializing in Astrology, Horoscopes, and Spiritual Insights.
//         Choose the celestial guide that aligns with your needs and begin your journey with the stars.
//       </p>

//       <div className="category-scroll">
//         <div className="category-grid">
//           {categories.map((cat, idx) => (
//             <div
//               key={idx}
//               className={`category-tile ${selectedIndex === idx ? 'selected' : ''}`}
//               onClick={() => handleSelect(cat, idx)}
//             >
//               <div>
//                   {(idx >= 4 && idx <= 7 && cat.icon) && <div className="icon">{cat.icon}</div>}
//                 <h4>{cat.title}</h4>
//                 </div>
              
//               <p>{cat.subtitle}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategorySelector;


import React, { useState } from 'react';
import './CategorySelector.css';
import { FaRegChartBar, FaSuitcase, FaHeart, FaHandsHelping } from 'react-icons/fa';

const CategorySelector = ({ onSelect }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const categories = [
    { title: "Birth Charts", subtitle: "What career path aligns best with my birth chart?" },
    { title: "Career Goals", subtitle: "Am I likely to settle abroad for work?" },
    { title: "Lovelife Insights", subtitle: "How do Venus and Mars influence my lovelife?" },
    { title: "General Support", subtitle: "Is this a karmic relationship, and what can I learn from it?" },
    { title: "Birth Charts", subtitle: "What career path aligns best with my birth chart?", icon: <FaRegChartBar /> },
    { title: "Career Goals", subtitle: "Am I likely to settle abroad for work?", icon: <FaSuitcase /> },
    { title: "Lovelife Insights", subtitle: "How do Venus and Mars influence my lovelife?", icon: <FaHeart /> },
    { title: "General Support", subtitle: "Is this a karmic relationship, and what can I learn from it?", icon: <FaHandsHelping /> }
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
              {cat.icon && <span className="icon">{cat.icon}</span>}
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
