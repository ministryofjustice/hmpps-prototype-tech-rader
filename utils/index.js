
const getQuadrants = arrayOfObjects => [...new Set(arrayOfObjects.map(object => object.quadrant))];

const getRings = arrayOfObjects => [...new Set(arrayOfObjects.map(object => object.ring))];

module.exports = {
    getQuadrants,
    getRings
}