import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { Tag } from '../../../shared/model/Tag';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css'
})

export class TagComponent implements OnInit{
  tags?: Tag[];
  constructor(private api:FoodService){
  }
  ngOnInit(): void {
    this.tags = this.api.getAllTags();
  }
}
