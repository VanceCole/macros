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

// Distance between 2 tokens
let d = canvas.grid.measureDistance(token1, token2);

// Create a dialog and request a value input
let d = new Dialog({
  title: 'Example',
  content: `
    <form class="flexcol">
      <div class="form-group">
        <label for="exampleInput">Example Input</label>
        <input type="text" name="exampleInput" placeholder="Enter Value">
      </div>
    </form>
  `,
  buttons: {
    no: {
      icon: '<i class="fas fa-times"></i>',
      label: 'Cancel'
    },
    yes: {
      icon: '<i class="fas fa-check"></i>',
      label: 'Yes',
      callback: (html) => {
        let val = html.find('input[name="exampleInput"]').val();
        console.log(`ExampleInput value was: ${val}`);
      }
    },
  },
  default: 'yes',
  close: () => {
    console.log('Example Dialog Closed');
  }
});

d.options.width = 300;
d.position.width = 300;
d.render(true);
