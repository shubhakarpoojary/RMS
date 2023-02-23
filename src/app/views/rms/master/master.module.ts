import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterRoutingModule } from './master-routing.module';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { CustomFormsModule } from 'ngx-custom-validators';

import { SharedModule } from 'src/app/shared/shared.module';
import { TagInputModule } from 'ngx-chips';

import { ImageCropperModule } from 'ngx-img-cropper';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { FormWizardModule } from 'src/app/shared/components/form-wizard/form-wizard.module';
import { TextMaskModule } from 'angular2-text-mask';

import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { CreateUpdateEmployeeComponent } from './employee-info/create-update-employee/create-update-employee.component';

@NgModule({
  declarations: [
    EmployeeInfoComponent,
    CreateUpdateEmployeeComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    NgxDatatableModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    CustomFormsModule,
    SharedModule,
    TagInputModule,
    ImageCropperModule,
    SharedComponentsModule,
    FormWizardModule,
    TextMaskModule
  ]
})
export class MasterModule { }
