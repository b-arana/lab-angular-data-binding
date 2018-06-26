import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  pattern: string;
  noVisible: boolean;
  listFood: Object[];
  totalCalories: number;
  totalQuantity: number;

  constructor() {
    this.noVisible = true;
    this.listFood = [];
    this.totalCalories = 0;
    this.totalQuantity = 0;
  }

  ngOnInit() {
    this.foods = foods;
  }

  showForm() {
    if (this.noVisible) {
      this.noVisible = false;
    } else {
      this.noVisible = true;
    }
  }

  addFood($event, name, calories, image) {
    this.foods.unshift({
      name,
      calories,
      image,
      quantity: 1
    })

    this.showForm();
  }

  addList($event, food, quantity) {
    food.quantity += parseInt(quantity);

    if (this.listFood.indexOf(food) == -1) {
      if (this.totalCalories == 0) {
        this.totalCalories = food.calories * quantity;
      } else {
        this.totalCalories += food.calories * quantity;
      }
      this.listFood.push(food);
    } else {
      this.totalCalories += food.calories * quantity;
    }
  }
}
