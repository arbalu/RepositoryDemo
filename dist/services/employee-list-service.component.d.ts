/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />
import { Http } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { Employee } from '../models/employee';
export declare class EmployeeListServiceComponent {
    private http;
    constructor(http: Http);
    private _employeesUrl;
    getEmployees(): Observable<Employee[]>;
    private _handleError(error);
}
