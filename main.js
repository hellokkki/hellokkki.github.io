
const arr = [];

const button = document.querySelector('#get-btn');
const form = document.querySelector('[name="form"]');
const moneyholder = document.querySelector('.moneyholder');

form.addEventListener("submit", countInputTips);


function countInputTips (e) {
    e.preventDefault();
    const data = new FormData(form);
    for (const [name, value] of data) {
    arr.push([name, +value]);
    }
   
   const day = Object.fromEntries(arr);
   const tips = countTips(day);
   moneyholder.innerHTML = `<p>${tips}</p>`
   console.log(tips);
   return tips;
}


function countTips(day) {

    const oneBarmen = (day.sum / 10) / day.barmen;
	const oneHostes = (day.sum / 12.5) / day.hostes;
	const oneOfficiant = (day.sum - 
        ((day.sum / 10) * day.barmen + (day.sum / 12.5) * day.hostes)) / day.officiants;

	return `for this one of beautifull week days one barman had ${oneBarmen} of cash, one hostes ${oneHostes} of cash, and, finally, one officiant had ${oneOfficiant} of cash`;
}





