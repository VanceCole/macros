/**
 * For dealing with entities embedded in another entity, for example
 * item owned by a character you use updateEmbeddedEntity()
 */

// Toggle equip / unequip of actor Steve's Warhammer
let myActor = game.actors.getName('Steve');
let myItem = actor.data.items.find(i => i.name === 'Warhammer');
myActor.updateEmbeddedEntity('OwnedItem', {
  _id: myItem._id,
  'data.equipped': !myItem.data.equipped
});

// You can also use the shortcut method updateOwnedItem, f.x.:
myActor.updateOwnedItem({
  _id: myItem._id,
  'data.equipped': !myItem.data.equipped
});

// Example to change quantity of `Crossbow Bolts` owned by Steve by -1
let myActor = game.actors.getName('Steve');
let myItem = actor.data.items.find(i => i.name === 'Crossbow Bolts');
myActor.updateOwnedItem({
  _id: myItem._id,
  'data.quantity': myItem.data.quantity-1
});

/**
 * You can update multiple embeddedEntity in one db operation if required
 * Not only can you do this, you very much should especially if operation
 * may effect many items
 */

// Example to unequip all items of type "weapon"
let myActor = game.actors.getName('Steve');
let myItems = actor.data.items.filter(i => i.type === 'weapon');
let updates = myItems.map((i) => {
  return {
    _id: i._id,
    'data.equipped': false
  };
});
myActor.updateEmbeddedEntity('OwnedItem', updates);
// myActor.updateOwnedItem(updates);     // As before, you can use shortcut updateOwnedItem() instead
