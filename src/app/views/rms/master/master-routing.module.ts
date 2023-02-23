import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { CreateUpdateEmployeeComponent } from './employee-info/create-update-employee/create-update-employee.component';


const routes: Routes = [
  {
    path: 'employee-info',
    component: EmployeeInfoComponent
  },
  {
    path: 'employee-cud',
    component: CreateUpdateEmployeeComponent
  },
  {
    path: 'employee-cud/:employeeID',
    component: CreateUpdateEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
