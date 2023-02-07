import compose from 'compose-function';
import { withI18n } from './with-i18n';
import { withRouter } from './with-router';
import { withTheme } from './with-theme';

export const withProviders = compose(withRouter, withTheme, withI18n);
