// Get result of a roll to use as a variable
let r = new Roll('1d20').roll();

// Roll to chat message
new Roll('1d20').toMessage();

/*
 * Note that toMessage is async
 * This means that if you need to use the result of the roll, you should either
 * 1) do so before calling toMessage()
 * 2) use await
 */
let r = new Roll('1d20').roll();
r.toMessage();
// or
let r = await new Roll('1d20').toMessage();

// Roll with flavor text
new Roll('1d20').toMessage({ flavor: 'Example Flavor' });

// Roll with preset roll modes
new Roll('1d20').toMessage({ rollMode: 'roll' });      // Public Roll
new Roll('1d20').toMessage({ rollMode: 'gmroll' });    // Private GM Roll
new Roll('1d20').toMessage({ rollMode: 'blindroll' }); // Blind GM Roll
new Roll('1d20').toMessage({ rollMode: 'selfroll' });  // Self Roll
