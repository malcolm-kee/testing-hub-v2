import * as React from 'react';
import { connect } from 'react-redux';
import Textarea from 'react-textarea-autosize';
import { Dispatch } from 'redux';
import { IStore } from '../../Type';
import { NoteActionCreator } from '../parts/noteAction';

interface IStoreProps {
  content: string;
}

interface IDispatchProps {
  setContent: (content: string) => void;
}

type IProps = IStoreProps & IDispatchProps;

class NoteEditorContainer extends React.Component<IProps> {
  render() {
    return (
      <Textarea
        onChange={this.handleChange}
        value={this.props.content}
        className="textarea"
        placeholder="Your note here"
      />
    );
  }

  handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = e => {
    const { value } = e.target;
    this.props.setContent(value);
  };
}

const mapStates = (state: IStore): IStoreProps => ({
  content: state.note.editor.content
});

const mapDispatch = (dispatch: Dispatch): IDispatchProps => ({
  setContent: (content: string) => {
    dispatch(NoteActionCreator.SetEditorContent(content));
  }
});

export const NoteEditor = connect(
  mapStates,
  mapDispatch
)(NoteEditorContainer);
