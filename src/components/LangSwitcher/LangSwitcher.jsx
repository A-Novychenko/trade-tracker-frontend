import { useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

import { useLang } from 'hooks';
import { changeLang } from '@/lang/langSlice';

export const LangSwitcher = () => {
  const dispatch = useDispatch();

  const { lang, defaultLang } = useLang();

  const handleToggleLang = newLang => {
    if (newLang === lang) {
      return;
    }

    dispatch(changeLang({ lang: newLang }));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="text" aria-label="Basic button group">
        <Button
          sx={{ color: defaultLang ? '#fff' : '#717171' }}
          onClick={() => {
            handleToggleLang('ru');
          }}
        >
          RU
        </Button>

        <Button
          sx={{ color: defaultLang ? '#717171' : '#fff' }}
          onClick={() => {
            handleToggleLang('en');
          }}
        >
          EN
        </Button>
      </ButtonGroup>
    </Box>
  );
};
