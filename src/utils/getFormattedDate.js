export const getFormattedDate = data => {
  const date = new Date(data);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Місяці від 0 до 11
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
};
