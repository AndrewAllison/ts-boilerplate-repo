import { fibonacci } from './fibonacci';

describe('FIB', () => {
  it('should return 0 when n is 0', () => {
    const result = fibonacci(0);
    expect(result).toBe(0);
  });
  it('should return 1 when n is 1', () => {
    const result = fibonacci(1);
    expect(result).toBe(1);
  });
  it('should return the same negative number when n is negative', () => {
    const result = fibonacci(-5);
    expect(result).toBe(-5);
  });
  it('should return 55 when n is 10', () => {
    const result = fibonacci(10);
    expect(result).toBe(55);
  });
});
