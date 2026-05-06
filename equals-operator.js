var scottishCity =["mangalore","udupi","bangalore"]
var americanCity = scottishCity

console.log(scottishCity);
console.log(americanCity);


function getPlayingStyle() {
  // Step 1: define arrays
  let firstTeam = [3, 3, 1, 3];
  let secondTeam = firstTeam; // same reference

  // Step 2: game gets more challenging → change style
  firstTeam[0] = 4;
  firstTeam[1] = 1;
  firstTeam[2] = 4;
  firstTeam[3] = 1;

  // Step 3: return secondTeam (which reflects changes)
  return secondTeam;
}

// Test
console.log(getPlayingStyle()); // [4, 1, 4, 1]
