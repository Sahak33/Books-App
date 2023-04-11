import { render, screen } from '@testing-library/react';
import DateInput from 'components/inputs/dateInput';
import { helpRouter } from 'test/App.test';
import '@testing-library/jest-dom/extend-expect';

describe('dateInput', () => {
  beforeEach(() => {
    render(helpRouter(<DateInput />));
  });
  afterEach(() => {});
  it('dateInput1', () => {
    // const className = screen.getElementsByTagName('input')[0];
    // expect().toBeInTheDocument();
  });
});
