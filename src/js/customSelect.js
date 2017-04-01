/**
 * Created by Denis on 01.04.2017.
 */
export default class CustomSelect {
    constructor() {

    }

    /**
     * Функция, которая находит все select-ы и заменяет их
     */
    render() {
        this.selectNodeList = document.querySelectorAll('.custom-select');
        let listArr = Array.from(this.selectNodeList);

        listArr.forEach(optionList => {
            let defaultVal = optionList.getAttribute("default");
            let id = optionList.getAttribute("id");
            let optionArr = Array.from(optionList);
            let newCSelect = this._createCSelect(id, defaultVal, optionArr);

            optionList.parentNode.replaceChild(newCSelect, optionList);
        })
    }

    /**
     * Создание кастомного select-а
     * @param id {string} id - идентифакатор элемента
     * @param {string} defaultVal - значение по умолчанию
     * @param {Array} optionArr - массив option-ов (элементов списка)
     * @return {Element}
     * @private
     */
    _createCSelect(id, defaultVal, optionArr) {
        /* Создание контейнера */
        let container = document.createElement('div');
        this._setAttrs({
            class: 'custom-select',
            id: id
        }, container);
        container.value = defaultVal;

        /* Создание отображения для текущего(выбранного) элемента*/
        let spanCurr = document.createElement('span');
        spanCurr.innerText = defaultVal;
        container.appendChild(spanCurr);

        /* Создание списка */
        let ul = document.createElement('ul');
        this._setAttrs({
            class: 'custom-select__list'
        }, ul);

        /* Наполняем список элементами */
        optionArr.forEach(option => {
            let li = document.createElement('li');
            this._setAttrs({
                class: 'list__elem'
            }, li);
            li.innerText = option.innerHTML;

            li.addEventListener('click', event => {
                event.stopPropagation();
                spanCurr.innerText = li.innerText;
                container.value = li.innerText;
            });

            ul.appendChild(li);
        });

        container.appendChild(ul);

        container.addEventListener('click', event => {
            container.classList.toggle('active');
        });
        return container;
    }

    /**
     * Метод, которые присваивает свойства элементу
     * @param {Object} attrs - объект с параметрами
     * @param {Element} elem - элемент к которому применяются свойства
     * @private
     */
    _setAttrs(attrs, elem) {
        Object.keys(attrs).forEach(name => {
            elem.setAttribute(name, attrs[name]);
        })
    }

}