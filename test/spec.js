
var expect = require('chai').expect;
var NumerosFelizes = require('../Dojo/NumerosFelizes') 

describe('Teste para determinar os numeros felizes', function() {
  describe('Retorne Feliz quando chamar a funçao', function() {
    var numeros = new NumerosFelizes
    it('ao passar um numero Feliz', function(){
      expect(numeros.verificarSeUmNumeorFeliz(13)).to.equal("Feliz")
    });
  });
  describe('Retorne Numero Infeliz quando chamar a funçao', function() {
    var numeros = new NumerosFelizes
    it('ao passar um numero Numero Infeliz', function(){
      expect(numeros.verificarSeUmNumeorFeliz(8)).to.equal("Numero infeliz")
    });
  });
  describe('Retorne Numero infeliz quando chamar a funçao', function() {
    var numeros = new NumerosFelizes
    it('ao passar um numero Numero infeliz', function(){
      expect(numeros.verificarSeUmNumeorFeliz(8)).to.equal("Numero infeliz")
    });
  });
});
