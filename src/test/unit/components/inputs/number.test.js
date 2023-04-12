import { render, screen, fireEvent } from '@testing-library/react';
import NumberInput from 'components/inputs/numberInput';
import { helpRouter } from 'test/App.test';
import '@testing-library/jest-dom/extend-expect';

describe('number', () => {
  beforeEach(() => {
    render(helpRouter(<NumberInput register={() => { }} />));
  });

  it('renders a number input field', () => {
    const input = screen.getByPlaceholderText('Search price...');
    expect(input).toBeInTheDocument();
  });

  it('test number input', () => {
    const nameInput = screen.getByPlaceholderText('Search price...');
    expect(nameInput.value).toBe('');
    fireEvent.change(nameInput, { target: { value: 'test' } });
    expect(nameInput.value).toBe('');
  });

});
