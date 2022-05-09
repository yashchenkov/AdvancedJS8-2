import ErrorRepository from '../ErrorRepository';

test('testing translate method', () => {
  const rep = new ErrorRepository();
  expect(rep.translate(123)).toEqual('123 error');
});

test('testing translate method error', () => {
  const rep = new ErrorRepository();
  expect(rep.translate(423)).toEqual('Unknown error');
});