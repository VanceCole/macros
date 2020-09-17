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

// Select one random token from amongst all selected
let tks = canvas.tokens.controlled;
let r = Math.floor(Math.random()*tks.length);
canvas.tokens.selectObjects(tks[r]);

/*
 * Add token to scene
 * Options override (actor.data.token) or set properties
 */
let options = { x: 0, y: 0 };
canvas.tokens.dropActor(actor, options);

/*
 * Add multiple tokens to scene
 */
let actor1 = game.actors.getName('Steve');
let token1 = duplicate(actor1.data.token);
let actor2 = game.actors.getName('Stella');
let token2 = duplicate(actor2.data.token);
canvas.tokens.createMany([ token1, token2 ]);

// Select all tokens in scene
let tokens = canvas.tokens.placeables;
canvas.tokens.selectObjects(tokens)

// Select token by name
let token = canvas.tokens.placeables.find(t => t.name === 'Azimuth');
token.control();

// Select all NPC tokens
canvas.tokens.selectObjects(); // Drop existing selection
let tokens = canvas.tokens.placeables.filter(t => !t.actor.isPC); // Find NPCs
tokens.forEach(t => { t.control({ releaseOthers: false }); }); // Select them

// Select token while retaining control of existing selection
token.control({ releaseOthers: false });