import React, { useCallback, useState } from 'react';
import { connect }                      from 'react-redux';

import Button         from '../../../../components/button';
import ConfirmDialog  from '../../../../components/confirm-dialog';
import Dialog         from '../../../../components/dialog';
import closeSettings  from '../../actions/close-settings';
import resetGameState from '../../../world/actions/reset-game-state';

import './settings-dialog.scss';

const SettingsDialog = ({ resetGameState, closeSettings }) => {

  const [confirmQuit, setConfirmQuit] = useState(false);

  const handleQuitButtonClick = useCallback(
    () => setConfirmQuit(true),
    []
  );

  const handleQuitDialogClose = useCallback(
    () => setConfirmQuit(false),
    []
  )

  return(
    <Dialog>
      <div className='flex-column settings-dialog__container'>
        <span className='settings-dialog__title'>
          {'Settings'}
        </span>

        <Button
          onClick={handleQuitButtonClick}
          icon='caret-square-left'
          title='Return to Menu' />

        <Button
          onClick={closeSettings}
          icon='times'
          title='Close' />
      </div>

      <ConfirmDialog
        open={confirmQuit}
        text='Are you sure you want to quit? You will lose all progress...'
        onClose={handleQuitDialogClose}
        confirm={resetGameState} />

    </Dialog>
  );
};

const actions = { resetGameState, closeSettings };

export default connect(null, actions)(SettingsDialog);