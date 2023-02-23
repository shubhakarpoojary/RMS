import { Component, OnInit } from '@angular/core';
import { CustomValidators } from 'ngx-custom-validators';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-update-employee',
  templateUrl: './create-update-employee.component.html',
  styleUrls: ['./create-update-employee.component.scss']
})
export class CreateUpdateEmployeeComponent implements OnInit {

  formBasic: FormGroup;
  loading: boolean;


  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    public _router: Router,
  ) { }

  ngOnInit() {
    this.buildFormBasic();
  }

  buildFormBasic() {
    this.formBasic = this.fb.group({
      experience: []
    });
  }

  submit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.toastr.success('Employee Profile created.', 'Success!', {progressBar: true});
      this._router.navigateByUrl('/master/employee-cud');
    }, 3000);
  }

  clearForm(){
    
  }
  cancelPage(){
    this._router.navigateByUrl('/master/employee-cud');
  }
}
