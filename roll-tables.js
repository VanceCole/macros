/*
 * Examples for using roll tables
 * Examples assume existence of a basic roll table
 * called "Months" that contains text entries
 */

// Roll table and output to chat
game.tables.getName('Months').draw();

// Roll table and store result for later use
let roll = game.tables.getName('Months').roll();

// Roll table and send custom chat with result
let draw = game.tables.getName('Months').roll();
let month = draw.results[0].text;
ChatMessage.create({ content: `The month is: ${month}`});
