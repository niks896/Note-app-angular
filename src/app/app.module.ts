import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeatmapComponent } from './heatmap/heatmap.component';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule} from '../app/material/material.module';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {  MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SignupComponent } from './signup/signup.component';
import { TravelComponent } from './travel/travel.component';
import { PersonalComponent } from './personal/personal.component';
import { LifeComponent } from './life/life.component';
import { NocategoryComponent } from './nocategory/nocategory.component';
import { NotePopUpComponent } from './note-pop-up/note-pop-up.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeatmapComponent,
    LoginComponent,
    AdminComponent,
    SignupComponent,
    TravelComponent,
    PersonalComponent,
    LifeComponent,
    NocategoryComponent,
    NotePopUpComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  providers: [ ],
  bootstrap: [AppComponent],
  entryComponents: [NotePopUpComponent]
})
export class AppModule { }
