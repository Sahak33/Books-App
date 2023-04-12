import { render, } from '@testing-library/react';
import DateInput from 'components/inputs/dateInput';
import { helpRouter } from 'test/App.test';
import '@testing-library/jest-dom/extend-expect';

describe('dateInput', () => {
  beforeEach(() => {
    render(helpRouter(<DateInput />));
  });
  it("renders a date input element", () => {
    const { container } = render(helpRouter(<DateInput register={() => { }} />));
    const dateInput = container.querySelector(".dateInput");
    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute("type", "date");
  });
});
