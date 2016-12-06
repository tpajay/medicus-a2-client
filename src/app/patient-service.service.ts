import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Patient } from "./patient";

//Patient Service is responsible for retrieving Patients
//a Spring framework REST URI's and Hibernate DB calls.
//The URI's return JSON data (Spring is using Jackson API for JSON)
//and returning Patient object(s).

@Injectable()
export class PatientServiceService {

    private baseUrl: string = 'http://localhost:8080/Medicus';

    constructor(private http : Http){
    }
    
    //retrieve all patients from REST/DB as JSON
    //return as array of Patients
    getPatients(): Observable<Patient[]>{
      let patient$ = this.http
        .get(`${this.baseUrl}/patients`, {headers: this.getHeaders()})
        .map((res:Response) => res.json())
        .catch(errorHandler);      
      return patient$;
    }
    
    //return a single patient details via REST as JSON
    //return Patient object
    getPatientById(id: number): Observable<Patient> {
      let patient$ = this.http
        .get(`${this.baseUrl}/patient/${id}`, {headers: this.getHeaders()})
        .map((res:Response) => res.json());
      return patient$;
    }
    
    //method to submit and add a patient via Angular and REST
    savePatientDetails(patient: Patient) : Observable<Response>{
      return this.http
        .put(`${this.baseUrl}/patient/${patient.patientId}`, JSON.stringify(patient), {headers: this.getHeaders()});
    }
    
    private getHeaders(){
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      return headers;
    }

} //end Class

function errorHandler (error: any) {
    let errorMsg = error.message || `Server Error.  Make sure Medicus application is running.`
    console.error(errorMsg);
    return Observable.throw(errorMsg);
}

function toPatient(r:any): Patient {
    let patient = <Patient>({
        patientId: r.patientId,
        dueDttm: r.dueDttm,
        namePrefix: r.namePrefix,
        nameFirst: r.nameFirst,
        nameMiddle: r.nameMiddle,
        nameLast: r.nameLast,
        nameSuffix: r.nameSuffix,
        homeStreetAddr1: r.homeStreetAddr1,
        homeStreetAddr2: r.homeStreetAddr2,
        homeCity: r.homeCity,
        homeState: r.homeState,
        homeZipcode: r.homeZipcode,
        workStreetAddr1: r.workStreetAddr1,
        workStreetAddr2: r.workStreetAddr2,
        workCity: r.workCity,
        workState: r.workState,
        workZipcode: r.workZipcode,
        country: r.country,
        ssn: r.ssn,
        acctNo: r.acctNo,
        phoneHome: r.phoneHome,
        phoneWork: r.phoneWork,
        phoneMobile: r.phoneMobile,
        emergencyContact: r.emergencyContact,
        emergencyPhone: r.emergencyPhone,
        email: r.email,
        emailVerify: r.emailVerify,
        dob: r.dob,
        createdDttm: r.createdDttm,
        password: r.password,
        passwordVerify: r.passwordVerify,
        });
    console.log('Patient:', patient);
    return patient;
}
