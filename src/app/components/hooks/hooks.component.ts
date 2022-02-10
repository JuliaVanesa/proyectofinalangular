// import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
// import { AfterViewInit, Component, OnInit } from '@angular/core';
// import { Subscription } from 'rxjs';
// import { User } from 'src/app/models/user.model';
// import { PersonService } from 'src/app/services/person.service';

// interface Test {
//   nombre: string;
//   direccion: {
//     calle:string;
//     nro: number;
//   }
// }

// @Component({
//   selector: 'app-hooks',
//   templateUrl: './hooks.component.html',
//   styleUrls: ['./hooks.component.scss']
// })
// export class HooksComponent implements OnInit, AfterViewInit {

//   users: User[] = []

//   test: Test = {
//     nombre: '',
//     direccion: {
//       calle: 'aaa',
//       nro: 111
//     }
//   }

//   private subscription: Subscription | undefined;

//   constructor(
//     private personService: PersonService
//   ) {
//     console.log('HOOK CONSTRUCTOR');
//    }

//    ngOnInit(): void {
//     this.subscription = this.personService.getList().subscribe(
//       users => users = this.users = users);

//       console.log('HOOK - ON INIT');
//   }

//   ngAfterViewInit(){
//     console.log('HOOK - AFTER VIEW INIT');
//   }

//   ngOnDestroy(): void{

//     this.subscription?.unsubscribe();

//       console.log('HOOK - ON DESTROY');
//     }

// }
