//2
let func = (a:string, b:number):string => {
    return a+b;
}
console.log(func("10",8));

//3
let a:string = "10";
const b:number = 8;
let c:boolean = true;
const d:any = "any";

//4
interface Entity {
    id: number;
}
interface ToJsonStringify extends Entity {
    name: string;
    surname?: string;
}
const data: ToJsonStringify = {
    id: 1,
    name: "Василий",
}

let data_new:string = JSON.stringify(data);
console.log(data_new);
