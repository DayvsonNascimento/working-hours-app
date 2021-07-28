import { render } from '@testing-library/react';
import Spinner from '../Spinner';

describe('Spinner component shoud', () => {
  it('render without errores', () => {
    render(<Spinner />);
  });
});
