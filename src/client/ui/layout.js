import React from 'react';

import VSplit from './layout_vsplit';
import SplitPane from '@mnmtanish/react-split-pane';

class Layout extends React.Component {
  render() {
    const { controls, preview, actionLogger } = this.props;

    const rootStyles = {
      height: '100vh',
      // padding: 8,
      backgroundColor: '#F7F7F7',
    };

    const controlsStyle = {
      height: '100%',
      overflowY: 'auto',
      padding: '5px 0 5px 10px',
      boxSizing: 'border-box',
    };

    const actionStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      padding: '5px 10px 5px 0',
      boxSizing: 'border-box',
    };

    const previewStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      padding: '5px 10px 5px 0',
      boxSizing: 'border-box',
    };

    const vsplit = <VSplit />;
    const hsplit = this.props.actionLoggerHeader;

    return (
      <div style={rootStyles}>
        <SplitPane split="vertical" defaultSize={250} resizerChildren={vsplit}>
            <div style={controlsStyle}>
              {controls}
            </div>
            <SplitPane split="horizontal" primary="second" defaultSize={250} resizerChildren={hsplit}>
              <div style={previewStyle}>
                {preview}
              </div>
              <div style={actionStyle}>
                {actionLogger}
              </div>
            </SplitPane>
        </SplitPane>
      </div>
    );
  }
}

Layout.propTypes = {
  controls: React.PropTypes.element.isRequired,
  preview: React.PropTypes.element.isRequired,
  actionLoggerHeader: React.PropTypes.element.isRequired,
  actionLogger: React.PropTypes.element.isRequired,
};

export default Layout;
