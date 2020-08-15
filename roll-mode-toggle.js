// Toggle roll mode between normal & private gm roll
if (game.settings.get('core','rollMode') == 'roll') {
  game.settings.set('core','rollMode','gmroll');
  $('.roll-type-select select').val('gmroll');
} else {
  game.settings.set('core','rollMode','roll');
  $('.roll-type-select select').val('roll');
}