
describe("Using the Fuzzy Logic Membership Functions", function() {
	it("should return correct fuzzy value using Fuzzy Grade function", function() {
		expect(FuzzyLogic.fuzzyGrade(5, 4, 6)).toEqual(0.5);
	});

	it("should return correct fuzzy value using Reverse Fuzzy Grade function", function() {
		expect(FuzzyLogic.reverseFuzzyGrade(5, 4, 6)).toEqual(0.5);
	});

	it("should return correct fuzzy value using Fuzzy Triangle function", function() {
		expect(FuzzyLogic.fuzzyTriangle(5, 4, 6, 7)).toEqual(0.5);
	});

	it("should return correct fuzzy value using Fuzzy Trapezoid function", function() {
		expect(FuzzyLogic.fuzzyTrapezoid(5, 4, 6, 7)).toEqual(0.5);
	});
});

describe("Using Fuzzy Logical Operators", function() {
	it("should return the smallest number from a set of fuzzy values using AND operator", function() {
		expect(FuzzyLogic.fuzzyAnd(FuzzyLogic.fuzzyGrade(5, 4, 6), FuzzyLogic.fuzzyGrade(5.8, 4, 6))).toEqual(0.5);
	});

	it("should return the largest number from a set of fuzzy values using OR operator", function() {
		expect(FuzzyLogic.fuzzyOr(FuzzyLogic.fuzzyGrade(5, 4, 6), FuzzyLogic.fuzzyGrade(5.8, 4, 6))).toEqual(0.8999999999999999);
	});

	it("should return a correct value using NOT operator", function() {
		expect(FuzzyLogic.fuzzyNot(FuzzyLogic.fuzzyGrade(5, 4, 6))).toEqual(0.5);
	});
});

describe("Defuzzifying Values", function() {
	it("should return the smallest number from a set of fuzzy values using AND operator", function() {
		var testValue1 = FuzzyLogic.fuzzyGrade(5, 4, 6),
			testValue2 = FuzzyLogic.fuzzyGrade(5.8, 4, 6),
			testValue3 = FuzzyLogic.fuzzyGrade(4.1, 4, 6),
			sharpValue1 = 4,
			sharpValue2 = 6,
			sharpValue3 = 4,
			fuzzyValues = [testValue1, testValue2, testValue3],
			sharpValues = [sharpValue1, sharpValue2, sharpValue3];
		
		expect(FuzzyLogic.sharpValue(fuzzyValues, sharpValues)).toEqual(5.241379310344827);
	});
});