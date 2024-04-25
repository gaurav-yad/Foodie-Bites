import { Routes } from '@angular/router';
import { HomeComponent } from './MyComponents/pages/home/home.component';
import { FoodPageComponent } from './MyComponents/pages/food-page/food-page.component';
import { CartPageComponent } from './MyComponents/pages/cart-page/cart-page.component';
import { LoginComponent } from './MyComponents/pages/login/login.component';

export const routes: Routes = [
    {
        path:'',component:LoginComponent
    },
    {
        path:'dashboard',component:HomeComponent
    },
    {
        path:'search/:searchTerm',component:HomeComponent
    },

    {
        path:'tag/:tag', component:HomeComponent
    },

    {
        path:'food/:id', component:FoodPageComponent
    },

    {
        path:'cart-page', component:CartPageComponent
    },
];
