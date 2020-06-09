import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NotePopUpComponent } from '../note-pop-up/note-pop-up.component';
import {CommonServiceService} from '../common-service.service';
@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  notes;
  constructor(public dialog: MatDialog,
    private backend: CommonServiceService) { }

  ngOnInit() {
    this.backend.Getnotes().subscribe(res=> {
      this.notes=res});
  }

  openDialog() {
    const dialogRef = this.dialog.open(NotePopUpComponent, {
      width: '350px',
      // height:'300px'
    });

    dialogRef.afterClosed().subscribe(
      result => {
        if (result.status) {
          this.backend.Getnotes().subscribe(res=> {
          this.notes = res;
          })
        }
      }

);

  }

}
