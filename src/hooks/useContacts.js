import { useSelector } from 'react-redux';
import {
  selectFilter,
  selectContacts,
  selectIsLoading,
  selectError,
  selectCompleted,
  selectedVisibleContacts,
} from '../redux/contacts/contactsSelectors';

export const useContacts = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const errorContacts = useSelector(selectError);
  const completed = useSelector(selectCompleted);
  const visibleContacts = useSelector(selectedVisibleContacts);

  return {
    filter,
    contacts,
    isLoading,
    errorContacts,
    completed,
    visibleContacts,
  };
};
