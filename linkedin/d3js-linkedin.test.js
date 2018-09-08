const { visualizeConnections } = require('./d3js-linkedin');

test('`visualizeConnections` is a function', () => {
  expect(typeof visualizeConnections).toBe('function');
});
