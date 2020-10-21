import React, { PureComponent, Suspense } from "react";
import ErrorBoundary from "../utils/errorBoundary";
const AppContainerWithErrorBoundary = (WrappedComponent) => {
  return class ReduxWrapper extends PureComponent {
    render() {
      return (
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <WrappedComponent {...this.props} />
          </Suspense>
        </ErrorBoundary>
      );
    }
  };
};

export default AppContainerWithErrorBoundary;
