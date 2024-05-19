import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LogicComponent } from './pages/login/login.component';
import {HomeComponent} from "./pages/home/home.component";
import {ListComponent} from "./pages/list/list.component";
import {AddComponent} from "./pages/add/add.component";

export const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'home',
    component: HomeComponent
  },
  { path: '', redirectTo: 'home', pathMatch:'full'},
  {
    path: 'login',
    component: LogicComponent,
  },
  { path: 'list',
    component: ListComponent
  },
  { path: 'add',
    component: AddComponent
  }
];
