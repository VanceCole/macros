// Roll with flavor text
new Roll('1d20').toMessage({flavor: 'Example Flavor'});

// Roll with preset roll mode
new Roll('1d20').toMessage({rollMode: 'gmroll'});

// Send chat message
ChatMessage.create({content: 'Screw you, Steve'});

// Send chat message emote as a given actor
let act = game.actors.getName('Ancient Red Dragon');
let spk = ChatMessage.getSpeaker({ actor: act });
ChatMessage.create({
  speaker: spk,
  content: "...turns his head toward Steve",
  type: CHAT_MESSAGE_TYPES.EMOTE
},
{
  chatBubble: true
});

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

// Create custom config value
let data = {
  name: 'My Setting',
  scope: 'world',     // world means sync to db, set to 'local' if you want it stored individually in client storage 
  config: true,       // false if you dont want it to show in module config
  type: Number,
  default: 0,
}

// Create, get and unset flags
await canvas.scene.setFlag('myModule', 'myFlag', 'myValue');
let x = canvas.scene.getFlag('myModule', 'myFlag');
await canvas.scene.unsetFlag('myModule', 'myFlag');

// Get/Set core game settings
await game.settings.set('core','rollMode','roll');
game.settings.get('core','rollMode');

// Create and use custom config value
let data = {
  name: 'My Setting',
  scope: 'world',     // "world" = sync to db, "client" = local storage 
  config: true,       // false if you dont want it to show in module config
  type: Number,       // Number, Boolean, String,  
  default: 0,
  range: {
    min: 0,
    max: 100,
    step: 10
  },
  onChange: value => {
    console.log(value)
  }
}

await game.settings.register('myModule', 'mySetting', data);
await game.settings.set('myModule','mySetting','myValue');
let x = game.settings.get('myModule','mySetting');