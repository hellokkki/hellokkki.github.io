
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
  
   const newDiv = document.createElement('div');
   const moneyLine = document.createTextNode(`${tips}`);


   newDiv.style.width = '15rem';
   newDiv.style.height = '4rem';
   newDiv.style.paddingTop = '-4rem';

   newDiv.appendChild(moneyLine);
   moneyholder.append(newDiv);
}


function countTips(day) {

    const oneBarmen = (day.sum / 10) / day.barmen;
	const oneHostes = (day.sum / 12.5) / day.hostes;
	const oneOfficiant = (day.sum - 
        ((day.sum / 10) * day.barmen + (day.sum / 12.5) * day.hostes)) / day.officiants;

	return `for this one of beautifull week days one barman had ${Math.round(oneBarmen)} of cash, one hostes ${Math.round(oneHostes)} of cash, and, finally, one officiant had ${Math.round(oneOfficiant)} of cash`;
}





