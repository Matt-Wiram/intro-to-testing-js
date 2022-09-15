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
    it('should not return undefined when called', function () {
        expect(isFive()).not.toBe(undefined)
    });
});

describe("isEven", function () {
    it('should be a function', function () {
        expect(typeof isEven).toBe('function')
    });
    it('should return a boolean no matter what', function () {
        expect(typeof isEven()).toBe("boolean")
    });
    it('should return true when isEven(2)', function () {
        expect(isEven(2)).toBe(true)
    });
    it('should return true when isEven(-4)', function () {
        expect(isEven(-4)).toBe(true)
    });
    it('should return false when isEven(3)', function () {
        expect(isEven(3)).toBe(false)
    });
    it('should return false when isEven("banana")', function () {
        expect(isEven("banana")).toBe(false)
    });
    it('should return true when isEven("8")', function () {
        expect(isEven("8")).toBe(true)
    });
    it('should return false when isEven(Infinity)', function () {
        expect(isEven(Infinity)).toBe(false)
    });
    it('should return false if called isEven(true))', function () {
        expect(isEven(true)).toBe(false)
    });
    it('should return false if called isEven(false)', function () {
        expect(isEven(false)).toBe(false)
    });
    it('should return false if called isEven()', function () {
        expect(isEven()).toBe(false)
    });
})

describe("isVowel", function () {
    it('should be a function', function () {
        expect(typeof isVowel).toBe("function")
    });
    it('should always return a boolean', function () {
        expect(typeof isVowel()).toBe("boolean")
    });
    it('should return true if isVowel("a")', function () {
        expect(isVowel("a")).toBe(true)
    });
    it('should return true if isVowel("A")', function () {
        expect(isVowel("A")).toBe(true)
    });
    it('should return false if isVowel("y")', function () {
        expect(isVowel("y")).toBe(false)
    });
    it('should return false if isVowel(4)', function () {
        expect(isVowel(4)).toBe(false)
    });
    it('should return false if isVowel(true)', function () {
        expect(isVowel(true)).toBe(false)
    });
    it('should return false if isVowel(false)', function () {
        expect(isVowel(false)).toBe(false)
    });
    it('should return false if isVowel("banana")', function () {
        expect(isVowel("banana")).toBe(false)
    });
    it('should return false if isVowel()', function () {
        expect(isVowel()).toBe(false)
    });
})