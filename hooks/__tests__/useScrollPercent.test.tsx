import React from 'react';
import {
  renderHook, act, render, fireEvent,
} from '@testing-library/react';
import useScrollPercent from '../useScrollPercent';

// 스크롤 함수
const dispatchScrollEvent = ({
  dom = window.document.documentElement,
  scrollHeight,
  clientHeight,
  scrollTop,
}: {
    dom?: HTMLElement
    scrollHeight: number;
    clientHeight: number;
    scrollTop: number;
  }) => {
  Object.defineProperty(dom, 'scrollHeight', {
    value: scrollHeight,
    writable: true,
  });

  Object.defineProperty(dom, 'clientHeight', {
    value: clientHeight,
    writable: true,
  });

  Object.defineProperty(dom, 'scrollTop', {
    value: scrollTop,
    writable: true,
  });
  dom.dispatchEvent(new Event('scroll'));
};

describe('useScrollPercent', () => {
  it('선언 시 scrollPer and domRef 상태', () => {
    const { result } = renderHook(() => useScrollPercent());
    expect(result.current.scrollPer).toBe(0);
    expect(result.current.domRef.current).toBeNull();
  });

  it('스크롤 발생 시 scrollPer 업데이트', () => {
    let result = {} as ReturnType<typeof useScrollPercent<HTMLDivElement>>;
    const Wrapper = () => {
      result = useScrollPercent<HTMLDivElement>();
      return (
        <div style={{ height: '1000px' }} data-testid="parentDom">
          <div style={{ height: '2000px' }} data-testid="childDom" ref={result.domRef} />
        </div>
      );
    };
    const { getByTestId } = render(<Wrapper />);
    act(() => {
      dispatchScrollEvent({
        dom: getByTestId('parentDom'),
        scrollHeight: 2000,
        clientHeight: 1000,
        scrollTop: 500,
      });
    });
    expect(result.scrollPer).toBe(50);
  });
});
