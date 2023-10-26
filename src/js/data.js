var currentDate = new Date();
currentDate.setDate(currentDate.getDate() - 5);
var formattedDate = currentDate.toLocaleDateString();

var dateContainer = document.getElementById('date-container');
dateContainer.textContent = formattedDate;
