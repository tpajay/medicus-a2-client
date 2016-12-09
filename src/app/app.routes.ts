import { Routes, RouterModule } from '@angular/router';
import {PatientListComponent} from "./patient-list/patient-list.component";
import {PatientDetailComponent} from "./patient-detail/patient-detail.component";

const routes: Routes = [
                        
  { path: 'patients', component: PatientListComponent, }, //patients
  { path: 'patient/:id', component: PatientDetailComponent },  //patient/id
  { path: '', redirectTo: '/patients', pathMatch: 'full' } //default
  //{ path: '', redirectTo: '/index.html', pathMatch: 'full' } //default
  
  //example
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  //{ path: 'home', component: HomeComponent },
  
];

export const routing = RouterModule.forRoot(routes);

