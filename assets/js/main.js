import { carModel } from "./modules/carmodel/car.model.js";

const car = new carModel();
console.log(await car.list());
