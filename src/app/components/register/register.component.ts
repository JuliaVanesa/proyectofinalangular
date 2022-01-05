import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { PersonService } from 'src/app/services/person.service';
import { PersonaListComponent } from '../persona-list/persona-list.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  personas: User[] = [];

  registerForm = new FormGroup ({
    name: new FormControl ('', Validators.required),
    email: new FormControl ('', Validators.email),
    password: new FormControl ('', [Validators.required, Validators.minLength(8)])
  });

  nameControl = this.registerForm.controls['name'];
  emailControl = this.registerForm.controls['email'];
  passwordControl = this.registerForm.controls['password'];

  selectedPersona: User = {name:'', email:'', password:''};

  @ViewChild(PersonaListComponent) personaList: any;

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.personService.getList().subscribe (personas => this.personas = personas)
    this.registerForm.controls['name'].valueChanges.subscribe(values => console.log('values change', values))

  }

  // ngAfterViewInit(): void {
  //   setTimeout(() =>this.personaList.selectedPersona = this.personas [1], 0);
  // }

  registrar() {
    console.log(this.registerForm.value);
    this.selectedPersona = this.registerForm.value;
  }

  personaSelected(persona: User) {
    this.selectedPersona = persona;
    this.registerForm.setValue(persona);
  }

}
