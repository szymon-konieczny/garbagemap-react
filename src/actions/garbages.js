import database, { refGarbages } from '../firebase/firebase';

export const fetchGarbages = () => {
  const garbagesJSON = localStorage.getItem('garbageList');
  const garbages = JSON.parse(garbagesJSON);
  return garbages;
};

export const saveGarbageToDatabase = (garbage) => {
  refGarbages.push(garbage);
}
