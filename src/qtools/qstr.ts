import * as qstr from './qstr';
const Markdown = require("markdown").markdown;


/**
 * Capitalize the first letter of a string.
 * 
 * qstr.capitalizeFirstLetter("this is a sentence."); 
 * 
 * "This is a sentence."
 */
export const capitalizeFirstLetter = (line: string) => {
	return line.charAt(0).toUpperCase() + line.slice(1);
}