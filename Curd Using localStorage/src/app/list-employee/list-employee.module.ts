import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ListEmployeeComponent }
];

@NgModule({
  declarations: [ListEmployeeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ListEmployeeModule { }
