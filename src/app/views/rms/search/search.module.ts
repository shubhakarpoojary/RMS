import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobComponent } from './job/job.component';
import { SeacrhRoutingModule } from './search-routing.module';



@NgModule({
  declarations: [
    JobComponent
  ],
  imports: [
    CommonModule,
    SeacrhRoutingModule
  ]
})
export class SearchModule { }
