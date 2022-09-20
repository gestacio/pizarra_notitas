import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Priority, Product, ToDoCard } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  modalRef!: BsModalRef;
  constructor(private modalService: BsModalService,) { }

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
      comment: "No poseo comentarios"
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

  recycleBin: ToDoCard[] = []

  index: number = 0;
  selectedNotita = this.toDoCards[this.index];

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

  replaceIndex(index: number, template: TemplateRef<any>) {
    this.index = index;
    this.openModal(template)
  }

  confirmRequiredInputs() {
    if (!this.selectedName) {
      alert("Nombre de la nota es requerido")
      return false
    }

    if (!this.selectedPriority) {
      alert("Prioridad de la nota es requerido");
      return false;
    }

    if (!this.selectedStatus) {
      alert("Estado de la nota es requerido");
      return false;
    }

    if (!this.selectedCategory) {
      alert("Categoría de la nota es requerido");
      return false;
    }

    return true;
  }

  addNotita() {
    if (this.confirmRequiredInputs()) {
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
      this.modalRef.hide();
    }
  }

  editNotita() {
    if (this.confirmRequiredInputs()) {
      this.toDoCards[this.index].name = this.selectedName
      this.toDoCards[this.index].priority = this.selectedPriority,
        this.toDoCards[this.index].status = this.selectedStatus,
        this.toDoCards[this.index].category = this.selectedCategory,
        this.toDoCards[this.index].comment = this.selectedComment,

        this.selectedName = '';
      this.selectedPriority = '';
      this.selectedStatus = '';
      this.selectedCategory = '';
      this.selectedComment = '';
      this.modalRef.hide()
    }
  }

  recycleNotita() {

    this.recycleBin.push({
      name: this.toDoCards[this.index].name,
      priority: this.toDoCards[this.index].priority,
      status: this.toDoCards[this.index].status,
      category: this.toDoCards[this.index].category,
      comment: this.toDoCards[this.index].comment,
    })

    this.selectedName = '';
    this.selectedPriority = '';
    this.selectedStatus = '';
    this.selectedCategory = '';
    this.selectedComment = '';
    this.modalRef.hide();

    this.toDoCards.splice(this.index, 1)
    console.log(this.recycleBin[0].name);

  }

  restoreNotita() {
    this.toDoCards.push({
      name: this.recycleBin[this.index].name,
      priority: this.recycleBin[this.index].priority,
      status: this.recycleBin[this.index].status,
      category: this.recycleBin[this.index].category,
      comment: this.recycleBin[this.index].comment,
    })

    this.selectedName = '';
    this.selectedPriority = '';
    this.selectedStatus = '';
    this.selectedCategory = '';
    this.selectedComment = '';
    this.modalRef.hide();

    this.recycleBin.splice(this.index, 1)
  }

  deleteNotita() {
    this.recycleBin.splice(this.index, 1)
    this.modalRef.hide();
  }

}
