//import * as qstr from 'src/qtools/qstr';
// const qstr = require('src/qtools/qstr.ts');
test('adds 1 + 2 to equal 3', () => {
	expect(1 + 2).toBe(3);
});

test('qstr.capitalizeFirstLetter() with lowercase works', () => {
	expect(qstr.capitalizeFirstLetter('this')).toBe('This');
});