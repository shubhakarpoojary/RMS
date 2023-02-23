import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.scss']
})
export class EmployeeInfoComponent implements OnInit {
  products$;

  constructor(
    private productService: ProductService,
    public _router: Router,
  ) { }

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }

  createEmployee(){
    this._router.navigateByUrl('/master/employee-cud');
  }

}
