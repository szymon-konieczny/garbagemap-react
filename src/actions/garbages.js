import database, { refGarbages } from '../firebase/firebase';

export const fetchGarbages = () => {
  const garbagesJSON = localStorage.getItem('garbageList');
  const garbages = JSON.parse(garbagesJSON);
  return garbages;
};

export const saveGarbageToDatabase = (garbage) => {
  refGarbages.push(garbage);
}

export const fetchGarbagesFromDB = () => {
  let garbageArr = [];
  refGarbages.once('value', snapshot => {
    const garbages = Object.entries(snapshot.val());
    garbageArr = Array.from(garbages.map(item => item[1]));
  }, error => {
      console.log("Error: " + error.code);
  });
  console.log(garbageArr);
}