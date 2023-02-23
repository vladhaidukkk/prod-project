import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'shared/utils/tests';
import { Counter } from './counter';

describe('Counter entity component', () => {
  test('should render with proper counter value', () => {
    renderWithProviders(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
  });

  test('should increment counter value', () => {
    renderWithProviders(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    fireEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('counter-value')).toHaveTextContent('11');
  });

  test('should decrement counter value', () => {
    renderWithProviders(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    fireEvent.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('counter-value')).toHaveTextContent('9');
  });
});
