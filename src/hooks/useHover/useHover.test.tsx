import { act, renderHook } from '@testing-library/react';
import useHover from './useHover';

test('hover', () => {
  const { result } = renderHook(() => useHover());
  const [hover] = result.current;

  expect(hover).toBe(0);
});

test('mouseOver', () => {
  const { result } = renderHook(() => useHover());
  const [initHover, mouseOver] = result.current;

  expect(initHover).toBe(0);

  act(() => {
    mouseOver(1);
  });

  const [changeHover] = result.current;

  expect(changeHover).toBe(1);
});

test('mouseLeave', () => {
  const { result } = renderHook(() => useHover());

  const [initHover, mouseOver, mouseLeave] = result.current;

  expect(initHover).toBe(0);

  act(() => {
    mouseOver(2);
  });

  const [chageHover] = result.current;

  expect(chageHover).toBe(2);

  act(() => {
    mouseLeave();
  });

  const [resetHover] = result.current;

  expect(resetHover).toBe(0);
});
