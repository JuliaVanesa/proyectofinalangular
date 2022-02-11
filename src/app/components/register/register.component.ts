import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { RegisterService } from '../../services/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  personas: User = {
    name:'',
    email:'',
    password: ''
  }

  allUsers : User[] = [];

  flag : boolean = true;

  registerForm = new FormGroup ({
    name: new FormControl ('', Validators.required),
    email: new FormControl ('', Validators.email),
    password: new FormControl ('', [Validators.required, Validators.minLength(8)])
  });

  nameControl = this.registerForm.controls['name'];
  emailControl = this.registerForm.controls['email'];
  passwordControl = this.registerForm.controls['password'];

  selectedPersona: User = {name:'', email:'', password:''};



  constructor(private registerService: RegisterService) { }

  private subscription = new Subscription;

  ngOnInit(): void {
    this.subscription.add(this.registerService.getUsers().subscribe(data => {
      this.allUsers = data;
      console.table(data);
    }));

  }

  register() {
    this.personas.name = this.registerForm.controls['name'].value;
    this.personas.email = this.registerForm.controls['email'].value;
    this.personas.password = this.registerForm.controls['password'].value;

    this.subscription.add(this.registerService.newUser(this.personas).subscribe(data => {
      console.log('desde la api')
      console.log(data);
    })
  );

  this.flag = (this.allUsers.findIndex(mail => mail.email == this.personas.email)) > -1;

  if(!this.flag) {
    this.allUsers.push(this.personas);
    this.subscription.add(alert("registrado ok"))

  } else {
    this.subscription.add(alert("fallo"))
  }

  this.registerForm.reset();


  }


 }
