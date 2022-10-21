
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
   console.log(tips);
   return tips;
}



function countTips(day) {

    const oneBarmen = (day.sum / 10) / day.barmen;
	const oneHostes = (day.sum / 12.5) / day.hostes;
	const oneOfficiant = (day.sum - ((day.sum / 10) * day.barmen + (day.sum / 12.5) * day.hostes)) / day.officiants;

	return [oneBarmen, oneHostes, oneOfficiant];
}




