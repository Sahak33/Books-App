import { render, screen, fireEvent, userEvent, waitFor } from '@testing-library/react';
import NumberInput from 'components/inputs/numberInput';
import '@testing-library/jest-dom/extend-expect';
import { helpRouter } from 'test/App.test';

describe('number', () => {
  beforeEach(() => {
   render(helpRouter(<NumberInput />));
  });

  afterEach(() => {});

  it('test number input', () => {
    const nameInput = screen.getByPlaceholderText('Search price...');
    expect(nameInput.value).toBe('');
    fireEvent.change(nameInput, { target: { value: 'test' } });
    expect(nameInput.value).toBe('');
  });

});
