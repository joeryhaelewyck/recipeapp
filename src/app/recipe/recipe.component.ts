import { Recipe } from './../recipe.model';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  @Input() public recipe: Recipe;
  constructor() {}
  ngOnInit() {}
}
