import { addFunc } from "@/lib/utils";


describe('addFunc', () => {
  it('should add two positive numbers', () => {
    expect(addFunc(2, 3)).toBe(5);
  });

  it('should add negative numbers', () => {
    expect(addFunc(-2, -3)).toBe(-5);
  });

  it('should add positive and negative numbers', () => {
    expect(addFunc(5, -3)).toBe(2);
  });

  it('should return 0 when adding 0 and 0', () => {
    expect(addFunc(0, 0)).toBe(0);
  });
});