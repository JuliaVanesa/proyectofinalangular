import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup ({
    email: new FormControl ('', Validators.email),
    password: new FormControl ('', [Validators.required, Validators.minLength(8)])
  });

  emailControl = this.loginForm.controls['email'];
  passwordControl = this.loginForm.controls['password'];



  constructor() {}


  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe(values => console.log('values change', values));
    //this.loginForm.controls['mail'].valueChanges.subscribe(values => console.log('values change', values))
  }



  loguear() {
    console.log(this.loginForm.value);
  }
}




