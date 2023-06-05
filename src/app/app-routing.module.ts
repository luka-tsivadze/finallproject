import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { AutorithationComponent } from './components/autorithation/autorithation.component';
import { SignupComponent } from './components/signup/signup.component';

import { ToursComponent } from './components/tours/tours.component';
import { DestinationComponent } from './components/destination/destination.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { DetailsComponent } from './components/details/details.component';
import { ReactiveFormsModule } from '@angular/forms';



const routes: Routes = [
  {path:''  , component:HomeComponent},
  {path:'home'  , component:HomeComponent},

  {path:'log-in', component:AutorithationComponent },
  {path:'sign-up', component:SignupComponent},

  {path:'tour', component:ToursComponent },
  {path:'destinations',  component:DestinationComponent },
  {path:'home/destinations',  component:DestinationComponent },
  {path:'activities',  component:ActivitiesComponent },
  {path:'destinations/:id', component:DetailsComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
[RouterModule.forRoot(routes)],
   
  
  ],
  exports: [RouterModule],

})
export class AppRoutingModule { }
