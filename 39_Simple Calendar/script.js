// Create a new Date object to represent the current date
const currentDate = new Date();

// Get the current month as a full month name
const options = { month: 'long' };
const currentMonthName = currentDate.toLocaleDateString('en-US', options);
document.querySelector(".month").innerHTML = currentMonthName;















// .......................... 
// Create an array of day names
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDay = new Date();
const currentDayIndex = currentDay.getDay();
const currentDayName = dayNames[currentDayIndex];
document.querySelector(".day").innerHTML = currentDayName;



//.........................
// Create a new Date object to represent the current date and time
// Create a new Date object to represent the current date
const Datee = new Date();

// Get the day of the month (1-31)
const day = Datee.getDate();
document.querySelector(".day-number").innerHTML = day;





// ............................ 
// Create a new Date object to represent the current date
const Year = new Date();

// Get the current year (4-digit format)
const currentYear = Year.getFullYear();

document.querySelector(".year").innerHTML = currentYear;
