const {getQuadrants, getRings} = require('../utils')
const radarData = require('../data/radarData')

expect.extend({
    toBeDistinct(received) {
      const pass = Array.isArray(received) && new Set(received).size === received.length;
      if (pass) {
        return {
          message: () => `expected [${received}] array is unique`,
          pass: true,
        };
      } else {
        return {
          message: () => `expected [${received}] array is not to unique`,
          pass: false,
        };
      }
    },
  });

describe('Ensure radar JSON data has the correct sturcture', () => {
    test('There are no duplicate values in returend quadrants', () => {
      const quadrants = getQuadrants(radarData)
      expect(quadrants).toBeDistinct();
    });
    test('There are no duplicate values in returend rings', () => {
        const rings = getRings(radarData)
        expect(rings).toBeDistinct();
      });
  });
  