import { Employee } from '../models/employee';
import { EmployeeFormServiceComponent } from '../services/employee-form-service.component';
export declare class EmployeeFormComponent {
    private _employeeService;
    constructor(_employeeService: EmployeeFormServiceComponent);
    model: Employee;
    errorMessage: string;
    newEmployee(): void;
    onKey(event: any): void;
}
