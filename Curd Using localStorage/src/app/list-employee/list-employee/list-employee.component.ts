import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  list = []
  employees=[]
  emp=[]
  constructor(private route:Router) { }

  ngOnInit() {
    if (localStorage.getItem('employeeList')===null) {
      alert("NO Data found, please Add Employee first");
      this.route.navigate(['/addEmployee'])
     } else {
this.emp=JSON.parse(localStorage.getItem('employeeList'));
      this.emp.sort((a,b)=>(a.id, b.id));
      this.employees=this.emp;

      }
  }

  remove(i){
    this.employees.splice(i,1);
    localStorage.setItem('employeeList', JSON.stringify(this.employees));
  }

  edit(i){
      console.log(i)
      this.route.navigate(['/addEmployee',i]);
  }
}
