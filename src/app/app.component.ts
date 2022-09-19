import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Priority, Product, ToDoCard } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  modalRef!: BsModalRef;
  constructor(private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template)
  }

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
    `No importante - No urgente`,
    "Importante - No urgente",
    "No importante\nurgente",
    "Importante\nUrgente"
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
      name: "Estudiar Angular",
      priority: this.priorities[1],
      status: this.status[0],
      category: this.categories[3],
      comment: "Esta es una web para crear notitas de recordatorio de forma organizada"
    },
    {
      name: "Mi primera tarjeta",
      priority: this.priorities[0],
      status: this.status[0],
      category: this.categories[0],
      comment: "no poseo comentarios"
    },
    {
      name: "MySQL o MongoDB?",
      priority: this.priorities[0],
      status: this.status[1],
      category: this.categories[2],
      comment: "En el siguiente paso, estudiaré cómo integrar consultas de bases de datos a esta web"
    },
    {
      name: "Curso Platzi Angular",
      priority: this.priorities[2],
      status: this.status[2],
      category: this.categories[1],
      comment: "Mientras tanto, seguiré dándole con todo a Angular 👊"
    },
    {
      name: "Nunca Pares de Aprender",
      priority: this.priorities[3],
      status: this.status[3],
      category: this.categories[0],
      comment: "Primera fase del curso básico completado, seguimos y seguiremos por más ♥"
    },
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

  planificandoAPorHacer(index: number) {
    this.toDoCards[index].status = this.status[1];
  }

  porHacerAEnProgreso(index: number) {
    this.toDoCards[index].status = this.status[2];
  }

  enProgresoAFinalizado(index: number) {
    this.toDoCards[index].status = this.status[3];
  }

  porHacerAPlanificando(index: number) {
    this.toDoCards[index].status = this.status[0];
  }

  enProgresoAPorHacer(index: number) {
    this.toDoCards[index].status = this.status[1];
  }

  finalizadoAEnProgreso(index: number) {
    this.toDoCards[index].status = this.status[2];
  }

  alertConfirmDelete() {
    return confirm("¿Está seguro de eliminar la nota?")
  }

  deleteNotita(index: number) {
    this.alertConfirmDelete();
    if (this.alertConfirmDelete()) {
      window.location.href
      this.toDoCards.splice(index, 1)
    }
  }



}
