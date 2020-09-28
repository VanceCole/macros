/**
 * Get canvas position given PIXI Container like object
 */
function getCanvasPos(context) {
  const { x, y } = context.toGlobal(new PIXI.Point());
  const t = canvas.stage.worldTransform;
  let nx = (x - t.tx) / canvas.stage.scale.x;
  let ny = (y - t.ty) / canvas.stage.scale.y;
  return { x: nx, y: ny};
}

/**
 * Converts the coordinates of a Point from one context to another
 *
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