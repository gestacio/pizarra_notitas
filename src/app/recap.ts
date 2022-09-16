import { NgIfContext } from "@angular/common";

const username: string = 'gestacio';
const sum = (a: number, b: number): number => {
  return a + b;
}

sum(1, 2);

class Person {

  constructor(public age: number, public lastName: string) {}

}

const gabo = new Person(25, "Estacio");
gabo.age
