import { useState } from 'react';

import { Button, Typography } from '@mui/material';

// import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
// import { Filter } from 'components/Filter';
import { TransitionsModal } from 'components/Modal/Modal';

import PaymentIcon from '@mui/icons-material/Payment';

export default function Contacts({ handleIsSuchСontact }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{ display: 'flex', mr: 'auto', my: 4, bgcolor: 'orangered' }}
      >
        <PaymentIcon fontSize="large" />
        <Typography ml={2}> Make a payment</Typography>
      </Button>
      {/* <Filter /> */}
      {/* <ContactList handleIsSuchСontact={handleIsSuchСontact} /> */}

      {open && (
        <TransitionsModal handleClose={handleClose} open={open}>
          {/* <ContactForm
            onToggleModal={handleClose}
            handleIsSuchСontact={handleIsSuchСontact}
          /> */}
          <p>Payment Form</p>
        </TransitionsModal>
      )}
    </div>
  );
}
