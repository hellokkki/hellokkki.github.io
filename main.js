
const arr = [];

const button = document.querySelector('#get-btn');
const form = document.querySelector('[name="form"]');

form.addEventListener("submit", messageWriter);


function messageWriter (e) {
    e.preventDefault();
    const data = new FormData(form);
    for (const [name, value] of data) {
    arr.push([name, +value]);
    }
   
   const day = Object.fromEntries(arr);
   console.log(day);
   const tips = countTips(day);
   for (let prop in day) {
    console.log(typeof prop);
   }
   console.log(tips);
   return tips;
}



function countTips(day) {

    oneBarmen = (day.sum / 10) / day.barmen;
	oneHostes = oneBarmen * 0.8;
	oneOfficiant =  +day.sum - (( oneBarmen * +day.bar + oneHostes * +day.hostes ) / +day.officiants);

	return [oneBarmen, oneHostes, oneOfficiant];
}




