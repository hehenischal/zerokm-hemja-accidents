// const accidentCountElement = document.getElementById('accidentCount');
// const injuryPercentageElement = document.getElementById('injuryPercentage');
// const fatalPercentageElement = document.getElementById('fatalPercentage');


let totalAccidents;
// Update the accident count and statistics
// function updateStatistics() {
//     const startDate = new Date('2023-08-19'); // Change this to your desired start date
//     const currentDate = new Date();
//     const daysDifference = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));
//     const accidentsPerDay = 7;

//     totalAccidents = accidentsPerDay * daysDifference;
//     const injuryPercentage = 72;
//     const fatalPercentage = 7;

//     accidentCountElement.textContent = totalAccidents;
//     injuryPercentageElement.textContent = `${injuryPercentage}%`;
//     fatalPercentageElement.textContent = `${fatalPercentage}%`;
// }

// Call the updateStatistics function to populate data on page load
// updateStatistics();

// Function to animate counting from 0 to a target number


const startDate = new Date('2023-08-19'); // Change this to your desired start date
const currentDate = new Date();
const daysDifference = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));
const accidentsPerDay = 7;
totalAccidents = accidentsPerDay * daysDifference;
const injuryPercentage = 72;
const fatalPercentage = 7;
const totalDeaths = Math.ceil(fatalPercentage/100 * totalAccidents);
const totalInjuries = Math.ceil((injuryPercentage/100 * totalAccidents) - totalDeaths);
//cieling function



function animateCount(targetNumber, elementId) {
    const countElement = document.getElementById(elementId);

    let currentNumber = 0;
    const increment = Math.ceil(targetNumber / 100); // Adjust as needed
    console.log(increment);
    function updateCount() {
        currentNumber += increment;
        if (currentNumber >= targetNumber) {
            currentNumber = targetNumber;
            clearInterval(interval);
        }

        countElement.textContent = currentNumber.toLocaleString(); // Add commas for readability
    }

    const interval = setInterval(updateCount, 20); // Adjust the interval for desired speed
    console.log(interval);
}

// Call the animateCount function with the target numbers and element IDs
animateCount(totalAccidents, 'count'); // Change 500 to your desired target number
animateCount(totalInjuries, 'injury'); // Change 300 to your desired target number for injuries
animateCount(totalDeaths, 'death'); // Change 50 to your desired target number for deaths
