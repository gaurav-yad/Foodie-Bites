import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/model/Food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { TagComponent } from '../tag/tag.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, SearchComponent, TagComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit{
    foods : Food[] = [];
    constructor(private api:FoodService, private activateRoute:ActivatedRoute){
    }


    ngOnInit(): void {
      this.activateRoute.params.subscribe((params)=>{
        if(params.searchTerm)
          this.foods = this.api.getAllFoodsBySearchTerm(params.searchTerm);
        else if(params.tag)
          this.foods = this.api.getAllFoodsByTag(params.tag);
        else
          this.foods = this.api.getAll();
      })
    }
}
