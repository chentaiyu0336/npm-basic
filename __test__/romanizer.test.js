import {transform } from "../src/romanizer";
describe('romanizer',() => {
  it('should return X when input 10',() => {
      let output = transform(10);
      expect(output).toEqual('X');
  }
  );
})