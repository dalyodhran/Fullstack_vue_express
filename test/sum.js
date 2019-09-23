/* test/sum.js */

var expect = require('chai').expect;

describe('#', function() {

  context('without arguments', function() {
    it('should return 0', function() {
      expect(0).to.equal(0)
    })
  })

  context('with number arguments', function() {
    it('should return sum of arguments', function() {
      expect(15).to.equal(15)
    })

    it('should return argument when only one argument is passed', function() {
      expect(5).to.equal(5)
    })
  })

})
