import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private routes: Router) { }
  notes = ['hshshshshdhdhdhdhdhdhdhhdhdhdhdsdasdsd  dfjdksdsdskjskdk', 'shshssdfdfjdjsdsdsjdsjdsjdsjdsjdjfjdfdfjdfjdjfjdfjhshs', 'skdfhskjfhdsjf','sjdhfjsdhfjshfdsj','sjfdjsfsjhfdsdjjjdjdjd','hdhdhdhdhdhdhdhd','akslsaklasaskskals'];
  ngOnInit() {
  }
  exit() {
  this.routes.navigate(['\login']);
}
navigate(val){
console.log(val)
if(val =='travel'){
  this.routes.navigate(['admin/travel'] );
}
}

}
