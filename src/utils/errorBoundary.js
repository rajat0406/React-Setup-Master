import React from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      errorInfo: "",
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line no-console
    console.log({ error, errorInfo });
    this.setState({ errorInfo });
  }

  render() {
    // Error path
    const { hasError, errorInfo } = this.state;
    if (hasError) {
      return (
        <div className="card my-5">
          <div className="card-header">
            <p>
              There was an error in loading this page.{" "}
              <span
                style={{ cursor: "pointer", color: "#0077FF" }}
                onClick={() => {
                  window.location.reload();
                }}
              >
                Reload this page
              </span>
            </p>
          </div>
          <div className="card-body">
            <details style={{ whiteSpace: "pre-wrap" }}>
              <summary>Click for error details</summary>
              {errorInfo && errorInfo.componentStack}
            </details>
          </div>
        </div>
      );
    }

    // Normally, just render children
    return this.props.children;
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};
export default ErrorBoundary;
