// Assign skull effect to selected tokens
const effect = "icons/svg/skull.svg";
canvas.tokens.controlled.forEach(token => {
  token.toggleEffect(effect);
});

// Assign skull effect to selected tokens as larger overlay version
const effect = "icons/svg/skull.svg";
canvas.tokens.controlled.forEach(token => {
  token.toggleOverlay(effect);
});
