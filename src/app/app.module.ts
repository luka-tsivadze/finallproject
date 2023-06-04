import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HotelsComponent } from './components/hotels/hotels.component';

import { AutorithationComponent } from './components/autorithation/autorithation.component';
import { SignupComponent } from './components/signup/signup.component';
import { ToursComponent } from './components/tours/tours.component';
import { DestinationComponent } from './components/destination/destination.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { DetailsComponent } from './components/details/details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HotelsComponent,

    AutorithationComponent,
    SignupComponent,
    ToursComponent,
    DestinationComponent,
    ActivitiesComponent,
    DetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
