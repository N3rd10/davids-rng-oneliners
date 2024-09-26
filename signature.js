
	// Get the button element
const button = document.getElementById('myButton');

// Get the paragraph element where the text will be added
const paragraph = document.getElementById('myParagraph');

// Define the array of possible lines
const lines = [
  'Hello, World!',
  'chiken in five worlds of gods and men controll the emotions of the men and the life and will of reality.',
  'the edges hurt when i think it it it it hurts to blead in the computer it itit willl alsways be help me i iiiiiiii the eges cut when i think.',
  'I swear if another lesbian couple get together in my cabin I will blow some brains out',
  'yesterday upon the stairs i meght a man who was not there he wasent there again today oh how i wish hed go away.',
  'I got a weren stuck on a robot.',
  'Geeze you tattoed my name  on your lowr back more people have seen that then the phone book.', 
];

// Add an event listener to the button
button.addEventListener('click', () => {
  // Generate a random index for the lines array
  const randomIndex = Math.floor(Math.random() * lines.length);

  // Get the random line
  const randomLine = lines[randomIndex];

  // Add the random line to the paragraph
  paragraph.innerHTML += `<br>${randomLine}`;
});
