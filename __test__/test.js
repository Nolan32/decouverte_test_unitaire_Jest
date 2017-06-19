var calculatrice =require('../js/app.js')


console.log(calculatrice)


test('test_fonctionnalité_addition',()=>{

	expect(calculatrice.addition(1,2)).toBe(3);
})

test('test_fonctionnalité_soustraction',()=>{
	expect(calculatrice.soustraction(4,2)).toBe(2);
})

test('test_fonctionnalité_multiplication',()=>{
	expect(calculatrice.multiplication(4,2)).toBe(8)
})

test('test_fonctionnalité_division',()=>{
	expect(calculatrice.division(4,2)).toBe(2)
})

test('test_fonctionnalité_division_avec0',()=>{
	expect(calculatrice.division(4,0)).toBe('on ne peut pas diviser par 0')
})