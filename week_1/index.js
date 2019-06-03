/** 
 * Реализовать такие методы работы над массивами
 */

/**
 * метод создает новый массив элементов, состоящий из элементов массива array за вычетом элементов массива itemsToExclude
 */
 function difference(arr, itemsToExclude) {
  return arr.filter(item => itemsToExclude.indexOf(item)<0)
 }

difference([2, 1, 5], [2, 3]);
// => [1, 5]

/**
 * метод принимает массив обьектов array и ключ value по которому нужно эти обьекты сгруппировать
 */
function groupBy(array, value) {
	return array.reduce((acc, item) => {
    const key = item[value];
    acc[key] = (acc[key] || []).concat(item);
    return acc;
  }, {});
}

groupBy([{ gender: 'male', name: 'Max'}, { gender: 'male', name: 'Fred'}, { gender: 'female', name: 'Jane'}], 'gender'); 
/**
 * => {
 *  male: [{ gender: 'male', name: 'Max'}, { gender: 'male', name: 'Fred'}],
 *  female: [{ gender: 'female', name: 'Jane'}]
 * }
 */

/**
 *  если метод принимет многомерный массив, он должен "сплюснуть" его на одно измерение 
 */
function flatten(array) {
  return array.toString().split(',').map(i => isNaN(i) ? i : parseInt(i));
}

flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]

flatten([1, 2, 3, 4, 5]);
// => [1, 2, 3, 4, 5]

flatten([1, [2, 3], 4, 5]);
// => [1, 2, 3, 4, 5]

/**
 * метод должен убрать все повторяющиеся элементы из массива
 */
function uniq(array) {
  return array.filter((item, index, arr) => arr.indexOf(item) === index)
}

uniq([2, 1, 2]);
// => [2, 1]

/**
 * 
 * метод должен собирать элементы массива в группы с заданным размером
 */
function chunk(array, size) {
  const newArr = [];
  let i = 0;
  while (i < array.length) {
    newArr.push(array.slice(i, i+size));
    i += size;
  }
  return newArr;
}

chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 
chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]