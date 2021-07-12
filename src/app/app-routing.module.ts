import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddairlineComponent } from './admin/addairline/addairline.component';
import { AddflightComponent } from './admin/addflight/addflight.component';
import { ManageairlinesComponent } from './admin/manageairlines/manageairlines.component';
import { ManagescheduleComponent } from './admin/manageschedule/manageschedule.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookflightComponent } from './user/bookflight/bookflight.component';
import { BookinghistoryComponent } from './user/bookinghistory/bookinghistory.component';
import { ManagebookingsComponent } from './user/managebookings/managebookings.component';

const routes: Routes = [

{
  path:'admin/Addairline',
  component: AddairlineComponent
},
{
  path:'addflight',
  component: AddflightComponent
},
{
  path: 'manageairlines',
  component: ManageairlinesComponent
},
{
  path: 'manageschedules',
  component: ManagescheduleComponent
},
{
  path:'Navbar',
  component:NavbarComponent
},
{
  path:'bookflight',
  component:BookflightComponent
},
{
  path:'managebooking',
  component:ManagebookingsComponent
},
{
path:'bookinghistory',
component:BookinghistoryComponent
},
{
   path:'',
   component:LoginComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
