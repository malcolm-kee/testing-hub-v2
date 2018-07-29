import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { canGoBack } from '../services/route';
import { IconButton } from './IconButton';

class BackButtonContainer extends React.Component<RouteComponentProps<{}>> {
  render() {
    return <IconButton onClick={this.handleClick} name="arrow_back" />;
  }

  handleClick = () => {
    if (canGoBack()) {
      this.props.history.goBack();
    } else {
      this.props.history.push('/');
    }
  };
}

export const BackButton = withRouter(BackButtonContainer);
