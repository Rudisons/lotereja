const vardi=['Avis Lielais','Maigonis Pālis','Ralfs Kalniņš','Jānis Baranka','Līga Timofejeva'];
const balvas=['Šņabis','Pervij golf','Dators','Naglas','Tualetes Papīrs'];
const naudaKopa=1000000;//kopējā summa
let uzvaretajuSkaits=5;
let rindas= document.querySelector('.rindas');
rindas.innerHTML='';
for(let i=0;i<uzvaretajuSkaits; i++){
let rand=Math.random()* vardi.length;
rand=Math.floor(rand);//noapaļo uz leju
let uzvaretajs=vardi[rand];
rindas.innerHTML +=`
<tr>
<td>${i+1}</td>
<td>${uzvaretajs}</td>
</tr>`
}

