export const pathTreament = (pathname) => {
  const negativeOne = -1;
  const lastLetter = pathname.slice(negativeOne);
  let newPathname = pathname;
  // console.log('oi');
  if (lastLetter === '/') {
    const size = pathname.length - 1;
    newPathname = (pathname.slice(0, size));
  }
  if (newPathname.includes('comidas/')) {
    return '/bebidas';
  }
  if (newPathname.includes('bebidas/')) {
    return '/comidas';
  }
  return newPathname;
};

export const alertMessage = (fn, message) => {
  fn(message);
};

export const getItem = (key) => JSON.parse(localStorage.getItem(key));
export const setItem = (key, value) => localStorage.setItem(key, JSON.stringify(value));
export const setInitialItem = (key, value) => {
  if (!getItem(key)) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
