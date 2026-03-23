/* ============================================================
   WordBluff.io — Game Engine
   ============================================================ */

// ── Tailwind Config (must run before Tailwind CDN parses) ──
// NOTE: This block is loaded via a <script> in index.html
// before the Tailwind CDN script, so the config is available.

// ── Word Bank ──────────────────────────────────────────────
const WORD_BANK = {
  'Travel & Places': [
    'Airport', 'Cruise Ship', 'Campground', 'Hotel Lobby', 'Space Station', 'Amusement Park', 'Ski Resort', 'Beach', 'Underground Bunker', 'Train Station',
    'Subway', 'Lighthouse', 'Museum', 'Library', 'Gym', 'Movie Theater', 'Castle', 'Bridge', 'National Park', 'Zoo',
    'Aquarium', 'Post Office', 'Police Station', 'Fire Station', 'Hospital', 'University', 'Farm', 'Vineyard', 'Mountain', 'Island',
    'City Square', 'Palace', 'Temple', 'Pyramid', 'Desert', 'Jungle', 'Tundra', 'Swamp', 'Canyon', 'Valley',
    'Waterfall', 'Cave', 'Port', 'Marina', 'Observatory', 'Planetarium', 'Orchard', 'Greenhouse', 'Stadium', 'Casino', 'Art Gallery',
  ],
  'Occupations': [
    'Surgeon', 'Librarian', 'Astronaut', 'Diver', 'Firefighter', 'Detective', 'Barista', 'Athlete', 'Archaeologist', 'Pilot',
    'Teacher', 'Lawyer', 'Chef', 'Engineer', 'Artist', 'Musician', 'Nurse', 'Scientist', 'Farmer', 'Carpenter',
    'Electrician', 'Plumber', 'Baker', 'Photographer', 'Reporter', 'Writer', 'Actor', 'Dancer', 'Judge', 'Politician',
    'Banker', 'Soldier', 'Sailor', 'Mechanic', 'Tailor', 'Barber', 'Dentist', 'Vet', 'Pharmacist', 'Architect',
    'Truck Driver', 'Cashier', 'Janitor', 'Security Guard', 'Waiter', 'Flight Attendant', 'Coach', 'Programmer', 'Designer', 'Model', 'Butler',
  ],
  'Food & Drink': [
    'Pizza', 'Sushi', 'Taco', 'Burger', 'Pancakes', 'Spaghetti', 'Ice Cream', 'Salad', 'Steak', 'Burrito',
    'Donut', 'Bagel', 'Croissant', 'Omelette', 'Soup', 'Sandwich', 'Hot Dog', 'Fries', 'Nachos', 'Wings',
    'Lobster', 'Crab', 'Shrimp', 'Salmon', 'Rice', 'Pasta', 'Bread', 'Cheese', 'Egg', 'Bacon',
    'Sausage', 'Chicken', 'Beef', 'Pork', 'Lamb', 'Tofu', 'Beans', 'Lentils', 'Potato', 'Onion',
    'Garlic', 'Pepper', 'Tomato', 'Lettuce', 'Spinach', 'Broccoli', 'Carrot', 'Apple', 'Banana', 'Waffles', 'Smoothie',
  ],
  'Animals': [
    'Lion', 'Penguin', 'Elephant', 'Giraffe', 'Shark', 'Eagle', 'Kangaroo', 'Octopus', 'Wolf', 'Sloth',
    'Tiger', 'Bear', 'Zebra', 'Monkey', 'Gorilla', 'Chimpanzee', 'Lemur', 'Panda', 'Koala', 'Platypus',
    'Dolphin', 'Whale', 'Seal', 'Walrus', 'Otter', 'Beaver', 'Squirrel', 'Rabbit', 'Fox', 'Coyote',
    'Deer', 'Elk', 'Moose', 'Horse', 'Cow', 'Pig', 'Sheep', 'Goat', 'Chicken', 'Duck',
    'Turkey', 'Owl', 'Hawk', 'Parrot', 'Flamingo', 'Peacock', 'Swan', 'Turtle', 'Snake', 'Frog', 'Crocodile',
  ],
  'Hobbies': [
    'Gardening', 'Video Games', 'Knitting', 'Photography', 'Painting', 'Fishing', 'Hiking', 'Cooking', 'Surfing', 'Chess',
    'Drawing', 'Writing', 'Reading', 'Sewing', 'Woodworking', 'Pottery', 'Origami', 'Yoga', 'Meditation', 'Running',
    'Cycling', 'Swimming', 'Dancing', 'Singing', 'Acting', 'Magic', 'Puzzles', 'Board Games', 'Camping', 'Bird Watching',
    'Astronomy', 'Collecting', 'Baking', 'Brewing', 'Wine Tasting', 'Traveling', 'Language Learning', 'Volunteering', 'Skating', 'Skiing',
    'Snowboarding', 'Sailing', 'Kayaking', 'Rock Climbing', 'Weightlifting', 'Martial Arts', 'Boxing', 'Golf', 'Tennis', 'Basketball', 'Soccer',
  ],
  'Science & Tech': [
    'Microscope', 'Telescope', 'DNA', 'Magnet', 'Robot', 'Electricity', 'Planet', 'Skeleton', 'Gravity', 'Atom',
    'Laser', 'Battery', 'Engine', 'Circuit', 'Satellite', 'Rocket', 'Spaceship', 'Submarine', 'Compass', 'Prism',
    'Lens', 'Test Tube', 'Beaker', 'Flask', 'Bunsen Burner', 'Periodic Table', 'Molecule', 'Proton', 'Neutron', 'Electron',
    'Galaxy', 'Nebula', 'Black Hole', 'Supernova', 'Asteroid', 'Comet', 'Meteor', 'Calculator', 'Computer', 'Phone',
    'Internet', 'AI', 'VR', 'AR', 'Quantum', 'Fusion', 'Fission', 'Nanotech', 'Wifi', 'Blockchain', 'Algorithm',
  ],
  'Household Items': [
    'Microwave', 'Vacuum', 'Toaster', 'Mirror', 'Curtains', 'Toothbrush', 'Fridge', 'Hammer', 'Pillow', 'Remote',
    'Blender', 'Washing Machine', 'Dryer', 'Dishwasher', 'Oven', 'Coffee Maker', 'Kettle', 'Lamp', 'Clock', 'Sofa',
    'Bookshelf', 'Table', 'Chair', 'Desk', 'Bed', 'Wardrobe', 'Rug', 'Fan', 'Heater', 'Iron',
    'Mop', 'Broom', 'Bucket', 'Sponge', 'Soap', 'Towel', 'Comb', 'Razor', 'Shampoo', 'Key',
    'Wallet', 'Glasses', 'Watch', 'Pen', 'Scissors', 'Tape', 'Flashlight', 'Candle', 'Vase', 'Frame', 'Umbrella',
  ],
};

// ── Central State ──────────────────────────────────────────
let state = {
  gameStage: 'settings',   // 'settings' | 'pass' | 'word' | 'reveal'
  players: [],             // [{ id, name, role, word, hasSeen }]
  currentPlayerIndex: 0,
  secretWord: '',
  settings: {
    totalPlayers: 4,
    impostorCount: 1,
    category: 'Food & Drink',
  },
};

// ── DOM Refs ───────────────────────────────────────────────
const screens = {
  settings: document.getElementById('screen-settings'),
  pass:     document.getElementById('screen-pass'),
  word:     document.getElementById('screen-word'),
  reveal:   document.getElementById('screen-reveal'),
};

// ── Utility Functions ──────────────────────────────────────

/**
 * Show a named screen and re-trigger its entry animation.
 * @param {'settings'|'pass'|'word'|'reveal'} name
 */
function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
  // Re-trigger scale-in animation
  const card = screens[name].querySelector('.rounded-3xl');
  if (card) {
    card.classList.remove('animate-scale-in');
    void card.offsetWidth; // force reflow
    card.classList.add('animate-scale-in');
  }
}

/**
 * Pick a random element from an array.
 * @param {any[]} arr
 */
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Fisher-Yates shuffle — returns a new shuffled array.
 * @param {any[]} arr
 */
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Display an inline error message that auto-hides after 3 s.
 * @param {HTMLElement} el
 * @param {string} msg
 */
function showError(el, msg) {
  el.textContent = msg;
  el.classList.remove('hidden');
  setTimeout(() => el.classList.add('hidden'), 3000);
}

// ── Starfield ──────────────────────────────────────────────

/** Populate the star-bg div with randomized twinkling stars. */
function buildStarfield() {
  const bg = document.getElementById('starBg');
  for (let i = 0; i < 80; i++) {
    const star = document.createElement('div');
    const size = Math.random() * 2 + 0.5;
    const dur  = (Math.random() * 4 + 2).toFixed(1);
    const minO = (Math.random() * 0.05 + 0.02).toFixed(2);
    const maxO = (Math.random() * 0.3 + 0.1).toFixed(2);
    star.className = 'star';
    star.style.cssText = `
      width:${size}px; height:${size}px;
      top:${Math.random() * 100}%; left:${Math.random() * 100}%;
      --dur:${dur}s; --min:${minO}; --max:${maxO};
      animation-delay:${(Math.random() * 4).toFixed(1)}s;
    `;
    bg.appendChild(star);
  }
}

// ── Game Logic ─────────────────────────────────────────────

/** Read settings, validate, build player list, and start. */
function startGame() {
  const totalPlayers  = parseInt(document.getElementById('numPlayers').value);
  const impostorCount = parseInt(document.getElementById('numImpostors').value);
  const category      = document.getElementById('category').value;
  const errEl         = document.getElementById('settingsError');

  // Validation
  if (isNaN(totalPlayers)  || totalPlayers  < 3)  return showError(errEl, 'Need at least 3 players.');
  if (totalPlayers > 20)                           return showError(errEl, 'Maximum 20 players allowed.');
  if (isNaN(impostorCount) || impostorCount < 1)  return showError(errEl, 'Need at least 1 impostor.');
  if (impostorCount >= totalPlayers)              return showError(errEl, 'Impostors must be fewer than players.');

  const secretWord = pickRandom(WORD_BANK[category]);

  // Build and shuffle roles
  const roles = [
    ...Array(impostorCount).fill('impostor'),
    ...Array(totalPlayers - impostorCount).fill('innocent'),
  ];
  const shuffledRoles = shuffleArray(roles);

  state.settings = { totalPlayers, impostorCount, category };
  state.secretWord = secretWord;
  state.players = shuffledRoles.map((role, i) => ({
    id: i,
    name: `Player ${i + 1}`,
    role,
    word: role === 'impostor' ? 'IMPOSTOR' : secretWord,
    hasSeen: false,
  }));
  state.currentPlayerIndex = 0;

  goToPass();
}

/** Navigate to the Pass (intermission) screen for the current player. */
function goToPass() {
  state.gameStage = 'pass';
  const p = state.players[state.currentPlayerIndex];
  document.getElementById('passPlayerName').textContent = p.name;
  document.getElementById('passProgress').textContent =
    `Player ${state.currentPlayerIndex + 1} of ${state.players.length}`;
  showScreen('pass');
}

/** Navigate to the Word Reveal screen for the current player. */
function goToWord() {
  state.gameStage = 'word';
  const p           = state.players[state.currentPlayerIndex];
  const wordDisplay = document.getElementById('wordDisplay');
  const wordHint    = document.getElementById('wordHint');
  const wordSub     = document.getElementById('wordSubtitle');

  if (p.role === 'impostor') {
    wordDisplay.textContent = '🕵️ IMPOSTOR';
    wordDisplay.classList.add('text-red-400');
    wordDisplay.classList.remove('text-white');
    wordHint.textContent = 'You have no word — blend in!';
    wordSub.textContent  = "Act natural. Don't get caught!";
  } else {
    wordDisplay.textContent = p.word;
    wordDisplay.classList.remove('text-red-400');
    wordDisplay.classList.add('text-white');
    wordHint.textContent = `Category: ${state.settings.category}`;
    wordSub.textContent  = "Remember it — don't let anyone else see!";
  }

  document.getElementById('wordProgress').textContent =
    `Player ${state.currentPlayerIndex + 1} of ${state.players.length}`;
  showScreen('word');
}

/** Mark current player as seen and advance to next, or to reveal stage. */
function nextPlayer() {
  state.players[state.currentPlayerIndex].hasSeen = true;
  state.currentPlayerIndex++;

  if (state.currentPlayerIndex >= state.players.length) {
    goToRevealStage();
  } else {
    goToPass();
  }
}

/** Navigate to the Reveal Stage screen. */
function goToRevealStage() {
  state.gameStage = 'reveal';
  document.getElementById('revealWordSection').classList.add('hidden');
  document.getElementById('revealBtnGroup').classList.remove('hidden');
  document.getElementById('revealEndButtons').classList.add('hidden');
  showScreen('reveal');
}

/** Reveal the secret word and show each player's role. */
function revealResults() {
  document.getElementById('revealSecretWord').textContent = state.secretWord;
  document.getElementById('revealBtnGroup').classList.add('hidden');

  const listEl = document.getElementById('revealPlayerList');
  listEl.innerHTML = '';

  // 2-column grid wrapper with scrolling
  listEl.className = 'grid grid-cols-2 gap-2 max-h-[40vh] overflow-y-auto pr-1';

  state.players.forEach(p => {
    const cell  = document.createElement('div');
    const isImp = p.role === 'impostor';
    cell.className = `rounded-xl px-3 py-2 flex flex-col items-center text-center animate-slide-up ${
      isImp ? 'badge-impostor' : 'badge-innocent'
    }`;
    cell.innerHTML = `
      <span class="text-base mb-0.5">${isImp ? '🕵️' : '😇'}</span>
      <span class="font-semibold text-xs text-white leading-tight">${p.name}</span>
      <span class="text-xs font-bold uppercase tracking-wider mt-1 ${
        isImp ? 'text-red-400' : 'text-green-400'
      }">${isImp ? 'Impostor' : 'Innocent'}</span>
    `;
    listEl.appendChild(cell);
  });

  document.getElementById('revealWordSection').classList.remove('hidden');
  document.getElementById('revealEndButtons').classList.remove('hidden');
}

/** Restart with same settings but a fresh word and reshuffled roles. */
function playAgain() {
  const { totalPlayers, impostorCount, category } = state.settings;
  const secretWord = pickRandom(WORD_BANK[category]);

  const roles = [
    ...Array(impostorCount).fill('impostor'),
    ...Array(totalPlayers - impostorCount).fill('innocent'),
  ];
  const shuffledRoles = shuffleArray(roles);

  state.secretWord = secretWord;
  state.players = shuffledRoles.map((role, i) => ({
    id: i,
    name: `Player ${i + 1}`,
    role,
    word: role === 'impostor' ? 'IMPOSTOR' : secretWord,
    hasSeen: false,
  }));
  state.currentPlayerIndex = 0;

  goToPass();
}

/** Go back to settings screen (restores previous values). */
function changeSettings() {
  document.getElementById('numPlayers').value   = state.settings.totalPlayers;
  document.getElementById('numImpostors').value = state.settings.impostorCount;
  document.getElementById('category').value     = state.settings.category;
  state.gameStage = 'settings';
  showScreen('settings');
}

// ── Event Listeners ────────────────────────────────────────
document.getElementById('btnStart').addEventListener('click', startGame);
document.getElementById('btnReveal').addEventListener('click', goToWord);
document.getElementById('btnHidePass').addEventListener('click', nextPlayer);
document.getElementById('btnRevealResult').addEventListener('click', revealResults);
document.getElementById('btnPlayAgain').addEventListener('click', playAgain);
document.getElementById('btnChangeSettings').addEventListener('click', changeSettings);

// ── Init ───────────────────────────────────────────────────
buildStarfield();
showScreen('settings');
