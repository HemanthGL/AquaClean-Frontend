import { ISuperior } from "./ISuperior";

export interface IUser{
    companyId: string,
    companyUserName?: string,
    password?: string,
    superiors: Array<ISuperior>
}