let container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign = 'center';

let names = ['ahmed', 'mohamed', 'hassan', 'galal', 'mostafe'];
let ages = ['18 years', '28 years', '24 years', '22 years', '20 years'];
let imgUrls = [
  'assets/images/user-ph/user-1.jpeg',
  'assets/images/user-ph/user-2.jpeg',
  'assets/images/user-ph/user-3.jpeg',
  'assets/images/user-ph/user-4.webp',
  'assets/images/user-ph/user-5.webp'
];

function createRandomCard() {
  // Generate random indices for names, ages, and imgUrls
  const randomIndex = Math.floor(Math.random() * names.length);

  // Create elements
  const card = document.createElement('div');
  const title = document.createElement('h2');
  const ageElement = document.createElement('p');
  const img = document.createElement('img');

  // Set content
  title.textContent = names[randomIndex];
  ageElement.textContent = ages[randomIndex];
  img.src = imgUrls[randomIndex];

  // Apply styles
  card.style.width = '280px';
  card.style.height = '450px';
  card.style.background = '#444';
  card.style.color = '#fff';
  card.style.padding = '10px';
  card.style.margin = '2px';
  card.style.display = 'inline-block';
  img.style.width = '100%';
  img.style.height = '80%';


  // Append elements to the card
  card.appendChild(title);
  card.appendChild(ageElement);
  card.appendChild(img);

  return card;
}

//recive input from user
let userInput = prompt("Please enter number of card do you want:");
if (userInput !== null) {
    alert("You entered: " + userInput);
} else {
    alert("You didn't enter anything.");
}

// Create a random card and append it to the container
for (let i = 0; i < userInput; i++) {
  const randomCard = createRandomCard();
container.appendChild(randomCard);
}


