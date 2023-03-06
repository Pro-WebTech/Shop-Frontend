import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simply test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlvWLxN6orqoQJfD8U-DHRzUjl6g8MRfRuHkRyv5H7Vg&s')
  ];

  

}
