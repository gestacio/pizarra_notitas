import { Component } from '@angular/core';
import { Priority, Product, ToDoCard } from './product.model';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
export class AppComponent {
  name = 'Gabriel';
  age = 25;
  img = "https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/301998180_5755191261158931_7184967016156864645_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Rwc84uAw6HUAX9IN3ZC&_nc_ht=scontent-mia3-1.xx&oh=00_AT8Q0ey7orQTr49nJJpsBTLmSSK-583gTqjiT3z2Fo3PwQ&oe=6327DFA2"
  btnDisabled = true;
  person = {
    name: 'Gabriel',
    age: 25,
    avatar: "https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/301998180_5755191261158931_7184967016156864645_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Rwc84uAw6HUAX9IN3ZC&_nc_ht=scontent-mia3-1.xx&oh=00_AT8Q0ey7orQTr49nJJpsBTLmSSK-583gTqjiT3z2Fo3PwQ&oe=6327DFA2"
  }



  selectedName: string = '';
  selectedPriority: string = '';
  selectedStatus: string = '';
  selectedCategory: string = '';
  selectedComment: string = '';

  priorities: string[] = [
    "No importante - No urgente",
    "Importante - No urgente",
    "No importante - urgente",
    "Importante - Urgente"
  ]

  status: string[] = [
    "Planificando",
    "Por hacer",
    "En progreso",
    "Finalizado"
  ]

  categories: string[] = [
    "Casa",
    "Trabajo",
    "Universidad",
    "Hobby"
  ]



  toDoCards: ToDoCard[] = [
    {
      name: "Mi primera tarjeta",
      priority: "Nada Alarmante",
      status: "Planificando",
      category: "Planificando",
      comment: "no poseo comentarios"
    },
    {
      name: "Mi primera tarjeta",
      priority: "Nada Alarmante",
      status: "Planificando",
      category: "Planificando",
      comment: "no poseo comentarios"
    },
    {
      name: "Mi primera tarjeta",
      priority: "Nada Alarmante",
      status: "Por hacer",
      category: "Por hacer",
      comment: "no poseo comentarios"
    },
    {
      name: "Mi primera tarjeta",
      priority: "Nada Alarmante",
      status: "En progreso",
      category: "En progreso",
      comment: "no poseo comentarios"
    },
    {
      name: "Mi primera tarjeta",
      priority: "Nada Alarmante",
      status: "Finalizado",
      category: "De flojera",
      comment: "no poseo comentarios"
    },
  ]

  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.webp',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleci??n de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.webp'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.webp'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  toggleButton() {
    this.btnDisabled = !this.btnDisabled
  }

  increaseAge() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  // addName() {
  //   this.names.push(this.newName);
  //   this.newName = '';
  // }

  // deleteName(index: number) {
  //   this.names.splice(index, 1);
  // }

  alert(arg: string) {
    alert(arg);
  }

  addToDoCard() {
    this.toDoCards.push({
      name: this.selectedName,
      priority: this.selectedPriority,
      status: this.selectedStatus,
      category: this.selectedCategory,
      comment: this.selectedComment,
    })

    this.selectedName = '';
    this.selectedPriority = '';
    this.selectedStatus = '';
    this.selectedCategory = '';
    this.selectedComment = '';
  }
}
