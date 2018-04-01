import { Component, OnInit } from '@angular/core';
import {CalculatorService} from "../../calculator.service";
import {recipeItem} from "../../recipeItem";

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.css'],
  providers:[CalculatorService]
})
export class MyRecipesComponent implements OnInit {

  recipes : recipeItem[];
  isChecked : boolean=false;

  constructor(private calculatorService:CalculatorService) { }

  ngOnInit() {

    this.calculatorService.getRecipes()
      .subscribe(recipes =>
        this.recipes=recipes);
  }


  deleteRecipe(id:any){
    var recipes = this.recipes;
    this.calculatorService.deleteRecipe(id)
      .subscribe(data=>{
        if(data.n==1){
          for(var i=0;i<recipes.length;i++){
            if(recipes[i]._id==id){
              recipes.splice(i,1);
            }
          }
        }
      });
  }

  checkAll(checkId) {
    var inputs = document.getElementsByTagName("input");

      if(this.isChecked){
        this.isChecked = false;
          for (var i = 0; i < inputs.length; i++) {
            inputs[i].checked = false;
          }
      }else if(this.isChecked == false){
        this.isChecked = true;
          for (var i = 0; i < inputs.length; i++) {
            inputs[i].checked = true;
          }
      }
  }

  searchMyRecipes(){
    var input,filter,table,tr,td,i;


    input = document.getElementById('searchField');
    filter = input.value.toUpperCase();
    table = document.getElementById('myRecipesTable');
    tr = table.getElementsByTagName('tr');

    for(i =0;i<tr.length;i++){
      td = tr[i].getElementsByTagName('td')[1];
      if(td){
        if(td.innerHTML.toUpperCase().indexOf(filter)>-1){
          tr[i].style.display="";
        }else {
          tr[i].style.display= "none";
        }
      }
    }
  }
}

