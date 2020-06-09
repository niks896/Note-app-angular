import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {CommonServiceService} from '../common-service.service';
import {AuthService} from '../auth.service';
import {Router, ActivatedRoute} from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userdata: FormGroup;
  constructor(private router: Router,
              private AuthService: AuthService,
              private FormBuilder: FormBuilder,
              private CommonServiceService: CommonServiceService,
              private snackbar: MatSnackBar,
              private routes: ActivatedRoute
              )  {
    this.userdata = this.FormBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.minLength(6), Validators.required]],
    });
  }
hide = true;
  ngOnInit() {
  }

  onSubmit() {
    this.CommonServiceService.Authenticate({username: this.userdata.value.username, password: this.userdata.value.password}).subscribe(
      res => {
        sessionStorage.setItem('status', String(res));
        if (!this.AuthService.isloggedin()) {
                const config = new MatSnackBarConfig();
                config.duration = 3000;
                this.snackbar.open('username or password is incorrect', ' ', config);
              }
        this.router.navigate(['admin']);
      });
  }
}
