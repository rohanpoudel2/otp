import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorMessage from '../ErrorMessage';

describe('ErrorMessage Component', () => {
  test('renders without error message', () => {
    render(<ErrorMessage error={null} />);
    const errorMessageElement = screen.queryByText(/error/i);
    expect(errorMessageElement).toBeNull();
  });

  test('renders with error message', () => {
    const errorMessage = 'An error occurred';
    render(<ErrorMessage error={errorMessage} />);
    const errorMessageElement = screen.getByText(errorMessage);
    expect(errorMessageElement).toBeInTheDocument();
  });

  test('applies additional classes', () => {
    const errorMessage = 'An error occurred';
    const additionalClass = 'additional-class';
    render(<ErrorMessage error={errorMessage} className={additionalClass} />);
    const errorMessageElement = screen.getByText(errorMessage);
    expect(errorMessageElement).toHaveClass(additionalClass);
  });
});