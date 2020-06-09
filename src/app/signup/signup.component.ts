import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { v1 as uuid } from "uuid";
import { CommonServiceService } from "../common-service.service";
import { MatSnackBar } from '@angular/material';
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  signup: FormGroup;
  hide = true;
  uuid;
  constructor(
    private location: Location,
    private router: Router,
    private fb: FormBuilder,
    private commonService: CommonServiceService,
    private snackbar: MatSnackBar,
  ) {
    this.signup = fb.group({
      fname: ["", Validators.required],
      lname: ["", Validators.required],
      uname: [
        "",
        [Validators.minLength(4), Validators.maxLength(8), Validators.required],
      ],
      pass: [
        "",
        [Validators.minLength(4), Validators.maxLength(8), Validators.required],
      ],
    });
  }
  ngOnInit() {}
  cancel() {
    this.location.back();
  }
  onSubmit() {
    var profile = { ...this.signup.value, ...{ uuid: uuid() } };
    this.commonService.save(profile).subscribe((res) => {
      if (res) {
        this.snackbar.open('profile saved successfully', ' ', {duration: 3000} );
        this.router.navigate(['/login']);
      }
    });
  }
}
