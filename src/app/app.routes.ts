import { Routes, RouterModule } from '@angular/router';
import {PatientListComponent} from "./patient-list/patient-list.component";
import {PatientDetailComponent} from "./patient-detail/patient-detail.component";

const routes: Routes = [
                        
  // map '/patients' to the patient list component
  { path: 'patients', component: PatientListComponent, },
  
  
  // map '/patient/:id' to patient details component
  { path: 'patient/:id', component: PatientDetailComponent },
  
  
  // default route: map '/' to '/patients'
  { path: '', redirectTo: '/patients', pathMatch: 'full' },
  
];

export const routing = RouterModule.forRoot(routes);

