import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'app';
import { ThemeProvider } from 'shared/config/theme';
import 'shared/config/i18n';
import { Suspense } from 'react';

render(
  <BrowserRouter>
    <ThemeProvider>
      <Suspense fallback="">
        <App />
      </Suspense>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
