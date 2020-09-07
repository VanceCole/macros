// Set core game settings
await game.settings.set('core','rollMode','roll');

// Get core game setting
game.settings.get('core','rollMode');

/*
 * Example to toggle a game setting
 * In this case, toggles Roll Mode between gm and normal
 */
if (game.settings.get('core','rollMode') == 'roll') {
  game.settings.set('core','rollMode','gmroll');
  $('.roll-type-select select').val('gmroll');
} else {
  game.settings.set('core','rollMode','roll');
  $('.roll-type-select select').val('roll');
}

/*
 * Create a custom config setting
 */
await game.settings.register('myModule', 'mySetting', {
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
});

// Get value of custom setting
let x = game.settings.get('myModule','mySetting');

// Change existing custom setting
await game.settings.set('myModule','mySetting','myValue');
