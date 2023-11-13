import { ISupervisor } from "./ISupervisor";

export interface ISuperior{
    employeeId: string,
    superiorFullName? : string,
    password? : string,
    supervisors: Array<ISupervisor>,
    companyId: string
}