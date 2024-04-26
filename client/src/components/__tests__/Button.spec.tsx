import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../Button';

describe('Button Component', () => {
  test('renders correctly', () => {
    render(<Button>Test Button</Button>);
    const buttonElement = screen.getByText('Test Button');
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders with additional className', () => {
    render(<Button className="additional-class">Test Button</Button>);
    const buttonElement = screen.getByText('Test Button');
    expect(buttonElement).toHaveClass('additional-class');
  });

  test('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Test Button</Button>);
    const buttonElement = screen.getByText('Test Button');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders with type attribute', () => {
    render(<Button type="submit">Test Button</Button>);
    const buttonElement = screen.getByText('Test Button');
    expect(buttonElement).toHaveAttribute('type', 'submit');
  });
});