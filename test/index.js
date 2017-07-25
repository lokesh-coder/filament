var assert = require('assert');
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should fail ', function () {
            assert.equal(2, [1, 2, 3].indexOf(9));
        });
    });
});