import { render } from 'react-dom';
import { App, Providers } from 'app';
// Global styles that should be loaded even if the App has failed
import 'app/styles/index.scss';

render(
  <Providers>
    <App />
  </Providers>,
  document.getElementById('root')
);
