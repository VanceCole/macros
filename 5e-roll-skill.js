// Make a skill (Athletics) check
actor.rollSkill('ath');

// Skip advantage dialog and roll immediately
actor.rollSkill('ath', { fastForward: true });

/*
* Available params for 5e's rollSkill():
*
* @param {Array} parts             The dice roll component parts, excluding the initial d20
* @param {Object} data             Actor or item data against which to parse the roll
* @param {Event|object} event      The triggering event which initiated the roll
* @param {string} rollMode         A specific roll mode to apply as the default for the resulting roll
* @param {string|null} template    The HTML template used to render the roll dialog
* @param {string|null} title       The dice roll UI window title
* @param {Object} speaker          The ChatMessage speaker to pass when creating the chat
* @param {string|null} flavor      Flavor text to use in the posted chat message
* @param {Boolean} fastForward     Allow fast-forward advantage selection
* @param {Function} onClose        Callback for actions to take when the dialog form is closed
* @param {Object} dialogOptions    Modal dialog options
* @param {boolean} advantage       Apply advantage to the roll (unless otherwise specified)
* @param {boolean} disadvantage    Apply disadvantage to the roll (unless otherwise specified)
* @param {number} critical         The value of d20 result which represents a critical success
* @param {number} fumble           The value of d20 result which represents a critical failure
* @param {number} targetValue      Assign a target value against which the result of this roll should be compared
* @param {boolean} elvenAccuracy   Allow Elven Accuracy to modify this roll?
* @param {boolean} halflingLucky   Allow Halfling Luck to modify this roll?
* @param {boolean} reliableTalent  Allow Reliable Talent to modify this roll?
* @param {boolean} chatMessage     Automatically create a Chat Message for the result of this roll
* @param {object} messageData      Additional data which is applied to the created Chat Message, if any
*/