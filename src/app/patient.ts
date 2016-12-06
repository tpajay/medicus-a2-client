export interface Patient{
    patientId: number;
    dueDttm: string;
    namePrefix: string;
    nameFirst: string;
    nameMiddle: string;
    nameLast: string;
    nameSuffix: string;
    homeStreetAddr1: string;
    homeStreetAddr2: string;
    homeCity: string;
    homeState: string;
    homeZipcode: string;
    workStreetAddr1: string;
    workStreetAddr2: string;
    workCity: string;
    workState: string;
    workZipcode: string;
    country: string;
    ssn: string;
    acctNo: string;
    phoneHome: string;
    phoneWork: string;
    phoneMobile: string;
    emergencyContact: string;
    emergencyPhone: string;
    email: string;
    emailVerify: string;
    dob: string;
    createdDttm: string;
    password: string;
    passwordVerify: string;
}

