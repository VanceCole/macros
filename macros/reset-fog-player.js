// Requests individual user to reset fog exploration
let uid = game.users.getName('Steve').id;
SocketInterface.dispatch("modifyDocument", {
  type: "FogExploration",
  action: "delete",
  data: {user: uid, scene: canvas.scene.id},
  options: {reset: true}
})
