import { GreeterService } from '../src/index';

describe('GreeterService', () => {
  const greeterService = new GreeterService();

  it('should return a greeting message with a given name', () => {
    expect(greeterService.greet('Yor')).toBe('Hello Yor');
  });
});
