import { clsx } from './clsx';

describe('(Utility function): clsx', () => {
  test('with only main class', () => {
    const res = clsx('main');
    const expected = 'main';
    expect(res).toBe(expected);
  });

  test('with 1 truthy mod', () => {
    const res = clsx('main', { mod: true });
    const expected = 'main mod';
    expect(res).toBe(expected);
  });

  test('with 1 falsy mod', () => {
    const res = clsx('main', { mod: false });
    const expected = 'main';
    expect(res).toBe(expected);
  });

  test('with 1 truthy and falsy mod', () => {
    const res = clsx('main', { truthyMod: true, falsyMode: false });
    const expected = 'main truthyMod';
    expect(res).toBe(expected);
  });

  test('with 1 additional class', () => {
    const res = clsx('main', {}, ['additional']);
    const expected = 'main additional';
    expect(res).toBe(expected);
  });

  test('with 2 additional classes', () => {
    const res = clsx('main', {}, ['additional-1', 'additional-2']);
    const expected = 'main additional-1 additional-2';
    expect(res).toBe(expected);
  });

  test('with mod and additional class', () => {
    const res = clsx('main', { mod: true }, ['additional']);
    const expected = 'main additional mod';
    expect(res).toBe(expected);
  });

  test('with mod and additional class but without main class', () => {
    const res = clsx('', { mod: true }, ['additional']);
    const expected = 'additional mod';
    expect(res).toBe(expected);
  });
});
