// Polymorph
let form = game.actors.getName('Giant Spider');
canvas.tokens.controlled[0].actor.transformInto(form);

// Wildshape
let form = game.actors.getName('Giant Spider');
canvas.tokens.controlled[0].actor.transformInto(form, {
  keepMental: true,
  mergeSaves: true,
  mergeSkills: true,
});

// Transform back (will not work on unliked tokens)
canvas.tokens.controlled[0].actor.revertOriginalForm()
