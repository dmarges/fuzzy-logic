/**
 * A static-method library for calculating Fuzzy Logic on given values.
 * @author Donnie Marges
 * @version 0.0.1
 */

var FuzzyLogic = {

	fuzzyGrade: function(value, x0, x1) {
		var result = 0;

		if(value <= x0) {
			result = 0;
		} else if(value >= x1) {
			result = 1;
		} else {
			result = (value / (x1 - x0)) - (x0 / (x1 - x0));
		}

		return result;
	},

	reverseFuzzyGrade: function(value, x0, x1) {
		var result = 0;

		if(value <= x0) {
			result = 1;
		} else if(value >= x1) {
			result = 0;
		} else {
			result = (-value / (x1 - x0)) + (x1 / (x1 - x0));
		}

		return result;
	},

	fuzzyTriangle: function(value, x0, x1, x2) {
		var result = 0;

		if(value <= x0) {
			result = 0;
		} else if(value === x1) {
			result = 1;
		} else if((value > x0) && (value < x1)) {
			result = (value / (x1 - x0)) - (x0 / (x1 - x0));
		} else {
			result = (-value / (x2 - x1)) + (x2 / (x2 - x1));
		}

		return result;
	},

	fuzzyTrapezoid: function(value, x0, x1, x2, x3) {
		var result = 0;

		if(value <= x0) {
			result = 0;
		} else if((value > x0) && (value < x1)) {
			result = (value / (x1 - x0)) - (x0 / (x1 - x0));
		} else if((value >= x1) && (value<=x2)) {
			result = 1;
		} else {
			result = (-value / (x3 - x2)) + (x3 / (x3 - x2));
		}

		return result;
	},

	fuzzyAnd: function(value1, value2) {
		return Math.min(value1, value2);
	},

	fuzzyOr: function(value1, value2) {
		return Math.max(value1, value2);
	},

	fuzzyNot: function(value) {
		return 1 - value;
	},

	sharpValue: function(fuzzyValues, sharpValues) {
		if(fuzzyValues.length !== sharpValues.length) {
			return;
		}

		var numerator = 0,
			denominator = 0;

		for(var i = 0; i < fuzzyValues.length; i++) {
			numerator += fuzzyValues[i] * sharpValues[i];
			denominator += fuzzyValues[i];
		}

		return numerator / denominator;
	}
};
