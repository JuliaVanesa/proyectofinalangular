import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.scss']
})
export class PersonaListComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {

  @Input() user: User[] = [];
  @Output() selected = new EventEmitter<User>();

  selectedUser: User = {name: '', email: '', password: ''};

  constructor() { }

  ngOnInit(): void {
    console.log('>>> PERSONA-LIST ON INIT');

  }

  ngAfterViewInit() {
    console.log('>>>PERSONA-LIST AFTER VIEW INIT');
  }

  ngOnDestroy(): void {
    console.log('>>>PERSONA-LIST ON DESTROY');
}

ngOnChanges(changes: SimpleChanges): void {
    console.log('>>>PERSONA-LIST ON CHANGES', changes);
}

clickUser(user: User) {
  this.selectedUser = user;
  this.selected.emit(user);
}


   isSelected(user: User) : boolean {
     return user.name === this.selectedUser.name &&
     user.email === this.selectedUser.email
   }



}
