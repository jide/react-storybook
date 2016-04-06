import React, { Component, PropTypes } from 'react';

class ActionLoggerHeader extends Component {
  constructor(...args) {
    super(...args);
    this.state = {};
  }

  render() {
    const wrapStyle = {
      cursor: 'row-resize',
      padding: '5px',
      boxSizing: 'border-box',
    };

    const h3Style = {
      fontFamily: `
        -apple-system, ".SFNSText-Regular", "San Francisco", "Roboto",
        "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif
      `,
      color: '#444',
      letterSpacing: '2px',
      fontSize: 12,
      margin: '5px 0 2px 5px',
    };

    const clearButtonStyle = {
      marginLeft: 5,
    };

    const onClear = this.props.onClear;

    return (
      <div style={wrapStyle}>
        <h3 style={h3Style}>
          ACTION LOGGER
          <button style={clearButtonStyle} onClick={onClear}>CLEAR</button>
        </h3>
      </div>
    );
  }
}

ActionLoggerHeader.propTypes = {
  onClear: React.PropTypes.func,
};

export default ActionLoggerHeader;
