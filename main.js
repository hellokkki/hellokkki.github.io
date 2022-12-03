
const arr = [];

const button = document.querySelector('#get-btn');
const form = document.querySelector('[name="form"]');
const moneyholder = document.querySelector('.moneyholder');
const inputs = document.querySelectorAll('.input');

form.addEventListener("submit", countInputTips);


function countInputTips (e) {
    e.preventDefault();
    for (let input of inputs) {
        if (input === 0 || '' || null)
        console.log('empty')
        return
    }

    const data = new FormData(form);
    for (const [name, value] of data) {arr.push([name, +value])};
   
   const day = Object.fromEntries(arr);
   console.log(day)
   const tips = countTips(day);
   console.log(countTips(day));



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

            if (oneBarmen || oneOfficiant || oneHostes === 0 || '' || NaN || null) {console.log("hell"); return null};
            if (oneBarmen || oneOfficiant || oneHostes !== 0 || '' || NaN || null) return `for this one of beautifull week days one barman had ${Math.round(oneBarmen)} of cash, one hostes ${Math.round(oneHostes)} of cash, and, finally, one officiant had ${Math.round(oneOfficiant)} of cash`;
          
}





