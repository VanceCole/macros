// Get actor / item / scene / journal etc by ID
let actor = game.actors.get("0HcZSUIUZ48WAPyv")
let item = game.items.get("0HcZSUIUZ48WAPyv")
let journal = game.journal.get("0HcZSUIUZ48WAPyv")
let scene = game.scene.get("0HcZSUIUZ48WAPyv")

// Get actor / item / scene / journal etc by name
let actor = game.actors.getName("Steve")
let item = game.items.getName("Steve's Item")
let journal = game.journal.getName("Steve's Journal")
let scene = game.scene.getName("Steve's House")

// Get all actors which are Player Characters
let pcs = game.actors.filter(actor => actor.isPC)

// Get all actors which are npcs
let npcs = game.actors.filter(actor => !actor.isPC)