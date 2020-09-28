/**
 * Toggle visibility of tiles under mouse position
 */

 /** ------------ */

/**
 * Check if token is in bounds of given tile
 * @param {Tile}            tile   An instance of Foundry Tile Placeable
 * @param {PIXI.IPointData} point - The Point to convert
 */
function inBounds(tile, point) {
  // Get local pos relative to tile
  const sprite = tile.tile.children[0];
  const local = translatePoint(point, canvas.stage, tile.tile);
  // Check if in bounds of the tile
  if (
    local.x > 0
    && local.y > 0
    && local.x < sprite.width
    && local.y < sprite.height
  ) {
    return true;
  }
  return false;
}

/**
 * Converts the coordinates of a Point from one context to another
 *
 * @static
 * @param {PIXI.IPointData} point - The Point to convert
 * @param {PIXI.Container}  context1 - The context the point is currently in
 * @param {PIXI.Container}  context2 - The context to translate the point to
 * @return {PIXI.Point}     A Point representing the coordinates in the second context
 */
function translatePoint(point, context1, context2) {
  const pt = new PIXI.Container();
  context1.addChild(pt);
  pt.position.set(point.x, point.y);
  const tp = context2.toLocal(new PIXI.Point(), pt);
  context1.removeChild(pt);
  return tp;
}

/**
 * Gets current mouse position relative to stage regardless of needing mouse event
 */
function getMouseStagePos() {
  const mouse = canvas.app.renderer.plugins.interaction.mouse;
  return mouse.getLocalPosition(canvas.app.stage);
}


/**
 * Return all tiles that exist at given point
 */
function getTilesAtPos(point) {
  return canvas.tiles.placeables.filter((tile) => {
    return inBounds(tile, point);
  });
}

function main() {
  const pos = getMouseStagePos();
  const tiles = getTilesAtPos(pos);
  const updates = tiles.map(t => {
    return {
      _id: t.id,
      hidden: !t.data.hidden,
    }
  });
  canvas.tiles.updateMany(updates);
}

main();
