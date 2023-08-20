const accidentCountElement = document.getElementById('accidentCount');
const injuryPercentageElement = document.getElementById('injuryPercentage');
const fatalPercentageElement = document.getElementById('fatalPercentage');


let totalAccidents;
// Update the accident count and statistics
function updateStatistics() {
    const startDate = new Date('2023-08-19'); // Change this to your desired start date
    const currentDate = new Date();
    const daysDifference = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));
    const accidentsPerDay = 7;

    totalAccidents = accidentsPerDay * daysDifference;
    const injuryPercentage = 72;
    const fatalPercentage = 7;

    accidentCountElement.textContent = totalAccidents;
    injuryPercentageElement.textContent = `${injuryPercentage}%`;
    fatalPercentageElement.textContent = `${fatalPercentage}%`;
}

// Call the updateStatistics function to populate data on page load
updateStatistics();


const countElement = document.getElementById('count');

function startCounting(targetCount) {
    let currentCount = 0;
    const increment = Math.ceil(targetCount / 100); // Adjust as needed
    const interval = setInterval(() => {
        currentCount += increment;
        countElement.textContent = currentCount.toLocaleString(); // Add commas for readability

        if (currentCount >= targetCount) {
            clearInterval(interval);
        }
    }, 20); 
}

startCounting( 100 );

