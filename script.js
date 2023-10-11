const characters = [
  {
    name: "Rick Sanchez",
    status: "alive",
    species: "Human",
    gender: "Male",
    imageSrc: "./Images/img1.webp",
  },
  {
    name: "Morty Smith",
    status: "alive",
    species: "Human",
    gender: "Male",
    imageSrc: "./Images/img2.webp",
  },
  {
    name: "Summer Smith",
    status: "alive",
    species: "Human",
    gender: "Female",
    imageSrc: "./Images/img3.webp",
  },
  {
    name: "Abradolf Lincler",
    status: "unknown",
    species: "Human",
    gender: "Male",
    imageSrc: "./Images/img4.webp",
  },

  {
    name: "Adjudicator Risk",
    status: "dead",
    species: "Human",
    gender: "Male",
    imageSrc: "./Images/img5.webp",
  },

  {
    name: "Agency Director",
    status: "dead",
    species: "Human",
    gender: "Male",
    imageSrc: "./Images/img6.webp",
  },

  {
    name: "Alan Rails",
    status: "dead",
    species: "Human",
    gender: "Male",
    imageSrc: "./Images/img7.webp",
  },

  {
    name: "Albert Einstein",
    status: "unknown",
    species: "Human",
    gender: "Male",
    imageSrc: "./Images/img8.webp",
  },

  {
    name: "Alaxender",
    status: "dead",
    species: "Human",
    gender: "Male",
    imageSrc: "./Images/img9.webp",
  },

  {
    name: "Alein Googah",
    status: "dead",
    species: "Alein",
    gender: "unknown",
    imageSrc: "./Images/img10.webp",
  },

  {
    name: "Alein Morty",
    status: "dead",
    species: "Human",
    gender: "unknown",
    imageSrc: "./Images/img11.webp",
  },

  {
    name: "Alein Rick",
    status: "dead",
    species: "Human",
    gender: "unknown",
    imageSrc: "./Images/img12.webp",
  },

  {
    name: "Amish Cyborg",
    status: "alive",
    species: "Human",
    gender: "Male",
    imageSrc: "./Images/img13.webp",
  },

  {
    name: "Annie",
    status: "alive",
    species: "Human",
    gender: "Female",
    imageSrc: "./Images/img14.webp",
  },

  {
    name: "Antenna Morty",
    status: "alive",
    species: "Human",
    gender: "Female",
    imageSrc: "./Images/img15.webp",
  },

  {
    name: "Antenna Risk",
    status: "unkonwn",
    species: "Human",
    gender: "Male",
    imageSrc: "./Images/img16.webp",
  },

  {
    name: "Ants in my Eyes Johson",
    status: "unkonwn",
    species: "Human",
    gender: "Male",
    imageSrc: "./Images/img17.webp",
  },

  {
    name: "Aqua Morty",
    status: "unkonwn",
    species: "Humanoid",
    gender: "Male",
    imageSrc: "./Images/img18.webp",
  },

  {
    name: "Aqua Risk",
    status: "unkonwn",
    species: "Humanoid",
    gender: "Male",
    imageSrc: "./Images/img19.webp",
  },

  {
    name: "Arcade Alien",
    status: "unkonwn",
    species: "Alien",
    gender: "Male",
    imageSrc: "./Images/img20.webp",
  },

  {
    name: "Armagheadon",
    status: "alive",
    species: "Alein",
    gender: "Male",
    imageSrc: "./Images/img21.webp",
  },

  {
    name: "Armothy",
    status: "dead",
    species: "unknown",
    gender: "Male",
    imageSrc: "./Images/img22.webp",
  },

  {
    name: "Arthrica",
    status: "alive",
    species: "Alien",
    gender: "Female",
    imageSrc: "./Images/img23.webp",
  },

  {
    name: "Artist Morty",
    status: "alive",
    species: "Human",
    gender: "Male",
    imageSrc: "./Images/img24.webp",
  },

  {
    name: "Attila Starwar",
    status: "alive",
    species: "Human",
    gender: "Male",
    imageSrc: "./Images/img25.webp",
  },

  {
    name: "Baby Legs",
    status: "alive",
    species: "Human",
    gender: "Male",
    imageSrc: "./Images/img26.webp",
  },

  {
    name: "Baby poopybutthole",
    status: "alive",
    species: "Poopybuuthole",
    gender: "Male",
    imageSrc: "./Images/img27.webp",
  },

  {
    name: "Baby Wizard",
    status: "dead",
    species: "Alein",
    gender: "Male",
    imageSrc: "./Images/img28.webp",
  },

  {
    name: "Bearded Lady",
    status: "dead",
    species: "Alein",
    gender: "Female",
    imageSrc: "./Images/img29.webp",
  },

  {
    name: "Bebo",
    status: "died",
    species: "Alein",
    gender: "Male",
    imageSrc: "./Images/img30.webp",
  },

  {
    name: "Benjamin",
    status: "alive",
    species: "Poopybutthole",
    gender: "Male",
    imageSrc: "./Images/img31.webp",
  },

  {
    name: "Bepisian",
    status: "alive",
    species: "Alein",
    gender: "unknown",
    imageSrc: "./Images/img32.webp",
  },

  {
    name: "Beta-Seven",
    status: "alive",
    species: "Alein",
    gender: "unknown",
    imageSrc: "./Images/img33.webp",
  },

  {
    name: "Beth sanchez",
    status: "alive",
    species: "Human",
    gender: "Female",
    imageSrc: "./Images/img34.webp",
  },

  {
    name: "Beth Smith",
    status: "alive",
    species: "Human",
    gender: "Female",
    imageSrc: "./Images/img35.webp",
  },  

  {
    name: "Beth kin",
    status: "alive",
    species: "Human",
    gender: "Female",
    imageSrc: "./Images/img36.webp",
  },

  {
    name: "Beth's Mytholog",
    status: "alive",
    species: "Human",
    gender: "Female",
    imageSrc: "./Images/img37.webp",
  },

  {
    name: "Babli Lady",
    status: "alive",
    species: "Human",
    gender: "Female",
    imageSrc: "./Images/img38.webp",
  },

  {
    name: "Big Head",
    status: "unknown",
    species: "Human",
    gender: "Male",
    imageSrc: "./Images/img39.webp",
  },

  {
    name: "Big Morty",
    status: "dead",
    species: "Human",
    gender: "Male",
    imageSrc: "./Images/img40.webp",
  },

  {
    name: "Body Gurad Morty",
    status: "dead",
    species: "Human",
    gender: "Male",
    imageSrc: "./Images/img41.webp",
  },

  {
    name: "Bill",
    status: "alive",
    species: "Human",
    gender: "Male",
    imageSrc: "./Images/img42.webp",
  },

  {
    name: "Bill Dog",
    status: "unknown",
    species: "Animal",
    gender: "Male",
    imageSrc: "./Images/img43.webp",
  },

  {
    name: "Birdperson",
    status: "alive",
    species: "Alein",
    gender: "Male",
    imageSrc: "./Images/img44.webp",
  },

  {
    name: "Black Risk",
    status: "alive",
    species: "Human",
    gender: "Male",
    imageSrc: "./Images/img45.webp",
  },

  {
    name: "Artist Morty",
    status: "alive",
    species: "Human",
    gender: "Male",
    imageSrc: "./Images/img46.webp",
  },

  {
    name: "Blue Diplomat",
    status: "alive",
    species: "Alein",
    gender: "Male",
    imageSrc: "./Images/img47.webp",
  },

  {
    name: "Blue Footprint Gay",
    status: "dead",
    species: "Human",
    gender: "Male",
    imageSrc: "./Images/img48.webp",
  },

  {
    name: "Blue shirt Morty",
    status: "unknown",
    species: "Human",
    gender: "Male",
    imageSrc: "./Images/img49.webp",
  },

  {
    name: "Bobby Moyanihan",
    status: "alive",
    species: "Human",
    gender: "Male",
    imageSrc: "./Images/img50.webp",
  },

  {
    name: "Bootleg Portal",
    status: "dead",
    species: "Human",
    gender: "unknow",
    imageSrc: "./Images/img51.webp",
  },

  {
    name: "Calypso",
    status: "dead",
    species: "Human",
    gender: "Female",
    imageSrc: "./Images/img52.webp",
  },

  {
    name: "Campaign Manager",
    status: "dead",
    species: "Human",
    gender: "Male",
    imageSrc: "./Images/img53.webp",
  },

  {
    name: "Canklanker Thom",
    status: "dead",
    species: "Alein",
    gender: "Male",
    imageSrc: "./Images/img54.webp",
  },

  {
    name: "Centaur",
    status: "alive",
    species: "Mytholgical Creature",
    gender: "Male",
    imageSrc: "./Images/img55.webp",
  },

  {
    name: "Chris",
    status: "dead",
    species: "Alein",
    gender: "unknwon",
    imageSrc: "./Images/img56.webp",
  },

  {
    name: "chris Green",
    status: "alive",
    species: "Humanoid",
    gender: "Male",
    imageSrc: "./Images/img57.webp",
  },

  {
    name: "Coach Feratu",
    status: "dead",
    species: "Mythological creature",
    gender: "Male",
    imageSrc: "./Images/img58.webp",
  },

  {
    name: "Collector",
    status: "alive",
    species: "Alein",
    gender: "Male",
    imageSrc: "./Images/img59.webp",
  },

  {
    name: "Colossus",
    status: "dead",
    species: "Human",
    gender: "Male",
    imageSrc: "./Images/img60.webp",
  },

  {
    name: "Commander Risk",
    status: "dead",
    species: "Human",
    gender: "Male",
    imageSrc: "./Images/img61.webp",
  },

  {
    name: "Concerto",
    status: "dead",
    species: "Humanoid",
    gender: "Male",
    imageSrc: "./Images/img62.webp",
  },

  {
    name: "Conroy",
    status: "dead",
    species: "Robot",
    gender: "unknown",
    imageSrc: "./Images/img63.webp",
  },

  {
    name: "Cool Risk",
    status: "alive",
    species: "Human",
    gender: "Male",
    imageSrc: "./Images/img64.webp",
  },

  {
    name: "Cop Morty",
    status: "dead",
    species: "Human",
    gender: "Male",
    imageSrc: "./Images/img65.webp",
  },

  {
    name: "Cop Risk",
    status: "alive",
    species: "Human",
    gender: "Male",
    imageSrc: "./Images/img66.webp",
  },

  {
    name: "Courier Flap",
    status: "unknown",
    species: "Alein",
    gender: "unknown",
    imageSrc: "./Images/img67.webp",
  },

  {
    name: "Cousin Nicky",
    status: "dead",
    species: "Alein",
    gender: "Male",
    imageSrc: "./Images/img68.webp",
  },

  {
    name: "Cowboy Morty",
    status: "alive",
    species: "Human",
    gender: "Male",
    imageSrc: "./Images/img69.webp",
  },

  {
    name: "Cowboy Risk",
    status: "alive",
    species: "Human",
    gender: "Male",
    imageSrc: "./Images/img71.webp",
  },

  {
    name: "Crab Spider",
    status: "dead",
    species: "Alein",
    gender: "alive",
    imageSrc: "./Images/img72.webp",
  },

  {
    name: "Creepy Little Girl",
    status: "alive",
    species: "Human",
    gender: "Female",
    imageSrc: "./Images/img73.webp",
  },

  {
    name: "Jerry",
    status: "unknown",
    species: "Human",
    gender: "Female",
    imageSrc: "./Images/img60.webp",
  },
];


// Function to create a card element
function createCard(character) {
  const card = document.createElement("div");
  card.className =
    "w-[300px] shadow-2xl border border-gray-300 rounded-lg bg-white";

  const imageLink = document.createElement("a");
  imageLink.href = character.imageSrc;
  imageLink.target = "_blank";

  const image = document.createElement("img");
  image.src = character.imageSrc;

  imageLink.appendChild(image);
  card.appendChild(imageLink);

  const cardContent = document.createElement("div");
  cardContent.className = "p-5";

  const name = document.createElement("p");
  name.className = "font-bold pt-2 pb-2";
  name.textContent = `Name: ${character.name}`;

  const statusContainer = document.createElement("div");
  statusContainer.className = "flex gap-3 pb-3";

  const statusLabel = document.createElement("p");
  statusLabel.className = "text-md font-semibold";
  statusLabel.textContent = "Status";

  const statusDot = document.createElement("p");
  statusDot.className =
  "flex items-center justify-center h-4 w-4 rounded-full mt-1 " + 
  (character.status === "dead" ? "bg-red-600" : 
  character.status === "unknown" ? "bg-purple-600" : "bg-green-600");



  const statusText = document.createElement("p");
  statusText.className = "text-[#16a34a]";
  statusText.textContent = character.status;

  statusContainer.appendChild(statusLabel);
  statusContainer.appendChild(statusDot);
  statusContainer.appendChild(statusText);

  const infoContainer = document.createElement("div");
  infoContainer.className = "gap-2 flex flex-col";

  const speciesBtn = document.createElement("button");
  speciesBtn.className = "text-white text-md w-64";
  speciesBtn.textContent = `Species: ${character.species}`;

  const genderBtn = document.createElement("button");
  genderBtn.className = "text-white text-md w-64 ";
  genderBtn.textContent = `Gender: ${character.gender}`;

  speciesBtn.style.backgroundColor = "#16a34a";
  genderBtn.style.backgroundColor = "#16a34a";

  infoContainer.appendChild(speciesBtn);
  infoContainer.appendChild(genderBtn);

  cardContent.appendChild(name);
  cardContent.appendChild(statusContainer);
  cardContent.appendChild(infoContainer);

  card.appendChild(cardContent);

  return card;
}


const cardContainer = document.getElementById("cardContainer");

characters.forEach((character) => {
  const card = createCard(character);
  cardContainer.appendChild(card);
}); 


// Add event listener to the search input field
const searchbar = document.getElementById("searchbar");
searchbar.addEventListener("input", () => {
  searchCards(searchbar.value);
});

// Function to search and display cards based on the search query
function searchCards(query) {
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = "";

  characters.forEach((character) => {
    const characterGender = character.gender.toLowerCase();
    if (
      query === "" ||
      character.name.toLowerCase().includes(query.toLowerCase()) ||
      character.species.toLowerCase().includes(query.toLowerCase()) ||
      characterGender.includes(query.toLowerCase()) ||
      (query.toLowerCase() === "gender:male" && characterGender === "male")
      || (query.toLowerCase() === "gender:female" && characterGender === "female")
      || (query.toLowerCase() === "gender:unknown" && characterGender === "unknown")
      || (query.toLowerCase() === "status:alive" && character.status.toLowerCase() === "alive")
      || (query.toLowerCase() === "status:dead" && character.status.toLowerCase() === "dead")
      || (query.toLowerCase() === "status:unknown" && character.status.toLowerCase() === "unknown")
    ) {
      const card = createCard(character);
      cardContainer.appendChild(card);
    }
  });
}

// Initialize with all cards displayed
searchCards("");
















// Add a variable to define how many cards should be displayed per page
const cardsPerPage = 15;

// Function to filter and display cards based on status and page
function filterAndDisplayCardsByStatus(status, page) {
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = ""; // Clear the current cards

  // Calculate the starting and ending indexes for the current page
  const startIndex = (page - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  // Loop through the characters and display matching ones within the specified range
  for (let i = startIndex; i < endIndex && i < characters.length; i++) {
    const character = characters[i];
    if (status === "All" || character.status.toLowerCase() === status.toLowerCase()) {
      const card = createCard(character);
      cardContainer.appendChild(card);
    }
  }
}

// Add a function to update the active link
function activeLink(page) {
  // Remove the 'active' class from all links
  for (let i = 1; i <= 5; i++) {
    const link = document.getElementById(`link${i}`);
    link.classList.remove("active");
  }

  // Add the 'active' class to the clicked link
  const link = document.getElementById(`link${page}`);
  link.classList.add("active");

  // Filter and display cards for the selected page
  filterAndDisplayCardsByStatus("All", page);
}

// Initialize the first page as active
activeLink(1);


// Function to create a card element
function createCard(character) {
  const card = document.createElement("div");
  card.className =
    "w-[300px] shadow-2xl border border-gray-300 rounded-lg bg-white";

  const imageLink = document.createElement("a");
  imageLink.href = character.imageSrc;
  imageLink.target = "_blank";

  const image = document.createElement("img");
  image.src = character.imageSrc;

  imageLink.appendChild(image);
  card.appendChild(imageLink);

  const cardContent = document.createElement("div");
  cardContent.className = "p-5";

  const name = document.createElement("p");
  name.className = "font-bold pt-2 pb-2";
  name.textContent = `Name: ${character.name}`;

  const statusContainer = document.createElement("div");
  statusContainer.className = "flex gap-3 pb-3";

  const statusLabel = document.createElement("p");
  statusLabel.className = "text-md font-semibold";
  statusLabel.textContent = "Status";

  const statusDot = document.createElement("p");
  statusDot.className =
    "flex items-center justify-center h-4 w-4 rounded-full mt-1 " +
    (character.status === "dead" ? "bg-red-600" : character.status === "unknown" ? "bg-purple-600" : "bg-green-600");

  const statusText = document.createElement("p");
  statusText.className = "text-[#16a34a]";
  statusText.textContent = character.status;

  statusContainer.appendChild(statusLabel);
  statusContainer.appendChild(statusDot);
  statusContainer.appendChild(statusText);

  const infoContainer = document.createElement("div");
  infoContainer.className = "gap-2 flex flex-col";

  const speciesBtn = document.createElement("button");
  speciesBtn.className = "text-white text-md w-64";
  speciesBtn.textContent = `Species: ${character.species}`;

  const genderBtn = document.createElement("button");
  genderBtn.className = "text-white text-md w-64 ";
  genderBtn.textContent = `Gender: ${character.gender}`;

  speciesBtn.style.backgroundColor = "#16a34a";
  genderBtn.style.backgroundColor = "#16a34a";

  infoContainer.appendChild(speciesBtn);
  infoContainer.appendChild(genderBtn);

  cardContent.appendChild(name);
  cardContent.appendChild(statusContainer);
  cardContent.appendChild(infoContainer);

  card.appendChild(cardContent);

  return card;
}

// Function to filter and display cards based on status
function filterAndDisplayCards(status) {
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = "";

  characters.forEach((character) => {
    if (status === "All" || character.status.toLowerCase() === status.toLowerCase()) {
      const card = createCard(character);
      cardContainer.appendChild(card);
    }
  });
}

// Add event listeners to the buttons

document.getElementById("AllButton").addEventListener("click", () => {
  filterAndDisplayCards("All");
});

document.getElementById("DeadButton").addEventListener("click", () => {
  filterAndDisplayCards("dead");
});

document.getElementById("AliveButton").addEventListener("click", () => {
  filterAndDisplayCards("alive");
});

document.getElementById("UnknownButton").addEventListener("click", () => {
  filterAndDisplayCards("unknown");
});

// Initialize with "All" cards displayed
filterAndDisplayCards("All");





function openModal() {
  document.getElementById('myModal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('myModal').classList.add('hidden');
}