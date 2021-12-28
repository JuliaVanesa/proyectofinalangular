import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-persona-item',
  templateUrl: './persona-item.component.html',
  styleUrls: ['./persona-item.component.scss']
})
export class PersonaItemComponent implements OnInit {

  @Input() user: User | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
