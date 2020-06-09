import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonServiceService } from '../common-service.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TravelComponent } from '../travel/travel.component';

@Component({
  selector: 'app-note-pop-up',
  templateUrl: './note-pop-up.component.html',
  styleUrls: ['./note-pop-up.component.css']
})
export class NotePopUpComponent implements OnInit {
  noteform: FormGroup;
  currentDate;
  constructor(public fb : FormBuilder,
    private backend: CommonServiceService,
    public dialogRef: MatDialogRef<NotePopUpComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {
    this.noteform = fb.group({
      title: ['',[Validators.required]],
      notes: [''],
    });
    this.currentDate = new Date().toLocaleDateString('en-US');

  }

  ngOnInit() {
  }

  Submitdata() {
    const date = {date: this.currentDate }
    const groupdata = {...this.noteform.value, ...date};
    this.backend.Savenotes(groupdata).subscribe(res=>{
      if(res){
        this.dialogRef.close({status: true});
      }else{
        this.dialogRef.close({status: false});
      }});
  }
}
