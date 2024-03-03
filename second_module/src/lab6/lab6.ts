//из лр 3
enum typeOfDocument {
    passport,
    polic
}

interface IOwner {
    lastName: string;
    firstName: string;
    patronymic: string;
    dateOfBirth: Date;
    document: typeOfDocument;
    documentSeries: number;
    documentNumber: number;

    ownerInfo: () => void;
}
class Owner implements IOwner {
    private _lastName: string;
    private _firstName: string;
    private _patronymic: string;
    private _dateOfBirth: Date;
    private _document: typeOfDocument;
    private _documentSeries: number;
    private _documentNumber: number;
    ownerInfo(): void {
        console.log('lastName: ' + this._lastName + '\n firstName: ' + this._firstName + '\n patronymic: ' + this._patronymic + '\n dateOfBirth: ' + this._dateOfBirth + '\n document: ' + this._document + '\n series: ' + this._documentSeries + '\n number: ' + this._documentNumber)
    }
    get lastName(): string {
        return this._lastName;
    }
    set lastName(value: string) {
        this._lastName = value;
    }
    get firstName(): string {
        return this._firstName;
    }
    set firstName(value: string) {
        this._firstName = value;
    }
    get patronymic(): string {
        return this._patronymic;
    }
    set patronymic(value: string) {
        this._patronymic = value;
    }
    get dateOfBirth(): Date {
        return this._dateOfBirth;
    }
    set dateOfBirth(value: Date) {
        this._dateOfBirth = value;
    }
    get document(): typeOfDocument {
        return this._document;
    }
    set document(value: typeOfDocument) {
        this._document = value;
    }
    get documentSeries(): number {
        return this._documentSeries;
    }
    set documentSeries(value: number) {
        this._documentSeries = value;
    }
    get documentNumber(): number {
        return this._documentNumber;
    }
    set documentNumber(value: number) {
        this._documentNumber = value;
    }
    constructor(lastName: string, firstName: string, patronymic: string, dateOfBirth: Date, document: typeOfDocument, documentSeries: number, documentNumber: number) {
        this._lastName = lastName;
        this._firstName = firstName;
        this._patronymic = patronymic;
        this._dateOfBirth = dateOfBirth;
        this._document = document;
        this._documentSeries = documentSeries;
        this._documentNumber = documentNumber;
    }

}
interface IVehicle {
    mark: string;
    model: string;
    year: number;
    vinNumber: number;
    rNumber: number;
    infoAboutOwner: Owner;
    vehicleInfo: () => void;
}

const owner = new Owner("Иванов", "Иван", "Иванович", new Date(2004, 6, 9), typeOfDocument.passport, 1234, 56789);
enum BodyType {
    sedan,
    limusin
}
enum ClassOfCar {
    econom,
    luxury
}
interface ICar extends IVehicle {
    bodyType: BodyType;
    classOfCar: ClassOfCar;
}



//лр6
//@block
class Car implements ICar {
    mark: string;
    model: string;
    year: number;
    vinNumber: number;
    rNumber: number;
    infoAboutOwner: Owner;
    bodyType: BodyType;
    classOfCar: ClassOfCar;
    constructor(mark: string, model: string, year: number, vinNumber: number, rNumber: number, infoAboutOwner: Owner, bodyType: BodyType, classOfCar: ClassOfCar) {
        this.mark = mark;
        this.model = model;
        this.year = year;
        this.vinNumber = vinNumber;
        this.rNumber = rNumber;
        this.infoAboutOwner = infoAboutOwner
        this.bodyType = bodyType;
        this.classOfCar = classOfCar;
    }
    @toUp
    vehicleInfo(): void {
        console.log('mark: ' + this.mark + '\n model: ' + this.model + '\n year: ' + this.year + '\n VIN: ' + this.vinNumber + '\n RNum: ' + this.rNumber + '\n BodyType: ' + this.bodyType + '\nClassCar: ' + this.classOfCar)
    }
}
function block(constructor: Function){
    Object.freeze(constructor);//предотвращает добавление новых свойств, удаление старых и изменение существующих
    Object.freeze(constructor.prototype);
}
Object.defineProperty(Car, 'color', {value: 'red'});

//2
function toUp(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {

    var originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(('mark: ' + this.mark + '\n model: ' + this.model + '\n year: ' + this.year + '\n VIN: ' + this.vinNumber + '\n RNum: ' + this.rNumber + '\n BodyType: ' + this.bodyType + '\nClassCar: ' + this.classOfCar).toUpperCase());
    }
}
let newCar = new Car("ram", "cd4rmt", 2022, 123456789, 123, owner, BodyType.limusin, ClassOfCar.luxury);
newCar.vehicleInfo();