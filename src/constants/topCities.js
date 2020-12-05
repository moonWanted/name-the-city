const TOP_CITIES = [
	{
		"Number": "1",
		"City": "Москва",
		"Population": "12 678 079"
	},
	{
		"Number": "2",
		"City": "Лондон",
		"Population": "8787892"
	},
	{
		"Number": "3",
		"City": "Санкт-Петербург",
		"Population": "5 398 064"
	},
	{
		"Number": "4",
		"City": "Киев",
		"Population": "3703127"
	},
	{
		"Number": "5",
		"City": "Берлин",
		"Population": "3601131"
	},
	{
		"Number": "6",
		"City": "Мадрид",
		"Population": "3223334"
	},
	{
		"Number": "7",
		"City": "Рим",
		"Population": "2872800"
	},
	{
		"Number": "8",
		"City": "Париж",
		"Population": "2140526"
	},
	{
		"Number": "9",
		"City": "Минск",
		"Population": "2020600"
	},
	{
		"Number": "10",
		"City": "Бухарест",
		"Population": "1883425"
	},
	{
		"Number": "11",
		"City": "Вена",
		"Population": "1840573"
	},
	{
		"Number": "12",
		"City": "Гамбург",
		"Population": "1830584"
	},
	{
		"Number": "13",
		"City": "Варшава",
		"Population": "1758143"
	},
	{
		"Number": "14",
		"City": "Будапешт",
		"Population": "1749734"
	},
	{
		"Number": "15",
		"City": "Барселона",
		"Population": "1620343"
	},
	{
		"Number": "16",
		"City": "Мюнхен",
		"Population": "1456039"
	},
	{
		"Number": "17",
		"City": "Харьков",
		"Population": "1439036"
	},
	{
		"Number": "18",
		"City": "Милан",
		"Population": "1366180"
	},
	{
		"Number": "19",
		"City": "София",
		"Population": "1310453"
	},
	{
		"Number": "20",
		"City": "Прага",
		"Population": "1280508"
	},
	{
		"Number": "21",
		"City": "Казань",
		"Population": "1 257 391"
	},
	{
		"Number": "22",
		"City": "Нижний Новгород",
		"Population": "1 252 236"
	},
	{
		"Number": "23",
		"City": "Белград",
		"Population": "1233796"
	},
	{
		"Number": "24",
		"City": "Брюссель",
		"Population": "1198726"
	},
	{
		"Number": "25",
		"City": "Самара",
		"Population": "1 156 659"
	},
	{
		"Number": "26",
		"City": "Ростов-на-Дону",
		"Population": "1 137 904"
	},
	{
		"Number": "27",
		"City": "Бирмингем",
		"Population": "1137100"
	},
	{
		"Number": "28",
		"City": "Уфа",
		"Population": "1 128 787"
	},
	{
		"Number": "29",
		"City": "Кёльн",
		"Population": "1075935"
	},
	{
		"Number": "30",
		"City": "Воронеж",
		"Population": "1 058 261"
	},
	{
		"Number": "31",
		"City": "Пермь",
		"Population": "1 055 397"
	},
	{
		"Number": "32",
		"City": "Одесса",
		"Population": "1010783"
	},
	{
		"Number": "33",
		"City": "Волгоград",
		"Population": "1 008 998"
	},
	{
		"Number": "34",
		"City": "Днепр",
		"Population": "1000717"
	},
	{
		"Number": "35",
		"City": "Неаполь",
		"Population": "966144"
	},
	{
		"Number": "36",
		"City": "Стокгольм",
		"Population": "961609"
	},
	{
		"Number": "37",
		"City": "Краснодар",
		"Population": "932 629"
	},
	{
		"Number": "38",
		"City": "Донецк",
		"Population": "927201"
	},
	{
		"Number": "39",
		"City": "Тирана",
		"Population": "883996"
	},
	{
		"Number": "40",
		"City": "Турин",
		"Population": "882523"
	},
	{
		"Number": "41",
		"City": "Марсель",
		"Population": "870018"
	},
	{
		"Number": "42",
		"City": "Амстердам",
		"Population": "859732"
	},
	{
		"Number": "43",
		"City": "Саратов",
		"Population": "838 042"
	},
	{
		"Number": "44",
		"City": "Загреб",
		"Population": "812635"
	},
	{
		"Number": "45",
		"City": "Валенсия",
		"Population": "791413"
	},
	{
		"Number": "46",
		"City": "Лидс",
		"Population": "784800"
	},
	{
		"Number": "47",
		"City": "Краков",
		"Population": "766739"
	},
	{
		"Number": "48",
		"City": "Запорожье",
		"Population": "750685"
	},
	{
		"Number": "49",
		"City": "Франкфурт-на-Майне",
		"Population": "736414"
	},
	{
		"Number": "50",
		"City": "Львов",
		"Population": "727968"
	},
	{
		"Number": "51",
		"City": "Тольятти",
		"Population": "699 429"
	},
	{
		"Number": "52",
		"City": "Лодзь",
		"Population": "696503"
	},
	{
		"Number": "53",
		"City": "Севилья",
		"Population": "688711"
	},
	{
		"Number": "54",
		"City": "Кишинёв",
		"Population": "685900"
	},
	{
		"Number": "55",
		"City": "Осло",
		"Population": "673469"
	},
	{
		"Number": "56",
		"City": "Палермо",
		"Population": "668405"
	},
	{
		"Number": "57",
		"City": "Сарагоса",
		"Population": "666880"
	},
	{
		"Number": "58",
		"City": "Афины",
		"Population": "655780"
	},
	{
		"Number": "59",
		"City": "Ижевск",
		"Population": "648 146"
	},
	{
		"Number": "60",
		"City": "Хельсинки",
		"Population": "643272"
	},
	{
		"Number": "61",
		"City": "Рига",
		"Population": "641423"
	},
	{
		"Number": "62",
		"City": "Роттердам",
		"Population": "641326"
	},
	{
		"Number": "63",
		"City": "Вроцлав",
		"Population": "638364"
	},
	{
		"Number": "64",
		"City": "Штутгарт",
		"Population": "628032"
	},
	{
		"Number": "65",
		"City": "Ульяновск",
		"Population": "627 705"
	},
	{
		"Number": "66",
		"City": "Кривой Рог",
		"Population": "623215"
	},
	{
		"Number": "67",
		"City": "Глазго",
		"Population": "621020"
	},
	{
		"Number": "68",
		"City": "Копенгаген",
		"Population": "615993"
	},
	{
		"Number": "69",
		"City": "Дюссельдорф",
		"Population": "613230"
	},
	{
		"Number": "70",
		"City": "Ярославль",
		"Population": "608 353"
	},
	{
		"Number": "71",
		"City": "Махачкала",
		"Population": "603 518"
	},
	{
		"Number": "72",
		"City": "Дортмунд",
		"Population": "585813"
	},
	{
		"Number": "73",
		"City": "Эссен",
		"Population": "583084"
	},
	{
		"Number": "74",
		"City": "Генуя",
		"Population": "580097"
	},
	{
		"Number": "75",
		"City": "Вильнюс",
		"Population": "580020"
	},
	{
		"Number": "76",
		"City": "Шеффилд",
		"Population": "577800"
	},
	{
		"Number": "77",
		"City": "Оренбург",
		"Population": "572 188"
	},
	{
		"Number": "78",
		"City": "Лейпциг",
		"Population": "571088"
	},
	{
		"Number": "79",
		"City": "Малага",
		"Population": "569002"
	},
	{
		"Number": "80",
		"City": "Бремен",
		"Population": "565719"
	},
	{
		"Number": "81",
		"City": "Гётеборг",
		"Population": "565496"
	},
	{
		"Number": "82",
		"City": "Дублин",
		"Population": "553165"
	},
	{
		"Number": "83",
		"City": "Дрезден",
		"Population": "547172"
	},
	{
		"Number": "84",
		"City": "Познань",
		"Population": "540372"
	},
	{
		"Number": "85",
		"City": "Рязань",
		"Population": "539 290"
	},
	{
		"Number": "86",
		"City": "Набережные Челны",
		"Population": "533 839"
	},
	{
		"Number": "87",
		"City": "Ганновер",
		"Population": "532864"
	},
	{
		"Number": "88",
		"City": "Астрахань",
		"Population": "529 793"
	},
	{
		"Number": "89",
		"City": "Антверпен",
		"Population": "523248"
	},
	{
		"Number": "90",
		"City": "Пенза",
		"Population": "520 300"
	},
	{
		"Number": "91",
		"City": "Киров",
		"Population": "518 348"
	},
	{
		"Number": "92",
		"City": "Лион",
		"Population": "515695"
	},
	{
		"Number": "93",
		"City": "Нюрнберг",
		"Population": "511628"
	},
	{
		"Number": "94",
		"City": "Гомель",
		"Population": "510300"
	},
	{
		"Number": "95",
		"City": "Скопье",
		"Population": "509900"
	},
	{
		"Number": "96",
		"City": "Липецк",
		"Population": "508 573"
	},
	{
		"Number": "97",
		"City": "Балашиха",
		"Population": "507 366"
	},
	{
		"Number": "98",
		"City": "Лиссабон",
		"Population": "506654"
	},
]

export default TOP_CITIES;