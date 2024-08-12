import { Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: ProductsListComponent,
        title: "Products List"
    },
    {
        path: 'login',
        component: LoginComponent,
        title: "Login"
    },
    {
        path: 'cart',
        component: CartComponent,
        title: "Cart"
    },
    {
        path: 'register',
        component: RegisterComponent,
        title: "Register"
    },
    {
        path: '**',
        component: NotFoundComponent,
        title: "404 Not Found"
    }
];
