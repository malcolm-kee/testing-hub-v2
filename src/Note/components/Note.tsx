import * as React from 'react';
import { connect } from 'react-redux';
import { AppHeader } from '../../components/AppHeader';
import { IStore } from '../../Type';
import { NoteThunkCreator } from '../parts/noteThunk';
import { INote } from '../parts/NoteType';
import './Note.css';
import { NoteEditor } from './NoteEditor';

interface IStoreProps {
  notes: INote[];
}

interface IDispatchProps {
  init: () => void;
}

type IProps = IStoreProps & IDispatchProps;

class NoteContainer extends React.Component<IProps> {
  render() {
    return (
      <div className="note">
        <AppHeader />
        <div>Note</div>
        <NoteEditor />
      </div>
    );
  }

  componentDidMount() {
    this.props.init();
  }
}

const mapStates = (state: IStore): IStoreProps => ({
  notes: state.note.notes
});

const mapDispatch = (dispatch: any): IDispatchProps => ({
  init: () => {
    dispatch(NoteThunkCreator.init());
  }
});

export const Note = connect(
  mapStates,
  mapDispatch
)(NoteContainer);
