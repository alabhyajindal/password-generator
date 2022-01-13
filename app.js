const char = 6;
const password = [];

function numbers() {
  password.push(Math.floor(Math.random() * char));
}

function alpha() {
  const alpha = ["A", "B", "C", "D", "E", "F"];
  password.push(alpha[Math.floor(Math.random() * alpha.length)]);
}

// append functions as array items if the user has selected the option

const Functions = [numbers, alpha];

for (let i = 0; i < char; i++) {
  Functions[Math.floor(Math.random() * 2)]();
}

console.log(password.join(""));
