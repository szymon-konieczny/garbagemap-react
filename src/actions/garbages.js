import database, { refGarbages } from '../firebase/firebase';

export const fetchGarbages = () => {
  let garbagesTmp;
  refGarbages.once('value', snapshot => {
    garbagesTmp = Object.entries(snapshot.val());
  });
  return garbagesTmp;
};

export const saveGarbageToDatabase = (garbage) => {
  refGarbages.push(garbage);
}
