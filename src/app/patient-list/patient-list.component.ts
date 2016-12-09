import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Patient } from "../patient";
import { PatientServiceService } from "../patient-service.service";

/*
* @author  Jason Muse
* LinkedIn: https://www.linkedin.com/in/jason-muse-570a03110
* GitHub: https://github.com/tpajay
* Website: http://tpajay.com [coming soon with working applications]
*/
@Component({
  selector: 'patient-list',
  providers: [PatientServiceService], 
  templateUrl: './patient-list.component.html'
})

//Responsible for retrieving a list of Patients from the DB, via service,
//converting the JSON return string into Patient objects, and returning a Patient array.
export class PatientListComponent implements OnInit {
    
  patient: Patient[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private patientService : PatientServiceService){ }

  //subscribe method: myObservable.subscribe(myOnNext, myOnError, myOnComplete);
  //The Observable Contract: http://reactivex.io/documentation/contract.html
  //Reactor pattern: The reactor design pattern is an event handling pattern 
  //for handling service requests delivered concurrently to a service handler 
  //by one or more inputs.
  ngOnInit(){
    this.patientService
      .getPatients()
      .subscribe(
        patientsFromService => this.patient = patientsFromService,
        error => this.errorMessage = error,
        () => this.isLoading = false);
  }
  
  //the click event uses the current patient as the
  //method variable: onSelected(....)
  /*
  @Output() patientSelectedEventEmitter = new EventEmitter<Patient>();
  onSelected(patient: Patient) {
    alert(patient.nameFirst);
    this.patientSelectedEventEmitter.emit(patient);
  }
  */
  
} //end Class
