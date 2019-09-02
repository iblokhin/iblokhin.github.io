var pow = require('../dist/js/pow.js');

describe("test pow function", function() {
    it("10^5", function() {
        var result;
        result = pow(10, 5);
        expect(result).toEqual(100000);
    });

    it("5^9", function() {
        var result;
        result = pow(5, 9);
        expect(result).toEqual(1953125);
    });
});