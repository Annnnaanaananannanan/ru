const title = {
	ad : 'Аренда дома',
	adp : 'Аренда дома посуточно',
	pd : 'Продажа дома',
	ak : 'Аренда квартиры',
	akp : 'Аренда квартиры посуточно',
	pk : 'Продажа квартиры',
	ay : 'Аренда участка',
	py : 'Продажа участка',
	pr : 'Продажа комнаты',
}

const status = {
	ar : 'Аренда',
	pr : 'Продажа',
}
const square = {
	kv :'Квартира',
	dm :'Дом',
	km :'Комната',
	yc :'Участок',
}

const cardsData = [
	{
		id: 1,
		img: 'img/4.jpg',
		title: title.adp,
		params: {
			square: square.dm,
			floor: '1',
			room: '3',
			status: status.ar
		},
		address: 'Ярославская обл., Рыбинский р-н, Глебовское с/п, дер. Мухино, д. 100',
		cost: 'от 6 000',
	},
	{
		id: 2,
		img: 'img/2.jpg',
		title: title.py,
		params: {
			square: square.yc,
			floor: '-',
			room: '-',
			status: status.pr
		},
		address: '',
		cost: '15 000',
	},
{
		id: 3,
		img: 'img/3.jpg',
		title: title.py,
		params: {
			square: square.yc,
			floor: '-',
			room: '-',
			status: status.pr
		},
		address: 'Ярославская обл., Рыбинский р-н, Глебовское с/п, дер. Юрино',
		cost: '470 000',
	},{
		id: 4,
		img: 'img/1.jpg',
		title: title.ad,
		params: {
			square: square.dm,
			floor: '2',
			room: '6',
			status: status.ar
		},
		address: '',
		cost: '20 000',
	},

{
		id: 5,
		img: 'img/5.jpg',
		title: title.pk,
		params: {
			square: square.kv,
			floor: '9',
			room: '2',
			status: status.pr
		},
		address: 'Ярославская обл., г. Рыбинск, Прибережный р-н, ул. Баррикадная, <br>д. 32 ',
		cost: '2 690 000',
	},
{
		id: 6,
		img: 'img/6.jpg',
		title: title.ak,
		params: {
			square: square.kv,
			floor: '5',
			room: '2',
			status: status.ar
		},
		address: 'Ярославская обл., г. Рыбинск, ул. Пушкина, д. 22',
		cost: '20 000',
	},
{
		id: 7,
		img: 'img/7.jpg',
		title: title.pd,
		params: {
			square: square.dm,
			floor: '2',
			room: '3',
			status: status.pr
		},
		address: 'Ярославская обл., Рыбинский р-н, Судоверфское с/п, СНТ Волна, <br>ул. Восходная, д. 178 ',
		cost: '1 290 000',
	},
{
		id: 8,
		img: 'img/8.jpg',
		title: title.adp,
		params: {
			square: square.dm,
			floor: '2',
			room: '3',
			status: status.ar
		},
		address: 'Ярославская обл., Рыбинский р-н, Волжское с/п, дер. Серково',
		cost: 'от 6 000',
	},

	





]