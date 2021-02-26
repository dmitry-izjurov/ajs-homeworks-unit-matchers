import getSortUnits from '../basic';

test('Массив должен быть отсортирован', () => {
  let unit = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ];

  expect(getSortUnits(unit)).toEqual([
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ]);
});

test('Массив должен быть отсортирован', () => {
  let unit = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 60},
    {name: 'маг', health: 90},
    {name: 'лучник', health: 20},
  ];

  expect(getSortUnits(unit)).toEqual([
    {name: 'маг', health: 100},
    {name: 'маг', health: 90},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 60},
    {name: 'лучник', health: 20},
    {name: 'мечник', health: 10},
  ]);
});

test('Массив должен быть отсортирован', () => {
  let unit = [
    {name: 'мечник'},
    {name: 'маг'},
    {name: 'лучник', health: 80},
  ];

  expect(getSortUnits(unit)).toEqual(
    [{name: 'лучник', health: 80}],
  );
});

test('Массив не должен быть отсортирован', () => {
  let unit = [];

  expect(getSortUnits(unit)).toEqual(null);
});

test('Массив не должен быть отсортирован', () => {
  let unit = [
    {name: 'мечник'},
    {name: 'маг'},
    {name: 'лучник'},
  ];

  expect(getSortUnits(unit)).toEqual(null);
});

test('Функция не должна обрабатываться', () => {
  let unit;

  expect(getSortUnits(unit)).toBeUndefined();
});

test('Массив не должен быть отсортирован', () => {
  let unit = [
    {name: 'мечник', health: true},
    {name: 'маг', health: [1, 2, 3]},
    {name: 'лучник', health: '1'},
  ];

  expect(getSortUnits(unit)).toEqual(null);
});

test('Массив  должен быть отсортирован', () => {
  let unit = [
    {name: 'мечник', health: true},
    {name: 'маг', health: [1, 2, 3]},
    {name: 'лучник', health: '1'},
    {name: 'мечник', health: 45},
  ];

  expect(getSortUnits(unit)).toEqual([
    {name: 'мечник', health: 45}
  ]);
});