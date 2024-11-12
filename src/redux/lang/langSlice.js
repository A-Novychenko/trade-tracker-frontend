import { createSlice } from '@reduxjs/toolkit';

const langSlice = createSlice({
  name: 'lang',
  initialState: { lang: 'ru', defaultLang: true },

  reducers: {
    changeLang(st, { payload }) {
      console.log('payload', payload);
      st.lang = payload.lang;
      st.defaultLang = payload.lang === 'ru';
    },
  },
});

export const langReducer = langSlice.reducer;

export const { changeLang } = langSlice.actions;
