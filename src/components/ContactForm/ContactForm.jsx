import * as Yup from 'yup';
import 'yup-phone-lite';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsOperations';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';

import { Avatar, Button, TextField, Box, Typography } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import CloseIcon from '@mui/icons-material/Close';
import { useContacts } from '../../hooks';

const INITIAL_STATE = {
  name: '',
  number: '+38',
};

const Schema = Yup.object({
  name: Yup.string().max(20, 'Max: 20 symbols').required(),
  number: Yup.string()
    .phone('UK', 'Please enter a valid phone number in the format for UKRAINE')
    .required('A phone number is required'),
});

export const ContactForm = ({ onToggleModal, handleIsSuchСontact }) => {
  const dispatch = useDispatch();
  const { contacts } = useContacts();

  const formik = useFormik({
    initialValues: { ...INITIAL_STATE },
    validationSchema: Schema,
    onSubmit: (values, { resetForm }) => {
      const { name, number } = values;

      if (contacts.length) {
        const isInConntacts =
          contacts.find(contact => contact.name === name) ||
          contacts.find(contact => contact.number === number);

        if (isInConntacts) {
          handleIsSuchСontact(`${name} Is already in contacts !`);
          return;
        }
      }

      dispatch(addContact(values));
      resetForm();
      onToggleModal();
    },
  });

  return (
    <>
      <Button
        sx={{ display: 'block', ml: 'auto' }}
        onClick={() => {
          onToggleModal();
        }}
      >
        <CloseIcon />
      </Button>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mx: 'auto',
          width: 500,
          height: 380,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <PersonAddAltIcon />
        </Avatar>
        <Typography component="h2" variant="h5">
          Add contact
        </Typography>

        <form onSubmit={formik.handleSubmit} autoComplete="off" sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            id="name"
            label="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />

          <TextField
            margin="normal"
            fullWidth
            id="number"
            name="number"
            label="Phone"
            type="tel"
            value={formik.values.number}
            onChange={formik.handleChange}
            error={formik.touched.number && Boolean(formik.errors.number)}
            helperText={formik.touched.number && formik.errors.number}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add contact
          </Button>
        </form>
      </Box>
    </>
  );
};

ContactForm.propTypes = {
  onToggleModal: PropTypes.func.isRequired,
  handleIsSuchСontact: PropTypes.func.isRequired,
};
