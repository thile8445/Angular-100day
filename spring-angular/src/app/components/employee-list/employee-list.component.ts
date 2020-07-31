import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Employee} from '../../models/Employee';
import {EmployeeService} from '../../services/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees:Observable<Employee[]>
  constructor(private employeeService : EmployeeService,
    private router : Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  employeeDetails(id: number){
    this.router.navigate(['details', id]);
  }
  updateEmployee(id:number){
    this.router.navigate(['update',id]);
  }

}
