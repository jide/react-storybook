import React from 'react';

const style = {
  width: '100%',
  height: '100%',
  color: '#666',
  overflowY: 'auto',
  padding: '8px',
  boxSizing: 'border-box',
  border: '1px solid #ECECEC',
  borderRadius: 4,
  backgroundColor: '#FFF',
  margin: '0',
};

const ActionLogger = ({ actionLog }) => (
  <pre style={style}>{actionLog}</pre>
);

ActionLogger.propTypes = {
  actionLog: React.PropTypes.string.isRequired,
};

export default ActionLogger;
