const domElements = {
	results: document.getElementById('results'),
	search: {
		input: document.getElementById('search-input'),
		button: document.getElementById('search-button'),
	},
	filters: {
		status: document.getElementById('filter-status'),
		floor: document.getElementById('filter-floor'),
		square: document.getElementById('filter-square'),
		room: document.getElementById('filter-room'),
		
	}
} 
	
// Генерация карточек
function generateCards(data){
const cards = [];
for (let i=0; i < data.length; i++) {
cards.push(`
<div class="card">
				<img src="${data[i].img}" alt="" width="300" class="card-img">
			<div class="card_content">
				<h3 class="card_title">${data[i].title}</h3>
				<div class="card_description">Описание:</div>
				<div class="card_info">
					<div class="card-param">
						<label>Тип:</label>
						<div id="square">${data[i].params.square}</div>
					</div>
					
					<div class="card-param">
						<label>Этаж:</label>
						<div id="floor">${data[i].params.floor}</div>
					</div>
					
					
					<div class="card-param">
						<label>Комнат:</label>
						<div id="room">${data[i].params.room}</div>
					</div>
					
					<div class="card-param">
						<label>Статус:</label>
						<div id="status">${data[i].params.status}</div>
					</div>
				</div>

                
                <div class="card_address">
					<label>Адрес:</label>
					<div id="address">${data[i].address} </div>
				</div>

				<div class="card_cost">
					<label>Цена:</label>
					<div>${data[i].cost} ₽</div>
				</div>
<div class="card_address"><a href="card.html">Подробнее...</a></div>

			</div>
          </div>
`)
}	
return cards
}

const cardsArr = generateCards(cardsData)
domElements.results.innerHTML = cardsArr.join('')

// Поиск товаров
{
	let searchValue = ''
// Изменение значения поля поиска
	domElements.search.input.oninput = (event) => {
		searchValue = event.target.value
		filterSearch()
	}
// Клик по кнопке поиска
	domElements.search.button.onclick = () => {
		filterSearch()
	}
	
// Функция фильтрации найденных товаров
	function filterSearch() {
		const rgx = new RegExp(searchValue, 'i')
		let filteredCardsData = cardsData.filter(card => {
			if (rgx.test(card.title)) {
				return true
			} else {
				return false
			}
		})
		const newFilteredHTML = generateCards(filteredCardsData)
		domElements.results.innerHTML = newFilteredHTML.join('')
	}
}

// Фильтрация товаров
{

// Функция фильтрации по списку параметров
	function filterSelect(filterType) {
	domElements.filters[filterType].onchange = (event) => {
		const value = event.target.value
		const filteredCards = cardsData.filter(card => {
			const reg = new RegExp(value)
			if (reg.test(card.params[filterType])) {
				return true
			} else {
				return false
			}
		})
		const filteredCardsHTML = generateCards(filteredCards)
		domElements.results.innerHTML = filteredCardsHTML.join('')
	}	
	}
		const filtersType = [
		'square',
		'floor',
		'room',
		'status',
	]
//Отслеживание изменений фильтров и фильтрация
	filtersType.forEach(type => filterSelect(type))
}