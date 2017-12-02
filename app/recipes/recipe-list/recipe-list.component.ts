import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	@Output()recipeWasSelected = new EventEmitter<Recipe>();

	recipes: Recipe[] = [
		new Recipe('A test Recipe','This is simply a test','https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F2016%2F01%2Fmain%2F1601p25-skillet-chicken-roasted-potatoes-carrots.jpg%3Fitok%3DMcbboinY&w=700&q=85'),
		new Recipe('Another test Recipe','This is simply a test','https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F2016%2F01%2Fmain%2F1601p25-skillet-chicken-roasted-potatoes-carrots.jpg%3Fitok%3DMcbboinY&w=700&q=85'),
		new Recipe('Aaagainn test Recipe','This is simply a test','https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F2016%2F01%2Fmain%2F1601p25-skillet-chicken-roasted-potatoes-carrots.jpg%3Fitok%3DMcbboinY&w=700&q=85') 
	 
	 

	];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe :Recipe){
  	this.recipeWasSelected.emit(recipe);
  }

}
