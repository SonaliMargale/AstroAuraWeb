import dayjs from 'dayjs';
import { useState } from 'react';
import './Calendar.css';

const Calendar = () => {
    const today = dayjs();
    const [currentMonth, setCurrentMonth] = useState(today.startOf('month'));

    const startDay = currentMonth.startOf('week');
    const endDay = currentMonth.endOf('month').endOf('week')

    const dateArray = [];
    let date = startDay;

    while (date.isBefore(endDay, 'day')) {
        dateArray.push(date);
        date = date.add(1, 'day')
    }

    const handlePrevMonth = () => {
        setCurrentMonth(currentMonth.subtract(1, 'month'))
    };

    const handleNextMonth = () => {
        setCurrentMonth(currentMonth.add(1, 'month'))
    }

    const [selectedDate, setSelectedDate] = useState(today)

    return (
        <div className="calendar-container">
            <div className="month-sidebar">
                <button onClick={handlePrevMonth}>↑</button>
                <div className="year">{currentMonth.format('YYYY')}</div>
                <div className="month">{currentMonth.subtract(2, 'month').format('MMMM')}</div>
                <div className="month">{currentMonth.subtract(1, 'month').format('MMMM')}</div>
                <div className="month-active">{currentMonth.format('MMMM')}</div>
                <div className="month">{currentMonth.add(1, 'month').format('MMMM')}</div>
                <div className="month">{currentMonth.add(2, 'month').format('MMMM')}</div>
                <button onClick={handleNextMonth}>↓</button>
            </div>

            <div className="calendar-main">
                <div className="selected date">{selectedDate.format('MMM DD, dddd')}</div>
                <div className="calendar-grid">
                    {
                        ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d, i) => (
                            <div key={i} className="day">{d}</div>
                        ))}
                    {dateArray.map((dateItem, index) => (
                        <div
                            key={index}
                            className={`date ${dateItem.isSame(selectedDate, 'day') ? 'selected' : ''} ${!dateItem.isSame(currentMonth, 'month') ? 'faded' : ''}`}
                            onClick={() => setSelectedDate(dateItem)}
                        >
                            {dateItem.format('D')}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
export default Calendar;