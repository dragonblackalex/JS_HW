const citiesAndCountries = {
	'Київ': 'Україна',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нідерланди',
	'Берлін': 'Німеччина',
	'Париж': 'Франція',
	'Ліссабон': 'Португалія',
	'Відень': 'Австрія',
};

for (let [key, value] of Object.entries(citiesAndCountries)){
	console.log(`${key}-це ${value}`);
}