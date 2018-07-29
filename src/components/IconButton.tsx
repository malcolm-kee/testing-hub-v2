import * as React from 'react';
import './IconButton.css';

interface IProps {
  name: string;
  onClick: () => void;
}

export const IconButton: React.SFC<IProps> = props => (
  <div className="icon-button" onClick={props.onClick}>
    <i className="material-icons">{props.name}</i>
  </div>
);
