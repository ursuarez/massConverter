const expect = require('chai').expect
const toKilogramos = require('..').toKilogramos
const toLibras = require('..').toLibras

describe('#massConverter', function () {
	it('Transformacion de kilogramos a libras', function () {
		const converter = toKilogramos(20)
		expect(converter).to.equal(9.07184)
	})

	it('Transformacion de libras a kilogramos', function () {
		const converter = toLibras(20)
		expect(converter).to.equal(44.0924)
	})
})