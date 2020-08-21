// Get result of a roll to use as a variable
let result = new Roll('1d20').roll();

// Roll to chat message
new Roll('1d20').toMessage();

// Roll with flavor text
new Roll('1d20').toMessage({ flavor: 'Example Flavor' });

// Roll with preset roll mode
new Roll('1d20').toMessage({ rollMode: 'gmroll' });

