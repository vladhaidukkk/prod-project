import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/utils/tests/render-with-translation';
import { Sidebar } from './sidebar';

describe('Sidebar widget', () => {
  test('should render without props', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('should toggle collapsed state', () => {
    renderWithTranslation(<Sidebar />);
    fireEvent.click(screen.getByTestId('sidebar-toggle'));
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
