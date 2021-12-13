import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup ({
    nombre: new FormControl ('', Validators.required),
    email: new FormControl ('', Validators.email),
    password: new FormControl ('', [Validators.required, Validators.minLength(8)])
  });

  nombreControl = this.registerForm.controls['nombre'];
  emailControl = this.registerForm.controls['email'];
  passwordControl = this.registerForm.controls['password'];

  constructor() { }

  ngOnInit(): void {

    this.registerForm.controls['nombre'].valueChanges.subscribe(values => console.log('values change', values))

  }

  registrar() {
    console.log(this.registerForm.value);
  }

}
