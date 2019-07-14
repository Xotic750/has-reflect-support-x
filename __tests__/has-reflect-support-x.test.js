import hasReflectSupport from '../src/has-reflect-support-x';

describe('basic tests', function() {
  it('results should match', function() {
    expect.assertions(1);
    const expected = typeof Reflect === 'object' && Reflect !== null;
    expect(hasReflectSupport).toBe(expected);
  });
});
