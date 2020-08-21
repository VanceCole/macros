// Get token from scene by name
let token = canvas.scene.data.tokens.find(token => token.name = 'My Actor')

// Get first controlled token
let token = canvas.tokens.controlled[0];

// Get all controlled tokens and do something with each
let tokens = canvas.tokens.controlled;
tokens.forEach(token => {
  console.log(token.name);
});

// Distance between 2 tokens
let d = canvas.grid.measureDistance(token1, token2);

// Selects one random token from amongst all selected
let tks = canvas.tokens.controlled;
let r = Math.floor(Math.random()*tks.length);
canvas.tokens.selectObjects(tks[r]);