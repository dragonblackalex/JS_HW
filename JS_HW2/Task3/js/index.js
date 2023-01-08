const namesOfDays = {
    ua: ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота', 'Неділя'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Tuesday', 'Friday', 'Saturday', 'Sunday'],
}

function getNameOfDay(){
    const lang = 'en';
    const day = 6;
    let nameOfDay = '';
    
	for (let key in namesOfDays) {
		if (key === lang) {
			nameOfDay = namesOfDays[key][day - 1];
		}
	}
	
    return nameOfDay;
}

console.log(getNameOfDay());