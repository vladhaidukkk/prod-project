import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button component', () => {
  test('should render with text', () => {
    render(<Button>Text</Button>);
    expect(screen.getByText('Text')).toBeInTheDocument();
  });

  test('should render with filled variant', () => {
    render(<Button variant="filled">Text</Button>);
    expect(screen.getByText('Text')).toHaveClass('filled');
  });

  test('should render with outlined variant', () => {
    render(<Button variant="outlined">Text</Button>);
    expect(screen.getByText('Text')).toHaveClass('outlined');
  });

  test('should render with text variant', () => {
    render(<Button variant="text">Text</Button>);
    expect(screen.getByText('Text')).toHaveClass('text');
  });
});
