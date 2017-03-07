/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />
import { OnInit } from 'angular2/core';
import { Employee } from '../models/employee';
import { EmployeeListServiceComponent } from '../services/employee-list-service.component';
export declare class EmployeeListComponent implements OnInit {
    private _listingService;
    employees: Employee[];
    errorMessage: string;
    constructor(_listingService: EmployeeListServiceComponent);
    ngOnInit(): void;
}
