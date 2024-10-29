import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Typography, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import EditIcon from '@mui/icons-material/Edit';
import CallIcon from '@mui/icons-material/Call';

import { TransitionsModal } from 'components/Modal/Modal';
import { ContactUpdate } from 'components/ContactUpdate';

export const Contact = ({ name, number, id, handleIsSuchСontact }) => {
  const [isBtnActive, setIsBtnActive] = useState(false);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = () => {
    dispatch(deleteContact(id));
    setIsBtnActive(true);
  };

  return (
    <>
      <Box
        component={'div'}
        sx={{
          display: 'flex',

          alignItems: 'center',

          mx: 'auto',
          border: '1px solid #1976d2',
          borderRadius: 1,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: 500,
            ml: 2,
          }}
        >
          <ContactPhoneIcon sx={{ mr: 2, color: '#1976d2' }} />
          <Typography>{name}</Typography>
        </Box>

        <Box
          sx={{
            textAlign: 'center',
            width: 200,
            height: '100%',
            py: 1.2,
            borderRight: '1px solid #1976d2',
            borderLeft: '1px solid #1976d2',
          }}
        >
          <Typography sx={{ textAlign: 'center' }}>{number}</Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            mx: 'auto',
            width: 200,
          }}
        >
          <IconButton
            component={'a'}
            href={`tel:${number}`}
            edge="end"
            aria-label="delete"
            sx={{
              ':hover': {
                bgcolor: 'white',
                color: 'green',
              },
            }}
            color="primary"
          >
            <CallIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="edit"
            type="button"
            onClick={handleOpen}
            disabled={isBtnActive}
            color="primary"
          >
            <EditIcon />
          </IconButton>

          <IconButton
            edge="end"
            aria-label="delete"
            type="button"
            onClick={handleDelete}
            disabled={isBtnActive}
            sx={{
              ':hover': {
                bgcolor: 'white',
                color: 'red',
              },
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>

      {open && (
        <TransitionsModal handleClose={handleClose} open={open}>
          <ContactUpdate
            onToggleModal={handleClose}
            contact={{ name, number, id }}
            handleIsSuchСontact={handleIsSuchСontact}
          />
        </TransitionsModal>
      )}
    </>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleIsSuchСontact: PropTypes.func.isRequired,
};
