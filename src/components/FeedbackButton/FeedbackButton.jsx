import { ContactBtn } from './FeedbackButton.styled';

export const FeedbackButton = ({ action }) => {
  return (
    <ContactBtn onClick={action} type="button">
      Contact us now
    </ContactBtn>
  );
};
