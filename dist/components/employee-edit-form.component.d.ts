import { OnInit } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';
import { Employee } from '../models/employee';
import { EmployeeDetailServiceComponent } from '../services/employee-detail-service.component';
import { EmployeeEditFormServiceComponent } from '../services/employee-edit-form-service.component';
export declare class EmployeeEditFormComponent implements OnInit {
    private _router;
    private _routeParams;
    private _detailService;
    private _editService;
    currentEmployee: Employee;
    errorMessage: string;
    constructor(_router: Router, _routeParams: RouteParams, _detailService: EmployeeDetailServiceComponent, _editService: EmployeeEditFormServiceComponent);
    ngOnInit(): void;
    editEmployee(): void;
}
