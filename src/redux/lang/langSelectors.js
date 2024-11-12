export const selectLang = state => state.lang.lang;
export const selectDefaultLang = state => state.lang.defaultLang;

export const selectLangSelectors = {
  selectLang,
  selectDefaultLang,
};
