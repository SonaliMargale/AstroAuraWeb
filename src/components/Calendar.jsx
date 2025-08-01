import React, { useState } from 'react';
import './Calendar.css';  

const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    const daysInMonth = lastDayOfMonth.getDate();
    const startDay = firstDayOfMonth.getDay();

    
    const handleMonthClick = (monthIndex) => {
        const newDate = new Date(selectedDate);
        newDate.setMonth(monthIndex);
        setSelectedDate(newDate);
    };

   
    const handleDayClick = (day) => {
        const newDate = new Date(year, month, day);
        setSelectedDate(newDate);
    };

 
    const getFormattedDate = () => {
        const options = { month: 'short', day: '2-digit', weekday: 'long' };
        return selectedDate.toLocaleDateString('en-US', options);
    };

    
    const calendarDays = [];

    for (let i = 0; i < startDay; i++) {
        calendarDays.push(<div key={`empty-${i}`} className="day empty"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const isSelected = selectedDate.getDate() === day;
        calendarDays.push(
            <div
                key={day}
                className={`day ${isSelected ? 'selected' : ''}`}
                onClick={() => handleDayClick(day)}
            >
                {day}
            </div>
        );
    }

    return (
        <div>
            <h2 className='header'>Enter your date of Birth</h2>
            <div className="calendar-container">
               
                <div className="sidebar">
                    <h2 className='year'>{year}</h2>
                    <div className="month-scroll-list">
                        {months.map((m, index) => (
                            <div
                                key={m}
                                className={`month-item ${month === index ? 'active' : ''}`}
                                onClick={() => handleMonthClick(index)}
                            >
                                {m}
                                <div className='|'>|</div>
                            </div>
                        ))}
                    </div>
                </div>

               
                <div className="calendar">
                    <h3>{getFormattedDate()}</h3>
                    <div className="weekdays">
                        {daysOfWeek.map((day) => (
                            <div key={day} className="weekday">{day}</div>
                        ))}
                    </div>
                    <div className="calendar-grid">
                        {calendarDays}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calendar;
