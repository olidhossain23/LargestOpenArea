import { Greeter } from '../src/main';

test('My Greeter', () => {
  expect(Greeter('Olid')).toBe('Hello Olid');
});
