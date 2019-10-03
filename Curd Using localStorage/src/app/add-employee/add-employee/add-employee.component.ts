import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, RequiredValidator } from '@angular/forms';
import { Route, ActivatedRoute } from '@angular/router';
import { Capability } from 'protractor';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  myForm: FormGroup;
  users = [];
  upatesUsers = [];

  buttonText: boolean = false;
  submitB = "Submit";
  constructor(private route: ActivatedRoute) {


  }
  ngOnInit() {
    this.myForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      designation: new FormControl(''),
      city: new FormControl(''),
      salary: new FormControl(''),
    })

    if (this.route.snapshot.params['id'] == null || this.route.snapshot.params['id'] == undefined) {


      console.log("No id found, please add employee ")


    } else {

      var id = this.route.snapshot.params['id'];
      this.buttonText = true
      if (this.buttonText === true) {
        this.submitB = "Update"
      }
      this.update(id);

    }

  }

  update(id) {
    this.users = JSON.parse(localStorage.getItem('employeeList'));
    //   var emp=this.users.find(u=>u.id===id)
    for (let i = 0; i < this.users.length; i++) {
      if (id == this.users[i].id) {

        console.log(this.users[i].id);
        this.myForm.setValue({
          id: this.users[i].id,
          name: this.users[i].name,
          designation: this.users[i].designation,
          city: this.users[i].city,
          salary: this.users[i].salary
        })
        console.log(this.myForm.value);
      }
    }

  }
  // Below we have example of single form control By Using Form Control
  // myValue=new FormControl('');
  submit() {
    let emp = {
      id: this.myForm.value.id,
      name: this.myForm.value.name,
      designation: this.myForm.value.designation,
      city: this.myForm.value.city,
      salary: this.myForm.value.salary
    }

    if (this.buttonText == true) {
      this.updateData(emp)

    } else {
      console.log(emp)
      if (localStorage.getItem('employeeList  ') === null) {
        this.users.push(emp);
        localStorage.setItem('employeeList', JSON.stringify(this.users));

        var holder = localStorage.getItem('employeeList');
        console.log(JSON.parse(holder));
        this.myForm.reset();

      } else {
        this.users = JSON.parse(localStorage.getItem('employeeList'));
        this.users.push(emp)
        localStorage.setItem('employeeList', JSON.stringify(this.users));
        console.log(JSON.parse(localStorage.getItem('employeeList')))
        this.myForm.reset();

      }
    }
  }

  updateData(emp) {
    this.users = JSON.parse(localStorage.getItem('employeeList'));

    for (let i = 0; i < this.users.length; i++) {
      if (emp.id == this.users[i].id) {
        this.users[i].name = emp.name;
        this.users[i].designation = emp.designation;
        this.users[i].city = emp.city;
        this.users[i].salary = emp.salary;
        break;
      }

    }



    localStorage.setItem('employeeList', JSON.stringify(this.users));

    var holder = localStorage.getItem('employeeList');
    console.log(JSON.parse(holder));
    this.myForm.reset();
  }

}
