import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]=[ 
  new Recipe('test recipie','tasty','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myrecipes.com%2Fcourse%2Fsoup-recipes%2Fsoups-for-a-cold&psig=AOvVaw0fSlTdd_hP4JPDwyiDeISN&ust=1580534277403000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLj8xo-LrecCFQAAAAAdAAAAABAD'),
   new Recipe('test recipie','tasty','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myrecipes.com%2Fcourse%2Fsoup-recipes%2Fsoups-for-a-cold&psig=AOvVaw0fSlTdd_hP4JPDwyiDeISN&ust=1580534277403000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLj8xo-LrecCFQAAAAAdAAAAABAD')
  ];
  constructor() {

   }

  ngOnInit() {
  }

}
