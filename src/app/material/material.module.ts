import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule,
MatFormFieldModule,
MatInputModule,
MatSelectModule,
MatButtonModule,
MatSnackBarModule,
MatProgressSpinnerModule,
MatIconModule,
MatCheckboxModule,
MatMenuModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatCheckboxModule,
    MatMenuModule
  ],
  exports: [
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatCheckboxModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
