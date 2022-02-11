import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IMostViewMovies } from 'src/app/models/most-view';
import { MostViewService } from '../../services/most-view.service';

@Component({
  selector: 'app-most-view',
  templateUrl: './most-view.component.html',
  styleUrls: ['./most-view.component.scss']
})
export class MostViewComponent implements OnInit {

  allMovies: IMostViewMovies[] = [];

  private subscription = new Subscription

  constructor(
    private mostViewService: MostViewService
  ) { }

  ngOnInit(): void {
     //Le pasamos todas las peliculas que tenemos al array de pelis

     this.subscription.add(this.mostViewService.getMovies().subscribe(movies => {

      this.allMovies = movies;

      console.log(this.allMovies);

    }))

  }
  }


