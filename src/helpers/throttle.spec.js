import { expect } from 'chai';
import { throttle } from './throttle';

describe('Throttle function', () => {
  let count = 0;
  const callback = () => count++;
  let throttledCallback = throttle(callback, 1000);

  beforeEach(() => {
    count = 0;
    throttledCallback = throttle(callback, 1000);
  });

  it('Should call the function only once', () => {
    throttledCallback();
    throttledCallback();
    expect(count).to.be.equal(1);
  });

  it('Should call the function twice', done => {
    throttledCallback();
    setTimeout(() => {
      throttledCallback();
      expect(count).to.be.equal(2);
      done();
    }, 1500);
  });
});
