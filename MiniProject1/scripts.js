// const cardsPerPage = 10; // Adjust as needed
// const cardContainer = document.getElementById('card-container');

// function generateCard(data) {
//     const card = document.createElement('div');
//     card.classList.add('card');
//     card.innerHTML = data; // Customize card content based on your needs
//     return card;
// }

// function displayPage(pageNumber) {
//     const startIndex = (pageNumber - 1) * cardsPerPage;
//     const endIndex = startIndex + cardsPerPage;

//     cardContainer.innerHTML = '';

//     for (let i = startIndex; i < endIndex && i < data.length; i++) {
//         cardContainer.appendChild(generateCard(data[i]));
//     }
// }

// // Assuming you have some data to display in cards (replace with your own data)
// const data = ['Card 1', 'Card 2', 'Card 3', /* ... */];

// // Display initial page
// displayPage(1);