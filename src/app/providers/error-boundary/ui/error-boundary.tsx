import { Component, type ErrorInfo, type ReactNode } from 'react';
import { withTranslation, type WithTranslation } from 'react-i18next';

type ErrorBoundaryProps = {
  children: ReactNode;
} & WithTranslation;

type ErrorBoundaryState = {
  hasError: boolean;
};

class _ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>{this.props.t('Something went wrong')}</h1>;
    }

    return this.props.children;
  }
}

export const ErrorBoundary = withTranslation()(_ErrorBoundary);
