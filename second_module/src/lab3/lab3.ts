// //1
// enum typeOfDocument{
//     passport,
//     polic
// }

// interface IOwner{
//     lastName: string;
//     firstName: string;
//     patronymic: string;
//     dateOfBirth: Date;
//     document: typeOfDocument;
//     documentSeries: number;
//     documentNumber: number;

//     ownerInfo: () => void;
// }
// class Owner implements IOwner{
//     private _lastName: string;
//     private _firstName: string;
//     private _patronymic: string;
//     private _dateOfBirth: Date;
//     private _document: typeOfDocument;
//     private _documentSeries: number;
//     private _documentNumber: number;
//     ownerInfo(): void {
//         console.log( 'lastName: ' + this._lastName + '\n firstName: ' + this._firstName + '\n patronymic: ' + this._patronymic + '\n dateOfBirth: ' + this._dateOfBirth + '\n document: ' + this._document + '\n series: ' + this._documentSeries + '\n number: ' + this._documentNumber)
//     }
//     get lastName(): string {
//         return this._lastName;
//     }
//     set lastName(value: string) {
//         this._lastName = value;
//     }
//     get firstName(): string {
//         return this._firstName;
//     }
//     set firstName(value: string) {
//         this._firstName = value;
//     }
//     get patronymic(): string {
//         return this._patronymic;
//     }
//     set patronymic(value: string) {
//         this._patronymic = value;
//     }
//     get dateOfBirth(): Date {
//         return this._dateOfBirth;
//     }
//     set dateOfBirth(value: Date) {
//         this._dateOfBirth = value;
//     }
//     get document(): typeOfDocument {
//         return this._document;
//     }
//     set document(value: typeOfDocument) {
//         this._document = value;
//     }
//     get documentSeries(): number {
//         return this._documentSeries;
//     }
//     set documentSeries(value: number) {
//         this._documentSeries = value;
//     }
//     get documentNumber(): number {
//         return this._documentNumber;
//     }
//     set documentNumber(value: number) {
//         this._documentNumber = value;
//     }
//     constructor(lastName: string, firstName: string, patronymic: string, dateOfBirth: Date, document: typeOfDocument, documentSeries: number, documentNumber: number) {
//         this._lastName = lastName;
//         this._firstName = firstName;
//         this._patronymic = patronymic;
//         this._dateOfBirth = dateOfBirth;
//         this._document = document;
//         this._documentSeries = documentSeries;
//         this._documentNumber = documentNumber;
//     }
    
// }
// interface IVehicle{
//     mark: string;
//     model: string;
//     year: number;
//     vinNumber: number;
//     rNumber: number;
//     infoAboutOwner: Owner;
//     vehicleInfo: () => void;
// }

// class Vehicle implements IVehicle{
//     private _mark: string;
//     private _model: string;
//     private _year: number;
//     private _vinNumber: number;
//     private _rNumber: number;
//     private _infoAboutOwner: Owner;
//     vehicleInfo(): void {
//         console.log( 'mark: ' + this._mark + '\n model: ' + this._model + '\n year: ' + this._year + '\n VIN: ' + this._vinNumber + '\n RNum: ' + this._rNumber)
//     }
//     get mark(): string {
//         return this._mark;
//     }
//     set mark(value: string) {
//         this._mark = value;
//     }
//     get model(): string {
//         return this._model;
//     }
//     set model(value: string) {
//         this._model = value;
//     }
//     get year(): number {
//         return this._year;
//     }
//     set year(value: number) {
//         this._year = value;
//     }
//     get vinNumber (): number {
//         return this._vinNumber;
//     }
//     set vinNumber (value: number) {
//         this._vinNumber = value;
//     }
//     get rNumber(): number {
//         return this._rNumber;
//     }
//     set rNumber(value: number) {
//         this._rNumber = value;
//     }
//     get infoAboutOwner(): Owner {
//         return this._infoAboutOwner;
//     }
//     set infoAboutOwner(value: Owner) {
//         this._infoAboutOwner = value;
//     }
//     constructor(mark: string, model: string, year: number, vinNumber: number, rNumber: number, infoAboutOwner: Owner) {
//         this._mark = mark;
//         this._model = model;
//         this._year = year;
//         this._vinNumber = vinNumber;
//         this._rNumber = rNumber;
//         this._infoAboutOwner = infoAboutOwner
//     }
// }

// const owner = new Owner("Иванов", "Иван", "Иванович",new Date(2004, 6, 9) , typeOfDocument.passport, 1234, 56789);
// owner.ownerInfo();
// const vehicle = new Vehicle("RAM", "3000", 2022, 456, 163, owner);
// vehicle.vehicleInfo();

// //2
// enum BodyType{
//     sedan,
//     limusin
// }
// enum ClassOfCar{
//     econom,
//     luxury
// }
// interface ICar extends IVehicle{
//     bodyType: BodyType;
//     classOfCar: ClassOfCar;
// }

// class Car implements ICar{
//     mark: string;
//     model: string;
//     year: number;
//     vinNumber: number;
//     rNumber: number;
//     infoAboutOwner: Owner;
//     bodyType: BodyType;
//     classOfCar: ClassOfCar;
//     constructor(mark: string, model: string, year: number, vinNumber: number, rNumber: number, infoAboutOwner: Owner, bodyType: BodyType, classOfCar: ClassOfCar) {
//         this.mark = mark;
//         this.model = model;
//         this.year = year;
//         this.vinNumber = vinNumber;
//         this.rNumber = rNumber;
//         this.infoAboutOwner = infoAboutOwner
//         this.bodyType = bodyType;
//         this.classOfCar = classOfCar;
//     }
//     vehicleInfo(): void {
//         console.log( 'mark: ' + this.mark + '\n model: ' + this.model + '\n year: ' + this.year + '\n VIN: ' + this.vinNumber + '\n RNum: ' + this.rNumber + '\n BodyType: ' + this.bodyType + '\nClassCar: ' + this.classOfCar)
//     }
// }
// const newCar = new Car("RAM", "3000", 2022, 123456789,123,owner, BodyType.limusin, ClassOfCar.luxury);
// newCar.vehicleInfo();

// interface IMotorbike extends IVehicle
// {
//     frameType: string;
//     forSport: boolean;
// }
// class Motorbike implements IMotorbike{
//     frameType: string;
//     forSport: boolean;
//     mark: string;
//     model: string;
//     year: number;
//     vinNumber: number;
//     rNumber: number;
//     infoAboutOwner: Owner;
//     constructor(mark: string, model: string, year: number, vinNumber: number, rNumber: number, infoAboutOwner: Owner, frameType: string, forSport: boolean) {
//         this.mark = mark;
//         this.model = model;
//         this.year = year;
//         this.vinNumber = vinNumber;
//         this.rNumber = rNumber;
//         this.infoAboutOwner = infoAboutOwner
//         this.forSport = forSport;
//         this.frameType = frameType;
//     }
//     vehicleInfo(): void {
//         console.log( 'mark: ' + this.mark + '\n model: ' + this.model + '\n year: ' + this.year + '\n VIN: ' + this.vinNumber + '\n RNum: ' + this.rNumber + '\n FrameType: ' + this.frameType+ '\nForSport: ' + this.forSport)
//     }
// }
// const newMotorbike = new Motorbike("Байк", "3000", 2023, 123456789,123, owner, "шпалера", true);
// newMotorbike.vehicleInfo();

// //3
// interface IVehicleStorage<T extends IVehicle>
// {
//     creationDate: Date;
//     vehicles: T[];
//     allValues(): T[];
// }
// class VehicleStorage<T extends IVehicle> implements IVehicleStorage<T>
// {
//     creationDate: Date;
//     vehicles: T[];

//     constructor(creationDate: Date, vehicles: T[])
//     {
//         this.creationDate = creationDate;
//         this.vehicles = vehicles;
//     }

//     allValues(): T[]
//     {
//         return this.vehicles;
//     }
// }
// const carStorage = new VehicleStorage<Car>(new Date(), [newCar, newCar]);
// console.log(carStorage.allValues());

// const motorbikeStorage = new VehicleStorage<Motorbike>(new Date(), [newMotorbike, newMotorbike]);
// console.log(motorbikeStorage.allValues());