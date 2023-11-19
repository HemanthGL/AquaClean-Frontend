import { IOnboardSupervisor } from "./IOnboardSupervisor";

export interface IOnboardSuperior{
    superiorFullName: string,
    password: string,
    employeeId: string,
    emailId: string,
    supervisors?: Array<IOnboardSupervisor>
}