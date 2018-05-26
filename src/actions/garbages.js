export const fetchGarbages = () => {
  const garbagesJSON = localStorage.getItem('garbageList');
  const garbages = JSON.parse(garbagesJSON);
  return garbages;
};