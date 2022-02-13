import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IMostViewMovies } from 'src/app/models/most-view';
import Swal from 'sweetalert2';
import { MostViewAdminService } from '../../services/most-view-admin.service';
import { MostViewService } from '../../services/most-view.service';

@Component({
  selector: 'app-most-view-admin',
  templateUrl: './most-view-admin.component.html',
  styleUrls: ['./most-view-admin.component.scss']
})
export class MostViewAdminComponent implements OnInit {

  allMovies: IMostViewMovies[] = []

  // Variable de suscripcion
  private subscription = new Subscription;

  continue: number = -2

  //Variable parametro a pasar

  movie: IMostViewMovies = {

    id: '',

    title: '',

    premiere: 0,

    gender: '',

    adultsOnly: false,

    description: '',

    image: ''

  }

  constructor(
    private adminService: MostViewAdminService,
    private mostViewService: MostViewService
  ) { }

  ngOnInit(): void {

    this.subscription.add(this.mostViewService.getMovies().subscribe(data => {

      this.allMovies = data;
      console.log(this.allMovies)

    }));

  }

  updateForm = new FormGroup ({

    id: new FormControl('',[Validators.required]),

    title: new FormControl(''),

    description: new FormControl(''),

    image: new FormControl(''),

    premiere: new FormControl(''),

    gender: new FormControl(''),

    adultsOnly: new FormControl('')

  });

   //Formulario de creacion de pelicula

   createForm = new FormGroup({

    title: new FormControl('',[Validators.required]),

    description: new FormControl('',[Validators.required]),

    image: new FormControl('',[Validators.required]),

    premiere: new FormControl('',[Validators.required]),

    gender: new FormControl('',[Validators.required]),

    adultsOnly: new FormControl('',[Validators.required])

  })

    //Formulario de eliminacion

    deleteForm = new FormGroup({

      id: new FormControl('', Validators.required)

    });

  //Metodo de edicion

  makesChanges(){

    this.continue = this.allMovies.findIndex(m => m.id == this.updateForm.controls['id'].value);



    if(this.continue != -1){

      //Pasamos todos los datos de la peli a editar previos a los cambios

      this.movie = this.allMovies[this.continue];

      this.movie.id = this.updateForm.controls['id'].value;


      //Validacion para ingresar los cambios

      if (this.updateForm.controls['image'].value != ''){

        this.movie.image = this.updateForm.controls['image'].value;

      }

      //Incompleto. ACOMODAR

      if (this.updateForm.controls['adultsOnly'].value != ''){

        this.movie.adultsOnly = this.updateForm.controls['adultsOnly'].value;

      }



      if(this.updateForm.controls['description'].value != ''){

        this.movie.description = this.updateForm.controls['description'].value;

      }



      if (this.updateForm.controls['gender'].value != ''){

        this.movie.gender =  this.updateForm.controls['gender'].value;



        this.movie.gender = this.movie.gender.toLowerCase().trim();

      }
      if(this.updateForm.controls['premiere'].value > 1900){

        this.movie.premiere = this.updateForm.controls['premiere'].value;

      }



      if(this.updateForm.controls['title'].value != ''){

        this.movie.title = this.updateForm.controls['title'].value;

        this.movie.title = this.movie.title.toLowerCase().trim();

      }



      this.subscription.add(this.adminService.updateMovies(this.movie).subscribe(data => Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Pelicula editada',
        showConfirmButton: false,
        timer: 1500
      })))

    } else {

      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'La pelicula no existe',
        showConfirmButton: false,
        timer: 1500
      })

    }

    this.updateForm.reset()
}
createMovie(){



  this.subscription.add(this.adminService.addMovie(

    {

    title: this.createForm.controls['title'].value,

    premiere: this.createForm.controls['premiere'].value,

    description: this.createForm.controls['description'].value,

    image: this.createForm.controls['image'].value,

    gender: this.createForm.controls['gender'].value,

    adultsOnly: this.createForm.controls['adultsOnly'].value,

    id: "0",

    }

  ).subscribe(data => {

    console.log(data);
    Swal.fire ({
      position: 'center',
      icon: 'success',
      title: 'Pelicula agregada',
      showConfirmButton: false,
      timer: 1500
    })

    this.createForm.reset()


}));


}

//Metodo de eliminacion

deleteMovie(){

  this.subscription.add(this.adminService.deleteMovie(String(this.deleteForm.controls['id'].value)).subscribe(

    data => {

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Pelicula eliminada',
        showConfirmButton: false,
        timer: 1500
      })

    }, (err) => {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Pelicula no existe',
        showConfirmButton: false,
        timer: 1500
      })

    }

  ))

  this.deleteForm.reset();

};
}
