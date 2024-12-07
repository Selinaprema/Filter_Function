// Step 1: Define an array of 10 strings
const wordsArray = [
  "banana",
  "apple",
  "cherry",
  "orange",
  "peach",
  "grapes",
  "kiwifruit",
  "mango",
  "papaya",
  "guava",
];

// Step 2: Define the higher-order function called  'myFilterFunction'
function myFilterFunction(array, callback) {
  // Create an empty array to store words that pass the callback condition
  const filteredArray = [];

  // Loop through each element in the array
  for (let word of array) {
    // Use the callback function to test each word
    if (callback(word)) {
      // If the callback returns true, add the word to the filteredArray
      filteredArray.push(word);
    }
  }

  // Return the filtered array
  return filteredArray;
}

// Step 3: Define the callback function
function hasSixLetters(word) {
  // Check if the word has exactly six letters
  return word.length === 6;
}

// Step 4: Test the higher-order function
const result = myFilterFunction(wordsArray, hasSixLetters);

// Step 5: Log the output
console.log("Original Array:", wordsArray);
console.log("Filtered Array (Six-Letter Words):", result);
