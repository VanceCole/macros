// Roll with flavor text
new Roll('1d20').toMessage({flavor: 'Example Flavor'});

// Roll with preset roll mode
new Roll('1d20').toMessage({rollMode: 'gmroll'});

// Get/Set game settings
game.settings.get('core','rollMode');
game.settings.set('core','rollMode','roll');

// Get actor by name
let actor = game.actors.getName('My Actor');

// Get token from scene by name
let token = canvas.scene.data.tokens.find(token => token.name = 'My Actor')

// Get first controlled token
let token = canvas.tokens.controlled[0];

// Get all controlled tokens and do something with each
let tokens = canvas.tokens.controlled;
tokens.forEach(token => {
  console.log(token.name);
});
