import {EventEmitter, Injectable} from '@angular/core';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{

	recipeSelecte = new EventEmitter<Recipe>();
private	recipes : Recipe[]=[


		new Recipe('A test Recipe',
			'This is simply a test',
			'https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F2016%2F01%2Fmain%2F1601p25-skillet-chicken-roasted-potatoes-carrots.jpg%3Fitok%3DMcbboinY&w=700&q=85',
			[
				new Ingredient('Meeat',1),
				new Ingredient('French Fries',20)
			]),
		new Recipe('Another test Recipe',
			'Tasty Schnitzel',
			'http://www.dessertfortwo.com/wp-content/uploads/2014/12/Schnitzel-2.jpg',
			[
			new Ingredient('Meeat',1),
				new Ingredient('Bread',22)

				]),
		new Recipe('Aaagainn test Recipe',
			'What else you need to say?',
			'http://www.dessertfortwo.com/wp-content/uploads/2014/12/Schnitzel-2.jpg',
			[
			new Ingredient('Potato',1),
				new Ingredient('Milch',9)

				]) 
	 
	 ];

	 constructor(private slService: ShoppingListService){

	 }

	 getRecipes(){
	 	return this.recipes.slice(); 
	 }

	 addIngredientsToShoppingList(ingredientsd:Ingredient[]){
	 	this.slService.addIngredients(ingredientsd);

	 }



}