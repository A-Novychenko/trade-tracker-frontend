import axios from 'axios';

const sendTgAPI = axios.create();

const TOKEN = import.meta.env.VITE_SERVER_TG_TOKEN;
const METHOD = import.meta.env.VITE_SERVER_TG_METHOD;
const URL = import.meta.env.VITE_SERVER_TG_URL;
const CHAT_ID = import.meta.env.VITE_SERVER_TG_CHAT_ID;

export const telegramApi = async msg => {
  console.log('TOKEN', TOKEN);

  const BASE_URL = `${URL}${TOKEN}/${METHOD}`;

  const result = await sendTgAPI.post(BASE_URL, {
    chat_id: CHAT_ID,
    parse_mode: 'html',
    text: msg,
  });

  return result;
};

//  const msg = `<b>Test message</b>\n<b>Name: {name}</b>\n<b>Email: {email}</b>`;

//       <Button
//         type="button"
//         onClick={() => {
//           telegramApi(msg);
//         }}
//       >
//         SEND TG MSG
//       </Button>;
