var user = [
	{
		name: "User0",
		login: "0",
		password: "0",
	},
	{
		name: "User1",
		login: "1",
		password: "1",
	},
	{
		name: "User2",
		login: "2",
		password: "2",
	}
]

var coin = [
	{
		id: 0,
		fullName: "Бандера С.",
		abbreviation: "Чоловік",
		img: "img/img1.png",
		price: 500,
		marketCap: 28,
		vol: 5,
		yearJob: 3,
		jobTitle: "Программіст",
		iqTest: 110,
		test: 90,
		interview: 90,
	},
	{
		id: 1,
		fullName: "Шевченко І.",
		abbreviation: "Чоловік",
		img: "img/img2.png",
		price: 2000,
		marketCap: 45,
		vol: 10,
		yearJob: 9,
		jobTitle: "Керівник",
		iqTest: 100,
		test: 40,
		interview: 70,
	},
	{
		id: 2,
		fullName: "Карпенко А.",
		abbreviation: "Жінка",
		img: "img/img3.png",
		price: 1500,
		marketCap: 75,
		vol: 30,
		yearJob: 15,
		jobTitle: "Менеджер",
		iqTest: 90,
		test: 30,
		interview: 60,
	},
	{
		id: 3,
		fullName: "Гамоцька С.",
		abbreviation: "Жінка",
		img: "img/img4.png",
		price: 2800,
		marketCap: 40,
		vol: 20,
		yearJob: 9,
		jobTitle: "Программіст",
		iqTest: 70,
		test: 60,
		interview: 77,
	},
	{
		id: 4,
		fullName: "Стус В.",
		abbreviation: "Чоловік",
		img: "img/img5.png",
		price: 300,
		marketCap: 21,
		vol: 0,
		yearJob: 0,
		jobTitle: "Менеджер",
		iqTest: 100,
		test: 100,
		interview: 50,
	},
	{
		id: 5,
		fullName: "Шевченко В.",
		abbreviation: "Чоловік",
		img: "img/img6.png",
		price: 1200,
		marketCap: 25,
		vol: 5,
		yearJob: 1,
		jobTitle: "Менеджер",
		iqTest: 99,
		test: 60,
		interview: 0,
	},
	{
		id: 6,
		fullName: "Карпенко А.",
		abbreviation: "Чоловік",
		img: "img/img7.png",
		price: 10,
		marketCap: 15,
		vol: 0,
		yearJob: 0,
		jobTitle: "Керівник",
		iqTest: 87,
		test: 0,
		interview: 0,
	},
	{
		id: 7,
		fullName: "Пугачева А.",
		abbreviation: "Жінка",
		img: "img/img8.png",
		price: 1200,
		marketCap: 18,
		vol: 0,
		yearJob: 0,
		jobTitle: "Логіст",
		iqTest: 86,
		test: 50,
		interview: 10,
	},
	{
		id: 8,
		fullName: "Гонгало Ф.",
		abbreviation: "Жінка",
		img: "img/img9.png",
		price: 4000,
		marketCap: 45,
		vol: 27,
		yearJob: 20,
		jobTitle: "Керівник",
		iqTest: 92,
		test: 100,
		interview: 50,
	},
	{
		id: 9,
		fullName: "Коваленко О.",
		abbreviation: "Чоловік",
		img: "img/img10.png",
		price: 500,
		marketCap: 21,
		vol: 3,
		yearJob: 1,
		jobTitle: "Керівник",
		iqTest: 96,
		test: 67,
		interview: 100,
	},
	{
		id: 10,
		fullName: "Токарь А.",
		abbreviation: "Чоловік",
		img: "img/img11.png",
		price: 1999,
		marketCap: 25,
		vol: 7,
		yearJob: 5,
		jobTitle: "Программіст",
		iqTest: 97,
		test: 77,
		interview: 80,
	},
	{
		id: 11,
		fullName: "Прохова А.",
		abbreviation: "Жінка",
		img: "img/img12.png",
		price: 1002,
		marketCap: 22,
		vol: 4,
		yearJob: 0,
		jobTitle: "Программіст",
		iqTest: 99,
		test: 90,
		interview: 77,
	},

]



//--------------------------------------------!!!!!!!!!!--------------------------------------------//
var root = document.querySelector("#AllList")


function loginRender() {
	const divLogin = document.createElement("div")
	divLogin.className = "divLogin"

	const title = document.createElement("h2")
	title.innerHTML = "Введіть логін та пароль"

	const login = document.createElement("input")
	login.className = "login"
	login.setAttribute("placeholder", "Логін")

	const password = document.createElement("input")
	password.className = "password"
	password.setAttribute("placeholder", "Пароль")
	password.setAttribute("type", "password")

	const button = document.createElement("button")
	button.innerHTML = "Увійти"
	button.setAttribute("onclick", "login(user)")

	divLogin.append(title)
	divLogin.append(login)
	divLogin.append(password)
	divLogin.append(button)

	root.append(divLogin)
}

function login(user) {
	const login = document.querySelector(".login").value
	const password = document.querySelector(".password").value

	for (let i = 0; i < user.length; i++) {
		if (user[i].login == login && user[i].password == password) {
			const divLogin = document.querySelector(".divLogin")

			const headerUser = document.createElement("h1")
			headerUser.innerHTML = user[i].name
			root.append(headerUser)

			divLogin.remove()
			buttonsFunc()
			buildCoinList(coin)
		}
	}
}
//мои любимые книги
var myLoveCoin = [

]
//список монеток
function buildCoinList(coinList, type, job) {

	const searchCoinList = document.querySelector(".containerCoinList")
	if (searchCoinList) searchCoinList.remove()


	const containerCoinList = document.createElement("div")
	containerCoinList.className = "containerCoinList"


	var titileFirstCoin = document.createElement("h2")

	if (type == "mylist") {

		titileFirstCoin.innerHTML = "Окремий список кандидатів"
		titileFirstCoin.style.color = "green"

		if (myLoveCoin.length == 0) {
			{
				const titleNoCoin = document.createElement("h3")
				titleNoCoin.innerHTML = "Ви не вибрали жодного кандидата!"
				titleNoCoin.style.color = "red"
				containerCoinList.append(titleNoCoin)
			}
		}
	}
	else if (type == "search") {
		titileFirstCoin.innerHTML = `Всі кандидати з бажаною посадою - ${job}`
	}
	else {
		titileFirstCoin.innerHTML = "Всі кандидати"
	}
	containerCoinList.append(titileFirstCoin)


	root.append(containerCoinList)
	for (let i = 0; i < coinList.length; i++) {
		const coinDiv = document.createElement("div")
		coinDiv.className = "coinDiv"


		const leftDiv = document.createElement("div")
		leftDiv.className = "leftDiv"


		const img = document.createElement("img")
		img.className = "img_coin"
		img.setAttribute("src", coinList[i].img)
		img.setAttribute("alt", "Фото монети")

		const paragrafNo = document.createElement("h3")
		paragrafNo.innerHTML = `${i + 1}.`

		const fullNameAndAbbreviation = document.createElement("div")
		fullNameAndAbbreviation.className = "fullNameAndAbbreviation"

		const name = document.createElement("h3")
		name.innerHTML = coinList[i].fullName

		const abbreviation = document.createElement("p")
		abbreviation.innerHTML = coinList[i].abbreviation

		fullNameAndAbbreviation.append(name)
		fullNameAndAbbreviation.append(abbreviation)

		const price = document.createElement("p")
		price.innerHTML = `Очікувана зарплата: <b>${coinList[i].price}$</b>`

		const marketCap = document.createElement("p")
		marketCap.innerHTML = `Вік: <b>${coinList[i].marketCap} років</b>`

		const vol = document.createElement("p")
		vol.innerHTML = `Стаж праці: <b>${coinList[i].vol}</b>`

		const yearJob = document.createElement("p")
		yearJob.innerHTML = `Стаж праці бажаної посади: <b>${coinList[i].yearJob}</b>`

		const jobTitle = document.createElement("p")
		jobTitle.innerHTML = `Бажана посада: <b>${coinList[i].jobTitle}</b>`

		const iqTest = document.createElement("p")
		iqTest.innerHTML = `Iq тест: <b>${coinList[i].iqTest}</b>`

		const test = document.createElement("p")
		test.innerHTML = `Тест компанії: <b>${coinList[i].test}%</b>`

		const interview = document.createElement("p")
		interview.innerHTML = `Оцінка інтерв'ю: <b>${coinList[i].interview}%</b>`

		const buttonLove = document.createElement("button")

		if (type == "mylist") {
			buttonLove.innerHTML = "Видалити зі списку  ❌"
			buttonLove.style.background = "black"
			buttonLove.style.color = "white"
			buttonLove.setAttribute("onclick", `delCoin(${coinList[i].id})`)

		}
		else {
			buttonLove.innerHTML = "Додати в окремий список"


			buttonLove.setAttribute("onclick", `addCoin(${coinList[i].id})`)

			var buttonDel = document.createElement("button")
			buttonDel.innerHTML = "Видалити кандидата ❌"
			buttonDel.setAttribute("onclick", `deletUser(${coinList[i].id})`)
		}





		leftDiv.append(paragrafNo)
		leftDiv.append(img)
		leftDiv.append(fullNameAndAbbreviation)
		leftDiv.append(price)
		leftDiv.append(marketCap)
		leftDiv.append(vol)
		leftDiv.append(yearJob)
		leftDiv.append(jobTitle)
		leftDiv.append(iqTest)
		leftDiv.append(test)
		leftDiv.append(interview)

		leftDiv.append(buttonLove)
		if (!type) leftDiv.append(buttonDel)

		coinDiv.append(leftDiv)
		containerCoinList.append(coinDiv)
	}
}
//Создает кнопки с функционалом сверху
function buttonsFunc() {
	const divButtons = document.createElement("div")
	divButtons.className = "divButtons"

	const titleButton = document.createElement("h3")
	titleButton.innerHTML = "Відсортувати за:"

	const buttonName = document.createElement("button")
	buttonName.innerHTML = "Прізвищем"
	buttonName.setAttribute("onclick", "nameCoin(coin)")

	const buttonPrise = document.createElement("button")
	buttonPrise.innerHTML = "Очікувана зарплата 💸"
	buttonPrise.setAttribute("onclick", "price(coin)")

	const buttonPriseCap = document.createElement("button")
	buttonPriseCap.innerHTML = "Віком💰"
	buttonPriseCap.setAttribute("onclick", "priseCap(coin)")

	const buttonVol = document.createElement("button")
	buttonVol.innerHTML = "Стаж праці 👛"
	buttonVol.setAttribute("onclick", "volCoin(coin)")

	const buttonyearJob = document.createElement("button")
	buttonyearJob.innerHTML = "Стаж праці обраної посади 📒"
	buttonyearJob.setAttribute("onclick", "yearJob(coin)")

	const buttoniqTest = document.createElement("button")
	buttoniqTest.innerHTML = "Iq тест 🧠"
	buttoniqTest.setAttribute("onclick", "iqTest(coin)")

	const buttontest = document.createElement("button")
	buttontest.innerHTML = "Тест компанії 🖊️"
	buttontest.setAttribute("onclick", "test(coin)")

	const buttoninterview = document.createElement("button")
	buttoninterview.innerHTML = "Оцінка інтерв'ю ✏️"
	buttoninterview.setAttribute("onclick", "interview(coin)")

	const buttonJtitle = document.createElement("button")
	buttonJtitle.innerHTML = "Пошук за посадою 🔍"
	buttonJtitle.setAttribute("onclick", "Jtitle(coin)")

	const buttonAdd = document.createElement("button")
	buttonAdd.innerHTML = "Додати кандидата ➕"
	buttonAdd.setAttribute("onclick", "addDiv()")

	const buttonMyList = document.createElement("button")
	buttonMyList.innerHTML = "Список окремих"
	buttonMyList.style.background = "pink"

	buttonMyList.setAttribute("onclick", "buildCoinList(myLoveCoin, 'mylist')")

	const buttonPro = document.createElement("button")
	buttonPro.innerHTML = "Експерти 👨‍🎓"
	buttonPro.style.background = "black"
	buttonPro.style.color = "white"
	buttonPro.setAttribute("onclick", "expertsDiv()")

	divButtons.append(titleButton)
	divButtons.append(buttonName)
	divButtons.append(buttonPrise)
	divButtons.append(buttonPriseCap)
	divButtons.append(buttonVol)
	divButtons.append(buttonyearJob)
	divButtons.append(buttoniqTest)
	divButtons.append(buttontest)
	divButtons.append(buttoninterview)
	divButtons.append(buttonJtitle)
	divButtons.append(buttonAdd)


	divButtons.append(buttonMyList)
	divButtons.append(buttonPro)

	root.append(divButtons)
}
//сортировка по цене
var pr = 0
function price(coin) {


	if (pr == 0) {
		const arr = coin
		buildCoinList(arr.sort((a, b) => b.price - a.price))
		pr++
	}
	else {
		const arr = coin;
		buildCoinList(arr.sort((a, b) => a.price - b.price))
		pr--
	}
}
//обьему на рынке
var cp = 0
function priseCap(coin) {

	if (cp == 0) {
		const arr = coin;
		buildCoinList(arr.sort((a, b) => b.marketCap - a.marketCap))
		cp++
	}
	else {
		const arr = coin;
		buildCoinList(arr.sort((a, b) => a.marketCap - b.marketCap))
		cp--
	}
}
//По названию
var na = 0
function nameCoin(coin) {
	if (na == 0) {
		const arr = coin.sort((a, b) => a.fullName > b.fullName ? 1 : -1)
		buildCoinList(arr)
		na++
	}
	else {
		const arr = coin.sort((a, b) => a.fullName < b.fullName ? 1 : -1)
		buildCoinList(arr)
		na--
	}
}

var yj = 0
function yearJob(coin) {
	if (yj == 0) {
		const arr = coin.sort((a, b) => a.yearJob > b.yearJob ? 1 : -1)
		buildCoinList(arr)
		yj++
	}
	else {
		const arr = coin.sort((a, b) => a.yearJob < b.yearJob ? 1 : -1)
		buildCoinList(arr)
		yj--
	}
}


var iT = 0
function iqTest(coin) {
	if (iT == 0) {
		const arr = coin.sort((a, b) => a.iqTest > b.iqTest ? 1 : -1)
		buildCoinList(arr)
		iT++
	}
	else {
		const arr = coin.sort((a, b) => a.iqTest < b.iqTest ? 1 : -1)
		buildCoinList(arr)
		iT--
	}
}

var t = 0
function test(coin) {
	if (t == 0) {
		const arr = coin.sort((a, b) => a.test > b.test ? 1 : -1)
		buildCoinList(arr)
		t++
	}
	else {
		const arr = coin.sort((a, b) => a.test < b.test ? 1 : -1)
		buildCoinList(arr)
		t--
	}
}

var inter = 0
function interview(coin) {
	if (inter == 0) {
		const arr = coin.sort((a, b) => a.interview > b.interview ? 1 : -1)
		buildCoinList(arr)
		inter++
	}
	else {
		const arr = coin.sort((a, b) => a.interview < b.interview ? 1 : -1)
		buildCoinList(arr)
		inter--
	}
}



function Jtitle(coin) {

	const listJob = []

	const job = prompt("Введіть необхідну посаду")


	if (job) {


		for (let i = 0; i < coin.length; i++) {
			if (coin[i].jobTitle == job) {
				listJob[listJob.length] = coin[i]


			}
			else if (i == coin.length - 1 && listJob.length == 0) {
				alert("Така посада відсютня")
			}
			buildCoinList(listJob, "search", job)

		}
	}


}



function addDiv() {



	addDivRemove()

	const divAdd = document.createElement("div")
	divAdd.className = "divAdd"

	const inputName = document.createElement("input")
	inputName.className = "fullName"
	inputName.setAttribute("placeholder", "ПІБ")

	const inputabbreviation = document.createElement("input")
	inputabbreviation.className = "abbreviation"
	inputabbreviation.setAttribute("placeholder", "Стать")

	const inpuprice = document.createElement("input")
	inpuprice.className = "price"
	inpuprice.setAttribute("placeholder", "Очікувана ЗП")
	inpuprice.setAttribute("type", "number")

	const inputAge = document.createElement("input")
	inputAge.className = "marketCap"
	inputAge.setAttribute("placeholder", "Вік")
	inputAge.setAttribute("type", "number")

	const inputAgeJ = document.createElement("input")
	inputAgeJ.className = "vol"
	inputAgeJ.setAttribute("placeholder", "Стаж праці")
	inputAgeJ.setAttribute("type", "number")

	const inputAgeJs = document.createElement("input")
	inputAgeJs.className = "yearJob"
	inputAgeJs.setAttribute("placeholder", "Стаж праці обраної посади")
	inputAgeJs.setAttribute("type", "number")

	const inputjobTitle = document.createElement("input")
	inputjobTitle.className = "jobTitle"
	inputjobTitle.setAttribute("placeholder", "Посада")

	const inputiqTest = document.createElement("input")
	inputiqTest.className = "iqTest"
	inputiqTest.setAttribute("placeholder", "Результат Iq тесту")
	inputiqTest.setAttribute("type", "number")

	const inputTestT = document.createElement("input")
	inputTestT.className = "test"
	inputTestT.setAttribute("placeholder", "Результат тесту компанії")
	inputTestT.setAttribute("type", "number")

	const inputinterview = document.createElement("input")
	inputinterview.className = "interview "
	inputinterview.setAttribute("placeholder", "Результат тесту інтерв'ю")
	inputinterview.setAttribute("type", "number")

	divAdd.append(inputName)
	divAdd.append(inputabbreviation)
	divAdd.append(inpuprice)
	divAdd.append(inputAge)
	divAdd.append(inputAgeJ)
	divAdd.append(inputjobTitle)
	divAdd.append(inputAgeJs)
	divAdd.append(inputiqTest)
	divAdd.append(inputTestT)
	divAdd.append(inputinterview)

	const buttonAdd = document.createElement("button")
	buttonAdd.innerHTML = "Додати кандидата"
	buttonAdd.setAttribute("onclick", "add()")

	const buttonClose = document.createElement("button")
	buttonClose.innerHTML = "Закрити вікно"
	buttonClose.setAttribute("onclick", "addDivRemove()")

	divAdd.append(buttonAdd)
	divAdd.append(buttonClose)

	root.append(divAdd)

}

function addDivRemove() {
	divAddSearch = document.querySelector(".divAdd")
	if (divAddSearch) divAddSearch.remove()
}

function add() {

	const fullName = document.querySelector(".fullName").value
	const abbreviation = document.querySelector(".abbreviation").value
	const price = document.querySelector(".price").value
	const marketCap = document.querySelector(".marketCap").value
	const vol = document.querySelector(".vol").value
	const yearJob = document.querySelector(".yearJob").value
	const jobTitle = document.querySelector(".jobTitle").value
	const iqTest = document.querySelector(".iqTest").value
	const test = document.querySelector(".test").value
	const interview = document.querySelector(".interview").value

	if (fullName && abbreviation && price && marketCap && vol && yearJob && jobTitle && iqTest && test && interview) {

		coin[coin.length] = {
			id: coin.length,
			fullName: fullName,
			abbreviation: abbreviation,
			img: "img/img1.png",
			price: price,
			marketCap: marketCap,
			vol: vol,
			yearJob: yearJob,
			jobTitle: jobTitle,
			iqTest: iqTest,
			test: test,
			interview: interview,
		}

		buildCoinList(coin)
		addDivRemove()
	}
	else alert("Введіть всі поля")
}

function deletUser(id) {
	for (let i = 0; i < coin.length; i++) {
		if (coin[i].id == id) {

			coin = coin.filter((n) => { return n.id != id });

		}
	}
	delCoin(id)
	buildCoinList(coin)

}

//По 	волатильности
var vol = 0
function volCoin(coin) {
	if (!vol == 0) {
		const arr = coin.sort((a, b) => a.vol > b.vol ? 1 : -1)
		buildCoinList(arr)
		vol++
	}
	else {
		const arr = coin.sort((a, b) => a.vol < b.vol ? 1 : -1)
		buildCoinList(arr)
		vol--
	}
}
//Добавить в любмые
function addCoin(id) {

	for (let i = 0; i < coin.length; i++) {
		if (coin[i].id == id) myLoveCoin[myLoveCoin.length] = coin[i]
	}


	myLoveCoin = myLoveCoin.reduce((o, i) => {
		if (!o.find(v => v.id == i.id)) {
			o.push(i);
		}
		return o;
	}, []);

	const love = document.createElement("p")
	love.className = "love"
	love.innerHTML = "Додано до списку💖"
	root.append(love)

	setTimeout(() => {
		const love = document.querySelector(".love")
		love.remove()

	}, 1500);

}
//удалить любимый
function delCoin(id) {



	var idToDelete = id
	myLoveCoin.forEach(function (el, i) {
		if (el.id == idToDelete) myLoveCoin.splice(i, 1)
	})

	buildCoinList(myLoveCoin, 'mylist')
	const del = document.createElement("p")
	del.className = "del"
	del.innerHTML = "Видалено❌"
	root.append(del)

	setTimeout(() => {
		const del = document.querySelector(".del")
		del.remove()

	}, 1500);


}

//Меню списка сортировки через экспертов
var ex = 0
function expertsDiv() {

	if (ex == 1) {
		const searchExpertDiv = document.querySelector(".expertsDiv")
		searchExpertDiv.remove()
		ex--
	} else {
		const expertsDiv = document.createElement("div")
		expertsDiv.className = "expertsDiv"

		const inputExperts = document.createElement("input")
		inputExperts.className = "inputExperts"
		inputExperts.setAttribute("placeholder", "Кількість експертів")
		inputExperts.setAttribute("type", "number")
		inputExperts.setAttribute("min", "1")

		const paragrafBor = document.createElement("p")
		paragrafBor.innerHTML = "Експерти боти?🤖"

		const inputBot = document.createElement("input")
		inputBot.className = "inputBot"
		inputBot.setAttribute("type", "checkbox")
		paragrafBor.append(inputBot)

		const paragrafMyList = document.createElement("p")
		paragrafMyList.innerHTML = "Аналіз окремого списку?"
		const inputMylist = document.createElement("input")
		inputMylist.className = "inputMylist"

		inputMylist.setAttribute("type", "checkbox")
		paragrafMyList.append(inputMylist)



		const inputNoCoin = document.createElement("input")
		inputNoCoin.className = "inputNoCoin"
		inputNoCoin.setAttribute("placeholder", "Кількість кандидатів")
		inputNoCoin.setAttribute("type", "number")
		inputNoCoin.setAttribute("min", "2")


		const buttonStart = document.createElement("button")
		buttonStart.innerHTML = "Поїхали🚀"
		buttonStart.style.background = "black"
		buttonStart.style.color = "red"
		buttonStart.setAttribute("onclick", "expertsList()")

		expertsDiv.append(inputExperts)
		expertsDiv.append(inputNoCoin)
		expertsDiv.append(paragrafBor)
		expertsDiv.append(paragrafMyList)

		expertsDiv.append(buttonStart)

		root.append(expertsDiv)
		ex++
	}
}

function expertsList() {

	const expertsAmount = Number(document.querySelector(".inputExperts").value)
	const coinAmount = Number(document.querySelector(".inputNoCoin").value)
	const inputBot = document.querySelector(".inputBot")
	const myList = document.querySelector(".inputMylist")


	var newArrCoins = []

	if (inputBot.checked) {

		if (!myList.checked) {
			for (let i = 0; i < coinAmount; i++) {
				newArrCoins[i] = coin[i]
				newArrCoins[i].gredeExpert = []
				for (let j = 0; j < expertsAmount; j++) {

					const ball = getRandomInt(100)
					newArrCoins[i].gredeExpert[j] = ball

				}

			}
			for (let i = 0; i < newArrCoins.length; i++) {

				const average = averageСost(newArrCoins[i].gredeExpert)
				newArrCoins[i].average = Number(average.toFixed(1))

			}
			newArrCoins.sort((a, b) => b.average - a.average)
			buildNewCoinList(newArrCoins, "bot")
			expertsDiv()
		}
		else {
			for (let i = 0; i < coinAmount; i++) {
				newArrCoins[i] = myLoveCoin[i]
				newArrCoins[i].gredeExpert = []
				for (let j = 0; j < expertsAmount; j++) {

					const ball = getRandomInt(100)
					newArrCoins[i].gredeExpert[j] = ball

				}

			}
			for (let i = 0; i < newArrCoins.length; i++) {

				const average = averageСost(newArrCoins[i].gredeExpert)
				newArrCoins[i].average = Number(average.toFixed(1))

			}
			newArrCoins.sort((a, b) => b.average - a.average)
			buildNewCoinList(newArrCoins, "bot")
			expertsDiv()
		}
	}
	else {

		if (!myList.checked) for (let i = 0; i < coinAmount; i++) newArrCoins[i] = coin[i]
		else for (let i = 0; i < coinAmount; i++) newArrCoins[i] = myLoveCoin[i]

		buildInnerList(newArrCoins, expertsAmount)
		expertsDiv()
	}
}

//рандомайзер
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}
//среднее число
function averageСost(arr) {
	return arr.reduce((partial_sum, a) => partial_sum + a, 0) / arr.length;
}
//Вывод данних через ботов
var dowCoin
function buildNewCoinList(coinList, type) {
	dowCoin = coinList

	const ExpertList = document.querySelector("#ExpertList")

	const searchCoinList = document.querySelector(".containerCoinListExperts")
	if (searchCoinList) searchCoinList.remove()


	const containerCoinList = document.createElement("div")
	containerCoinList.className = "containerCoinListExperts"

	const buttonDonwload = document.createElement("button")
	buttonDonwload.innerHTML = "Скачати список"
	buttonDonwload.setAttribute("onclick", "downloadList('Експерти',dowCoin)")

	const buttonBest = document.createElement("button")
	buttonBest.innerHTML = "Знайти найращого"
	buttonBest.setAttribute("onclick", "theBest(dowCoin)")



	var titileFirstCoin = document.createElement("h2")
	if (type == "bot") titileFirstCoin.innerHTML = "Кадидати экспертів(БОТИ)🤖"
	else titileFirstCoin.innerHTML = "Кадидати экспертів"

	containerCoinList.append(titileFirstCoin)
	containerCoinList.append(buttonDonwload)
	containerCoinList.append(buttonBest)
	ExpertList.append(containerCoinList)
	for (let i = 0; i < coinList.length; i++) {
		const coinDiv = document.createElement("div")
		coinDiv.className = "coinDiv"


		const leftDiv = document.createElement("div")
		leftDiv.className = "leftDiv"


		const img = document.createElement("img")
		img.className = "img_coin"
		img.setAttribute("src", coinList[i].img)
		img.setAttribute("alt", "Фото монети")

		const paragrafNo = document.createElement("h3")
		paragrafNo.innerHTML = `${i + 1}.`

		const fullNameAndAbbreviation = document.createElement("div")
		fullNameAndAbbreviation.className = "fullNameAndAbbreviation"

		const name = document.createElement("h3")
		name.innerHTML = coinList[i].fullName

		const abbreviation = document.createElement("p")
		abbreviation.innerHTML = coinList[i].abbreviation

		fullNameAndAbbreviation.append(name)
		fullNameAndAbbreviation.append(abbreviation)

		const price = document.createElement("p")
		price.innerHTML = `Очікувана зарплата: <b>${coinList[i].price}$</b>`

		if (type == "best") {
			var bestStore = document.createElement("p")
			bestStore.style.color = "red"
			bestStore.innerHTML = `ГОЛОВНАЯ ОЦІНКА ПО ВСІМ КРИТЕРІЯМ: <b>${coinList[i].bestStore}</b>`
		}


		const marketCap = document.createElement("p")
		marketCap.innerHTML = `Вік: <b>${coinList[i].marketCap} років</b>`

		const vol = document.createElement("p")
		vol.innerHTML = `Стаж праці: <b>${coinList[i].vol}</b>`

		const yearJob = document.createElement("p")
		yearJob.innerHTML = `Стаж праці бажаної посади: <b>${coinList[i].yearJob}</b>`

		const jobTitle = document.createElement("p")
		jobTitle.innerHTML = `Бажана посада: <b>${coinList[i].jobTitle}</b>`

		const iqTest = document.createElement("p")
		iqTest.innerHTML = `Iq тест: <b>${coinList[i].iqTest}</b>`

		const test = document.createElement("p")
		test.innerHTML = `Тест компанії: <b>${coinList[i].test}%</b>`

		const interview = document.createElement("p")
		interview.innerHTML = `Оцінка інтерв'ю: <b>${coinList[i].interview}%</b>`

		const average = document.createElement("p")
		average.innerHTML = `Середня оцінка експертів: <b>${coinList[i].average}</b>`

		const listexp = document.createElement("div")
		listexp.className = "listexp"
		for (let j = 0; j < coinList[i].gredeExpert.length; j++) {
			const averageEx = document.createElement("p")
			averageEx.innerHTML = `${j + 1} експерт: <b>${coinList[i].gredeExpert[j]}</b>`
			listexp.append(averageEx)
		}

		const buttonLove = document.createElement("button")
		buttonLove.innerHTML = "Додати в улюблені"
		buttonLove.innerHTML = "Додати в окремий список"
		buttonLove.style.background = "pink"
		buttonLove.setAttribute("onclick", `addCoin(${coinList[i].id})`)

		const buttonDel = document.createElement("button")
		buttonDel.innerHTML = "Видалити кандидата взагалі ❌"
		buttonDel.setAttribute("onclick", `deletUser(${coinList[i].id})`)


		leftDiv.append(paragrafNo)
		leftDiv.append(img)
		leftDiv.append(fullNameAndAbbreviation)
		leftDiv.append(price)
		leftDiv.append(marketCap)
		if (type == "best") leftDiv.append(bestStore)
		leftDiv.append(vol)
		leftDiv.append(yearJob)
		leftDiv.append(jobTitle)
		leftDiv.append(iqTest)
		leftDiv.append(test)
		leftDiv.append(interview)
		leftDiv.append(average)
		leftDiv.append(listexp)
		leftDiv.append(buttonLove)
		leftDiv.append(buttonDel)

		coinDiv.append(leftDiv)
		containerCoinList.append(coinDiv)
	}
}

function theBest(dowCoin) {



	const newBestList = []

	for (let i = 0; i < dowCoin.length; i++) {
		const valueList = rounded(dowCoin[i].average * 0.4 + dowCoin[i].yearJob * 0.3 + dowCoin[i].test * 0.2 + dowCoin[i].interview * 0.2 + dowCoin[i].iqTest * 0.08)

		newBestList[newBestList.length] = { bestStore: valueList, ...dowCoin[i] }


		newBestList.sort((a, b) => b.bestStore - a.bestStore)
	}


	buildNewCoinList(newBestList, "best")

}


var rounded = function (number) {
	return +number.toFixed(2);
}

var newCoinListWar
var NoEx
//Вывод для заполнения экспертов
function buildInnerList(coinList, experts) {

	const ExpertList = document.querySelector("#ExpertList")

	newCoinListWar = coinList
	NoEx = experts
	const searchCoinList = document.querySelector(".containerCoinListExperts")
	if (searchCoinList) searchCoinList.remove()


	const containerCoinList = document.createElement("div")
	containerCoinList.className = "containerCoinListExperts"

	const buttonNext = document.createElement("button")
	buttonNext.className = "buttonNext"
	buttonNext.innerHTML = "Сортувати"
	buttonNext.setAttribute("onclick", `valueExp(newCoinListWar, NoEx)`)

	var titileFirstCoin = document.createElement("h2")
	titileFirstCoin.innerHTML = "Введіть результати експертів"

	containerCoinList.append(titileFirstCoin)
	containerCoinList.append(buttonNext)

	ExpertList.append(containerCoinList)
	for (let i = 0; i < coinList.length; i++) {
		const coinDiv = document.createElement("div")
		coinDiv.className = "coinDiv"


		const leftDiv = document.createElement("div")
		leftDiv.className = "leftDiv"


		const img = document.createElement("img")
		img.className = "img_coin"
		img.setAttribute("src", coinList[i].img)
		img.setAttribute("alt", "Фото монети")

		const paragrafNo = document.createElement("h3")
		paragrafNo.innerHTML = `${i + 1}.`

		const fullNameAndAbbreviation = document.createElement("div")
		fullNameAndAbbreviation.className = "fullNameAndAbbreviation"

		const name = document.createElement("h3")
		name.innerHTML = coinList[i].fullName

		const abbreviation = document.createElement("p")
		abbreviation.innerHTML = coinList[i].abbreviation

		fullNameAndAbbreviation.append(name)
		fullNameAndAbbreviation.append(abbreviation)

		const price = document.createElement("p")
		price.innerHTML = `Очікувана зарплата: <b>${coinList[i].price}$</b>`

		const marketCap = document.createElement("p")
		marketCap.innerHTML = `Вік: <b>${coinList[i].marketCap} млрд $</b>`

		const vol = document.createElement("p")
		vol.innerHTML = `Стаж праці: <b>${coinList[i].vol} млрд $</b>`

		const yearJob = document.createElement("p")
		yearJob.innerHTML = `Стаж праці бажаної посади: <b>${coinList[i].yearJob}</b>`

		const jobTitle = document.createElement("p")
		jobTitle.innerHTML = `Бажана посада: <b>${coinList[i].jobTitle}</b>`

		const iqTest = document.createElement("p")
		iqTest.innerHTML = `Iq тест: <b>${coinList[i].iqTest}</b>`

		const test = document.createElement("p")
		test.innerHTML = `Тест компанії: <b>${coinList[i].test}%</b>`

		const interview = document.createElement("p")
		interview.innerHTML = `Оцінка інтерв'ю: <b>${coinList[i].interview}%</b>`

		const listexp = document.createElement("div")
		listexp.className = "listexp"
		for (let j = 0; j < experts; j++) {
			const averageEx = document.createElement("p")

			const innerEx = document.createElement("input")
			innerEx.className = "innerEx"
			innerEx.setAttribute("id", `ex${i}`)
			innerEx.setAttribute("type", "number")
			innerEx.setAttribute("min", "1")
			innerEx.setAttribute("max", "100")
			averageEx.innerHTML = `${j + 1} експерт:`



			listexp.append(averageEx)
			listexp.append(innerEx)
		}






		leftDiv.append(paragrafNo)
		leftDiv.append(img)
		leftDiv.append(fullNameAndAbbreviation)
		leftDiv.append(price)
		leftDiv.append(marketCap)
		leftDiv.append(vol)
		leftDiv.append(yearJob)
		leftDiv.append(jobTitle)
		leftDiv.append(iqTest)
		leftDiv.append(test)
		leftDiv.append(interview)

		leftDiv.append(listexp)



		coinDiv.append(leftDiv)


		containerCoinList.append(coinDiv)

	}


}

function valueExp(coinlist, NoExp) {
	for (let i = 0; i < coinlist.length; i++) {
		const expValue = document.querySelectorAll(`#ex${i}`)
		coinlist[i].gredeExpert = []
		for (let j = 0; j < expValue.length; j++) {
			coinlist[i].gredeExpert[j] = Number(expValue[j].value)
		}

	}

	for (let i = 0; i < coinlist.length; i++) {
		const average = averageСost(coinlist[i].gredeExpert)
		coinlist[i].average = Number(average.toFixed(1))
	}
	coinlist.sort((a, b) => b.average - a.average)
	buildNewCoinList(coinlist)
}

//скачать лист от экспертов
function downloadList(filename, data) {
	var blob = new Blob([JSON.stringify(data)], { type: "text/javascript" });
	var link = document.createElement("a");
	link.setAttribute("href", URL.createObjectURL(blob));
	link.setAttribute("download", `${filename}.txt`);
	link.click();
}

// loginRender()

buttonsFunc()
buildCoinList(coin)





