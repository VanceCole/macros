/**
 * Swaps between two actors as active character,
 * useful when 1 player is playing 2 characters
 */
const a = game.actors.getName(`Steve`);
const b = game.actors.getName(`Janet`);
if (!a || !b) ui.notifications.warn('Could not locate actors.');
else {
  if (game.user.data.character === a.id) game.user.update({character: b.id});
  else game.user.update({character: a.id});
}
