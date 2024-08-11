import { Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: ProductsListComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
