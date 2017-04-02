### Mini-framework для элементов **select**

#### Идея:
Фреймворк позволяет кастомизировать выпадающие списки **select** </br>
Он находит все select на странице и заменяет на кастомный
</br>
![Пример](./src/img/example.png)
## Использование:
##### Необходимые для подключения файлы:
###### CSS:
***/dist/css/customSelect.css***
######  JS:
***/dist/js/CustomSelect.min.js***
##### Образец написания select:
```html
<select id="testId" class="custom-select" default="Choose">
    <option>point 1</option>
    <option>point 2</option>
    <option>point 3</option>
</select>
```
**id** - необходим, если собираетесь доставать текущие значения
</br>
**class** - служит идентификатором для framework на замену этого select-а
</br>
**default** - значение по умолчанию
##### Для получения выбранного значени из списка:
```js
document.getElementById("element-id").value;
```
## Исходные файлы:
Файл с исходиками (**CustomSelect.js**) можно найти по пути: ***src/js*** </br>
Файл со стилями (**customSelect.css**) можно найти по пути ***src/css*** </br>
</br>

#### Для сборки проекта:
(! в одной консоли)
1. set NODE_ENV=production - если хотите минимизированный файл
2. npm run webpack
Файл соберется по пути ***/dist/js***
