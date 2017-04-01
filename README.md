#### Mini-framework для элементов **select**

##### Идея:
Фреймворк позволяет кастомизировать выпадающие списки **select** </br>
Он находит все select на странице и заменяет на кастомный
![Пример](./src/img/example.png)
##### Использование:
Файл с исходиками (**customSelect.js**) можно найти по пути: ***src/js*** </br>
Файл со стилями (**customSelect.css**) можно найти по пути ***src/css*** </br>
</br>
###### Заменяет все элементы select:
```js
new CustomSelect().render();
```
###### Для получения выбранного значени из списка:
```js
document.getElementById("element-id").value;
```
</br>
###### Образец написания select:
`<select id="testId" class="custom-select" default="Choose">
    <option>point 1</option>
    <option>point 2</option>
    <option>point 3</option>
</select>`
</br>
**id** - необходим, если собираетесь доставать текущие значения
</br>
**class** - служит идентификатором для framework на замену этого select-а
</br>
**default** - значение по умолчанию
##### Для сборки проекта (localhost:3000):
npm run webpack
npm run start


