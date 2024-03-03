
import {Transport} from "./transport";
import IOwner = Transport.IOwner;
import IVehicle = Transport.IVehicle;
import ICar = Transport.ICar;
import IMotorbike = Transport.IMotorbike;
import IVehicleStorage = Transport.IVehicleStorage;
import Car = Transport.Car;
import Motorbike = Transport.Motorbike;
import Owner = Transport.Owner;
import Vehicle = Transport.Vehicle;
import VehicleStorage = Transport.VehicleStorage;
import BodyType = Transport.BodyType;
import ClassOfCar = Transport.ClassOfCar;
const owner = new Owner("Иванов", "Иван", "Иванович",new Date(2004, 6, 9) , typeOfDocument.passport, 1234, 56789);
owner.ownerInfo();
const vehicle = new Vehicle("RAM", "3000", 2022, 456, 163, owner);
vehicle.vehicleInfo();
const newCar = new Car("RAM", "3000", 2022, 123456789,123, owner, BodyType.limusin, ClassOfCar.luxury);
newCar.vehicleInfo();
const newMotorbike = new Motorbike("Байк", "3000", 2023, 123456789,123, owner, "шпалера", true);
newMotorbike.vehicleInfo();
const carStorage = new VehicleStorage<Car>(new Date(), [newCar, newCar]);
console.log(carStorage.allValues());

const motorbikeStorage = new VehicleStorage<Motorbike>(new Date(), [newMotorbike, newMotorbike]);
console.log(motorbikeStorage.allValues());