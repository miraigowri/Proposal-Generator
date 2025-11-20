const proposals = [
  "Bro just say you love her.",
  "Na unna virumbale..unmela asai padala..Nee azaga irakunu Nenaikela ana ithalam Nadanthudumonu.. Bayama irukku!!",
  "I can't imagine a future without you.",
  "I love you. Will you marry me?",
  "Unnai kandathum ennai marenthen unnnule muzuginen solla virumbvillai ana nee avaluvu azagu aha.",
  "I don't know how to smile before meeting you — I want my smile to be forever.",
  "Romba nala sollanu nencha I love you",
  "Puthu kulungum poovellam unnaiyae niyabapaduthukirathu unnai vida avalin sirippae azagu endru.",
  "Veyil kuda ithamaga irukkum nee arugil irukkum bothu.",
  "....Enna sollrathu therila, peasvum mudila; whenever I see you I feel happy.",
];

document.getElementById("btn").addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * proposals.length);
  document.getElementById("proposal").innerText = proposals[randomIndex];
});
