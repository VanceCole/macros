// Get result of a roll to use as a variable
let result = new Roll('1d20').roll();

// Roll to chat message
new Roll('1d20').toMessage();

// Roll with flavor text
new Roll('1d20').toMessage({ flavor: 'Example Flavor' });

// Roll with preset roll modes
new Roll('1d20').toMessage({ rollMode: 'roll' });      // Public Roll
new Roll('1d20').toMessage({ rollMode: 'gmroll' });    // Private GM Roll
new Roll('1d20').toMessage({ rollMode: 'blindroll' }); // Blind GM Roll
new Roll('1d20').toMessage({ rollMode: 'selfroll' });  // Self Roll
