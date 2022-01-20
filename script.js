const vardi=['Avis Lielais','Maigonis Pālis','Ralfs Kalniņš','Jānis Baranka','Līga Timofejeva'];
const balvas=['Šņabis','Pervij golf','Dators','Naglas','Tualetes Papīrs'];
const naudaKopa=1000000;//kopējā summa
let uzvaretajuSkaits=5;
let rand=Math.random()*5;
rand=Math.floor(rand);//noapaļo uz leju
console.log(vardi[rand]);//izvada konsolē