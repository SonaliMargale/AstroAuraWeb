

import React, { useState, useRef, useEffect } from 'react';
import './TimePicker.css';

const TimePicker = () => {
  const getCurrentTime = () => {
    const date = new Date();
    let hour = date.getHours();
    const period = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    return {
      hour: String(hour).padStart(2, '0'),
      minute: String(date.getMinutes()).padStart(2, '0'),
      second: String(date.getSeconds()).padStart(2, '0'),
      period,
    };
  };

  const [selectedTime, setSelectedTime] = useState(getCurrentTime());
  console.log('selected time',selectedTime);

  const hoursRef = useRef();
  const minutesRef = useRef();
  const secondsRef = useRef();
  const periodRef = useRef();

  const generateNumbers = max =>
    Array.from({ length: max }, (_, i) => String(i).padStart(2, '0'));

  const handleScroll = (ref, type) => {
    const itemHeight = 50;
    const scrollTop = ref.current.scrollTop;
    const index = Math.round(scrollTop / itemHeight);

    if (type === 'period') {
       const periods = ['AM', 'PM'];
       const value = periods[index] || 'AM';
      setSelectedTime(prev => ({ ...prev, period: value }));
    } else {
      const value = String(index).padStart(2, '0');
      setSelectedTime(prev => ({ ...prev, [type]: value }));
    }
  };

  useEffect(() => {
    const scrollTo = (ref, value, type) => {
      const itemHeight = 50;
      let index = 0;
      if (type === 'period') {
        index = value === 'AM' ? 1 : 2;
      } else {
        index = parseInt(value) + 1; // +1 for spacer
      }
      ref.current.scrollTo({ top: index * itemHeight, behavior: 'auto' });
    };

    scrollTo(hoursRef, selectedTime.hour, 'hour');
    scrollTo(minutesRef, selectedTime.minute, 'minute');
    scrollTo(secondsRef, selectedTime.second, 'second');
    scrollTo(periodRef, selectedTime.period, 'period');
  }, []);

  const wheelColumn = (ref, items, type) => (
    <div className="wheel" ref={ref} onScroll={() => handleScroll(ref, type)}>
      <div className="wheel-item spacer" />
      {items.map((item, index) => {
        const itemHeight = 50;
        const scrollTop = ref.current?.scrollTop || 0;
        const centerIndex = Math.round(scrollTop / itemHeight) ;
        const isSelected = index === centerIndex;

        return (
          <div
            key={item + type}
            className={`wheel-item ${isSelected ? 'selected' : ''}`}
          >
            {item}
          </div>
        );
      })}
      <div className="wheel-item spacer" />
    </div>
  );

  return (
    <div className="time-picker-container">
      <label>Enter your Time of Birth</label>
      <div className="dropdown-box">Select Time </div>
      <div className="dropdown-content">
        {wheelColumn(hoursRef, generateNumbers(13), 'hour')}
        <span>:</span>
        {wheelColumn(minutesRef, generateNumbers(60), 'minute')}
        <span>:</span>
        {wheelColumn(secondsRef, generateNumbers(60), 'second')}
        {wheelColumn(periodRef, ['','AM', 'PM'], 'period')}
      </div>
    </div>
  );
};

export default TimePicker;
