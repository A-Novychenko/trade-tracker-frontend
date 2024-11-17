import { ThreeDots } from 'react-loader-spinner';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { useLang } from '../../hooks';

export const ModalForm = ({
  children,
  text,
  title,
  open,
  status,
  handleClose,
  handleSubmit,
  sendName,
}) => {
  const { defaultLang } = useLang();

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit,
          sx: {
            backgroundColor: '#0a206b',
            color: '#fff',
          },
        }}
      >
        <div style={{ position: 'relative' }}>
          <DialogTitle
            sx={{
              color: '#fff',
            }}
          >
            {title}
          </DialogTitle>

          <DialogContent>
            <DialogContentText
              sx={{
                color: '#c2c2c2',
              }}
            >
              {text}
            </DialogContentText>

            {children}
          </DialogContent>

          {status && (
            <div
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                position: 'absolute',
                zIndex: 999999999,
              }}
            >
              <ThreeDots
                height="200"
                width="200"
                radius="9"
                color="#ffffff"
                ariaLabel="three-dots-loading"
                visible={true}
              />
            </div>
          )}
        </div>

        <DialogActions>
          <Button
            sx={{
              color: '#ffaaaa',
            }}
            onClick={handleClose}
          >
            {defaultLang ? 'Закрыть' : 'Close'}
          </Button>

          <Button
            disabled={status === 'pending'}
            sx={{
              color: '#ffffff',
              fontWeight: 600,
            }}
            type="submit"
          >
            {sendName ? sendName : defaultLang ? 'Отправить' : 'Send'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
