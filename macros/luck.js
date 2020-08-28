/**
 * Luck Macro
 * Change 'secondary' to primary/secondary/tertiary
 *   to match which is your luck resource
 */
let char = game.user.character;
let data = char.data.data;
let luck = data.resources.secondary.value;

if(luck > 0) {
  data.resources.secondary.value--;
  char.update(data);
  new Roll('1d20').toMessage({ flavor: 'Lucky!' });
} else {
  ui.notifications.warn('You are out of luck.');
}
