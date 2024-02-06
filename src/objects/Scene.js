import { Group } from "three";
import Pie from "./Pie/Pie.js";
import BasicLights from "./Lights.js";

export default class SeedScene extends Group {
  constructor() {
    super();

    const lights = new BasicLights();
    const pie = new Pie();

    this.add(lights, pie);
  }

  update(timeStamp) {
    this.rotation.y = timeStamp / 10000;
  }
}
