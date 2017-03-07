/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />
import { OnInit } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';
import { EmployeeDetailServiceComponent } from '../services/employee-detail-service.component';
import { EmployeeDeleteServiceComponent } from '../services/employee-delete-service.component';
export declare class EmployeeDetailComponent implements OnInit {
    private _router;
    private _routeParams;
    private _detailService;
    private _deleteService;
    currentEmployee: any;
    errorMessage: string;
    constructor(_router: Router, _routeParams: RouteParams, _detailService: EmployeeDetailServiceComponent, _deleteService: EmployeeDeleteServiceComponent);
    ngOnInit(): void;
    deleteHandler(id: number): void;
}
