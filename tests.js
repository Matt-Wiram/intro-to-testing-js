// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return the string "Hello, Pat!"', function () {
        expect(sayHello('Pat')).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, !', function () {
        expect(sayHello("")).toBe("Hello, !")
    });
    it('should never returned undefined', function () {
        expect(sayHello("Pat")).not.toBe(undefined)
    });
    it('should return "Hello, World!"', function () {
        expect(sayHello()).toBe("Hello, World!")
    });
});
describe("isFive", function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function')
    });
    it('should return a boolean', function () {
        expect(typeof isFive()).toBe("boolean")
    });
    it('should return true when 5 is passed in as the argument', function () {
        expect(isFive(5)).toBe(true)
    });
    it('should should return 5 when "5" is passed in as the argument', function () {
        expect(isFive("5")).toBe(true)
    });
}) 