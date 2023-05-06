import React from 'react';
import { render } from '@testing-library/react';
import ProgressBar from '@/components/progressBar/progressBar';

describe('ProgressBar dom check', () => {
  it('render width number 0', () => {
    const utils = render(<ProgressBar per={0} />);
    expect(utils.getByTestId('progressbar').style.width).toBe('0%');
  });
  it('render width number 50', () => {
    const utils = render(<ProgressBar per={50} />);
    expect(utils.getByTestId('progressbar').style.width).toBe('50%');
  });
  it('render width number 100', () => {
    const utils = render(<ProgressBar per={100} />);
    expect(utils.getByTestId('progressbar').style.width).toBe('100%');
  });
  it('bar color', () => {
    const utils = render(<ProgressBar per={100} />);
    expect(utils.getByTestId('progressbar').style.backgroundColor).toBe('red');
  });
});
