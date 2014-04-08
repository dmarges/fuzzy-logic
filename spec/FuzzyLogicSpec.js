describe("Creating instance of Fuzzy Logic Library", function() {
	beforeEach(function() {
		this.flLib = new FuzzyLogic();
	});

	it("should create an instance of the library", function() {
		expect(this.flLib).not.toBe(undefined);
	});

	afterEach(function() {
		this.flLib = undefined;
	});
});