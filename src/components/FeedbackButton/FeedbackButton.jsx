import { useLang } from 'hooks';
import { ContactBtn } from './FeedbackButton.styled';

export const FeedbackButton = ({ action }) => {
  const { defaultLang } = useLang();
  return (
    <ContactBtn onClick={action} type="button">
      {defaultLang ? 'Связь с нами' : 'Contact us now'}
    </ContactBtn>
  );
};
