import React, { useState, useEffect } from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, addMonths, subMonths } from 'date-fns';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [reminders, setReminders] = useState({});
  const [titles, setTitles] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReminder, setNewReminder] = useState('');
  const [newTitle, setNewTitle] = useState('');

  useEffect(() => {
    const storedReminders = JSON.parse(localStorage.getItem('reminders')) || {};
    const storedTitles = JSON.parse(localStorage.getItem('titles')) || {};
    setReminders(storedReminders);
    setTitles(storedTitles);
  }, []);

  useEffect(() => {
    localStorage.setItem('reminders', JSON.stringify(reminders));
    localStorage.setItem('titles', JSON.stringify(titles));
  }, [reminders, titles]);

  const renderHeader = () => {
    const dateFormat = "MMMM yyyy";
    return (
      <div className="flex justify-between items-center py-4 px-6 bg-blue-600 text-white rounded-t-lg shadow-md">
        <button onClick={prevMonth} className="text-white hover:text-gray-300">&lt;</button>
        <span className="text-xl font-semibold">{format(currentMonth, dateFormat)}</span>
        <button onClick={nextMonth} className="text-white hover:text-gray-300">&gt;</button>
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    const dateFormat = "EEE";
    const startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="text-center py-2 text-sm font-semibold text-gray-700">
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className="grid grid-cols-7 bg-gray-200 py-2 rounded-t-lg">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, "d");
        const cloneDay = day;
        const formattedFullDate = format(cloneDay, 'yyyy-MM-dd');
        days.push(
          <div
            key={formattedFullDate}
            className={`p-2 sm:p-4 text-center cursor-pointer border hover:bg-blue-100 rounded-lg ${!isSameMonth(day, monthStart) ? "text-gray-400" : "text-gray-800"
              } ${isSameDay(day, selectedDate) ? "bg-blue-500 text-white" : ""}`}
            onClick={() => openModal(cloneDay)}
          >
            <span className="block mb-2">{formattedDate}</span>
            {titles[formattedFullDate] && (
              <div className="text-xs font-semibold text-gray-900 mt-1 overflow-hidden">
                {titles[formattedFullDate]}
              </div>
            )}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(<div className="grid grid-cols-7 gap-1 sm:pt-2 pt-1 sm:gap-2" key={day}>{days}</div>);
      days = [];
    }
    return <div>{rows}</div>;
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const addReminder = (date, title, reminder) => {
    const formattedDate = format(date, 'yyyy-MM-dd');
    setReminders({
      ...reminders,
      [formattedDate]: reminder,
    });
    setTitles({
      ...titles,
      [formattedDate]: title,
    });
    setNewReminder('');
    setNewTitle('');
    closeModal();
  };

  const deleteReminder = (date) => {
    const formattedDate = format(date, 'yyyy-MM-dd');
    const updatedReminders = { ...reminders };
    const updatedTitles = { ...titles };
    delete updatedReminders[formattedDate];
    delete updatedTitles[formattedDate];
    setReminders(updatedReminders);
    setTitles(updatedTitles);
    closeModal();
  };

  const openModal = (day) => {
    setSelectedDate(day);
    const formattedDate = format(day, 'yyyy-MM-dd');
    setNewReminder(reminders[formattedDate] || '');
    setNewTitle(titles[formattedDate] || '');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4 bg-white shadow-lg rounded-xl">
      {renderHeader()}
      {renderDays()}
      {renderCells()}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50" onClick={closeModal}></div>
          <div className="bg-white p-6 rounded-lg shadow-lg z-10 w-full max-w-md mx-2">
            <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">{`Manage Schedule for ${format(selectedDate, 'MMMM d, yyyy')}`}</h3>
            <input
              className="w-full h-10 p-2 border rounded-lg mb-2"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Enter the title"
            />
            <textarea
              className="w-full h-24 p-2 border rounded-lg mb-4"
              value={newReminder}
              onChange={(e) => setNewReminder(e.target.value)}
              placeholder="Enter your reminder here"
            />
            <div className="flex justify-between">
              <button
                type="button"
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                onClick={() => deleteReminder(selectedDate)}
              >
                Delete
              </button>
              <div>
                <button
                  type="button"
                  className="mr-2 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  onClick={() => addReminder(selectedDate, newTitle, newReminder)}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
