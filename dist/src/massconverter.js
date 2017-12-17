"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.toKilogramos = toKilogramos;
exports.toLibras = toLibras;
function toKilogramos(libras) {
	return libras * 0.453592;
}

function toLibras(kilogramos) {
	return kilogramos * 2.20462;
}