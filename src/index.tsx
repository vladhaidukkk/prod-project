import { render } from 'react-dom';
import App from 'app';
import { Providers } from 'app/providers';

render(
  <Providers>
    <App />
  </Providers>,
  document.getElementById('root')
);
