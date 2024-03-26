/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let dailyRate = 35;
let dayCounter = 0;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
document.querySelectorAll('.day-selector li').forEach(day => {
    day.addEventListener('click', function() {
        if (!this.classList.contains('clicked')) {
            this.classList.add('clicked');
            dayCounter++; // 仅当新选中一个天时，计数器加1
        }
        calculateCost(); // 每次点击后重新计算费用
    });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
document.getElementById('clear-button').addEventListener('click', function() {
    document.querySelectorAll('.day-selector li').forEach(day => {
        day.classList.remove('clicked');
    });
    dayCounter = 0;
    calculateCost();
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
document.getElementById('half').addEventListener('click', function() {
    dailyRate = 20;
    this.classList.add('clicked');
    document.getElementById('full').classList.remove('clicked');
    calculateCost();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
document.getElementById('full').addEventListener('click', function() {
    dailyRate = 35;
    this.classList.add('clicked');
    document.getElementById('half').classList.remove('clicked');
    calculateCost();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculateCost() {
    let totalCost = dayCounter * dailyRate;
    document.getElementById('calculated-cost').innerHTML = totalCost;
}