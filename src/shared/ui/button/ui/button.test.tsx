import { render, screen } from '@testing-library/react';
import { ButtonVariants } from '../consts';
import { Button } from './button';

describe('Button component', () => {
  test('should render with text', () => {
    render(<Button>Text</Button>);
    expect(screen.getByText('Text')).toBeInTheDocument();
  });

  test('should render with variant', () => {
    render(<Button variant={ButtonVariants.Clear}>Text</Button>);
    expect(screen.getByText('Text')).toHaveClass(ButtonVariants.Clear);
  });
});
