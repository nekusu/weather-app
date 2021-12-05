class UI {
	static searchForm = document.querySelector('#search-form');

	static unitsToggle = document.querySelector('#units-toggle');

	static selectedUnits = localStorage.getItem('units') || 'metric';

	static toggleUnits() {
		this.classList.toggle('metric');
		this.classList.toggle('imperial');
		UI.selectedUnits = this.className;
		localStorage.setItem('units', UI.selectedUnits);
	}
}

UI.unitsToggle.className = UI.selectedUnits;
UI.unitsToggle.addEventListener('click', UI.toggleUnits);

export default UI;
