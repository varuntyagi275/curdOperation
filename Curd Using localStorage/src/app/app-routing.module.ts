import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'addEmployee/:id',
  loadChildren:()=>import('../app/add-employee/add-employee.module').then(m=>m.AddEmployeeModule),
  pathMatch:'full',
  },
  {path:'addEmployee',
  loadChildren:()=>import('../app/add-employee/add-employee.module').then(m=>m.AddEmployeeModule)
},

{path:'listEmployee',
loadChildren:()=>import('../app/list-employee/list-employee.module').then(n=>n.ListEmployeeModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
