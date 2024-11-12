import { useSelector } from 'react-redux';

import { selectLang, selectDefaultLang } from '../redux/lang/langSelectors';

export const useLang = () => {
  const lang = useSelector(selectLang);
  const defaultLang = useSelector(selectDefaultLang);

  return { lang, defaultLang };
};
