//1 . 
//Реализовать метод, возвращающий максимальное
//число из массива вещественных чисел 
//Одномерный массив
function max_element(a: number[]): number {
    let max_el: number = a[0];
    for (let i = 1; i < a.length; i++) {
        if (max_el < a[i]) max_el = a[i];
    }
    return max_el;
}
const array: number[] = [10.2, 3.4, 7.5];
console.log(max_element(array));

//Многомерный массив
//Реализовать метод, возвращающий флаг наличия хотя
//бы одного отрицательного числа в матрице целых чисел
function negative_element(a: number[][]): boolean {
    let flag: boolean = false;
    for (let row = 0; row < a.length; row++) {
        for (let col = 0; col < a[1].length; col++) {
            if (a[row][col] < 0) flag = true;
        }
        if (flag == true) break
    }
    return flag;
}
const array_2: number[][] = [[1, -2], [3, 4]];
console.log(negative_element(array_2));

//2
//Создайте кортеж, который может содержать только 3
//числовых значения
//Реализуйте метод, возвращающий сумму этих числовых значений.
function sum_tuple(t: [number, number, number]): number {
    return t[0] + t[1] + t[2];
}
let tuple: [number, number, number];
tuple = [1, 2, 3];
console.log(sum_tuple(tuple));

//3
//Создайте тип перечисление для типов мячей для
//различных видов спортивных игр. Выведите какой-либо тип мяча в
//консоль.
enum types_of_balls {
    football = "ball for football",
    basketball = "ball for basketball",
    tennis = "ball for tennis"
};
let ball: types_of_balls = types_of_balls.football;
console.log(ball);

//4
//Реализуйте метод, который будет выводить информацию в
//консоль о создаваемом объекте типа Cat или Dog, применяя
//Обобщенный тип, ограниченный типом Pet.
class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
        return "Miyau!";
    }
}

function output<T extends Pet>(pet: T): T{
    return pet;
}
let cat = new Cat();
let dog = new Dog();
console.log(output(cat));
console.log(output(dog));

//5
interface athlete{
    id:number;
    name:string;
    sport:string;
    ball: types_of_balls;
}

let man:athlete = {
    id:1,
    name: "Pit",
    sport: "tennis",
    ball: types_of_balls.tennis
}
let man_new = JSON.stringify(man);
console.log(man_new);
