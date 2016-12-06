import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';
import { Patient } from "../patient";
import { PatientServiceService } from "../patient-service.service";

@Component({
  selector: 'patient-details', 
  providers: [PatientServiceService], 
  templateUrl: './patient-detail.component.html'
})

//Responsible for retrieving a single Patient details from the DB, via service,
//converting the JSON return string into a Patient object, and returning Patient object.
export class PatientDetailComponent implements OnInit, OnDestroy {
  patient: Patient;
  subscriber: any;
  professions: string[] = ['jedi', 'bounty hunter', 'princess', 'sith lord'];

  constructor(private patientService: PatientServiceService,
              private route: ActivatedRoute,
              private router: Router){
  }

  //subscribe method: myObservable.subscribe(myOnNext, myOnError, myOnComplete);
  //The Observable Contract: http://reactivex.io/documentation/contract.html
  //Reactor pattern: The reactor design pattern is an event handling pattern 
  //for handling service requests delivered concurrently to a service handler 
  //by one or more inputs.
  ngOnInit(){
    this.subscriber = 
        this.route.params
          .subscribe(params => {
              let id = Number.parseInt(params['id']);
              console.log('Retrieving Patient ID: ', id);
              this.patientService
                 .getPatientById(id).subscribe(p => this.patient = p);
          });
  }

  ngOnDestroy(){
    this.subscriber.unsubscribe();
  }

  loadPatientList(){
    let link = ['/patients'];
    this.router.navigate(link);
  }

  savePatientDetails(){
    this.patientService.savePatientDetails(this.patient)
        .subscribe((r: Response) => {console.log('success');}
      );
  }
  
} //end Class
