import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Router, RouteConfigLoadStart, ResolveStart, RouteConfigLoadEnd, ResolveEnd } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RmsServiceService } from '../../rms-service.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
    animations: [SharedAnimations]
})
export class SigninComponent implements OnInit {
    loading: boolean;
    loadingText: string;
    signinForm: FormGroup;
    constructor(
        private fb: FormBuilder,
        private auth: AuthService,
        private router: Router,
        public http: HttpClient,
        private rmsService: RmsServiceService,
    ) { }

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof RouteConfigLoadStart || event instanceof ResolveStart) {
                this.loadingText = 'Loading Dashboard Module...';

                this.loading = true;
            }
            if (event instanceof RouteConfigLoadEnd || event instanceof ResolveEnd) {
                this.loading = false;
            }
        });

        this.signinForm = this.fb.group({
            userId: [0,],
            userType: ['Login', Validators.required],
            userName: ['vipindas@radiants.com', Validators.required],
            password: ['test@123', Validators.required],
            companyName: ['RAD', Validators.required],

        });
    }

    signin() {
        if (this.signinForm.valid) {
            this.loading = true;
            this.loadingText = 'Sigining in...';

            const val = this.signinForm.getRawValue();

            if (val.userName == "vipindas@radiants.com" && val.password == "test@123") {
                this.rmsService.commonAlert('', 'success', 'Confirmation', "Logged In Successfully!");
                this.auth.signin(this.signinForm.value)
                .subscribe(res => {
                    console.log("result", res)
                    localStorage.setItem('currentUser', JSON.stringify("[{'userId': 1,'userType': 'Login', 'userName': 'vipindas@radiants.comss','password': 'test@123','companyName': 'RAD','token':'123'}]"));
                    this.router.navigateByUrl('/dashboard/v1');
                    this.loading = false;
                });
            }
            else {

                this.rmsService.commonAlert('', 'error', 'Error', "Wrong Credentails!");
            }


            let url = environment.endpoint + 'api/Token';
            this.http.post(url, val).toPromise().then(data => {
                this.auth.signin(this.signinForm.value)
                    .subscribe(res => {
                        console.log("result", res)
                        localStorage.setItem('currentUser', JSON.stringify(res));
                        this.router.navigateByUrl('/dashboard/v1');
                        this.loading = false;
                    })
            }, error => {
                console.log("Error", error);
                this.loading = false;
                this.loadingText = "";
            });
        }
    }




}
