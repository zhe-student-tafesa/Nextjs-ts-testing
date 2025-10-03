import { render, screen, fireEvent } from '@testing-library/react';
 
import '@testing-library/jest-dom';
import Counter from '@/components/counter/Counter';

describe('Counter component', () => {
  it('renders with default initial value', () => {
    render(<Counter />);
    const counterText = screen.getByText('0');
    expect(counterText).toBeInTheDocument();
  });

  it('renders with custom initial value', () => {
    render(<Counter initilValue={5} />);
    const counterText = screen.getByText('5');
    expect(counterText).toBeInTheDocument();
  });

  it('increments counter when +1 button is clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('+ 1');
    fireEvent.click(incrementButton);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('decrements counter when -1 button is clicked', () => {
    render(<Counter initilValue={2} />);
    const decrementButton = screen.getByText('- 1');
    fireEvent.click(decrementButton);
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
