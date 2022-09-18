import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from './modal/modal.component';


const routes: Routes = [
  { path: 'modal', component: ModalComponent },
  { path: '**', pathMatch:'full', redirectTo:'modal' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
