import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from 'shared/utils/tests';
import { Sidebar } from './sidebar';

describe('Sidebar widget', () => {
  test('should render without props', () => {
    renderWithProviders(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('should toggle collapsed state', () => {
    renderWithProviders(<Sidebar />);
    fireEvent.click(screen.getByTestId('sidebar-collapse-btn'));
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
