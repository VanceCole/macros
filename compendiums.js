// Get data of item in compendium
let pack = game.packs.get('dnd5e.classes');
let content = await pack.getContent();
let data = content.find(i => i.name === 'Barbarian');