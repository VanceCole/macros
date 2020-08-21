/*
 * Reveals all fog of war to explored state
 * NOT THOROUGHLY TESTED, USE WITH CAUTION
 */
// Set desired level of opacity for revealed areas
const opacity = 0x999999;

// Get fog obj
const fog = canvas.sight.fog;

// Create a new render texture
const revealed = PIXI.RenderTexture.create({
  width: canvas.dimensions.width,
  height: canvas.dimensions.height,
  scale: 1,
  resolution: canvas.sight._fogResolution
});
// Fill render texture with desired opacity
const fill = new PIXI.Graphics();
fill.beginFill(opacity);
fill.drawRect(0, 0, canvas.dimensions.width, canvas.dimensions.height);
fill.endFill();

// Render fill to the texture
canvas.app.renderer.render(fill, revealed);

// Swap the staging texture to the rendered texture
fog.rendered.texture.destroy(true);
fog.rendered.texture = revealed;
