import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PaperComponent } from './pages/paper/paper.component';

export const routes: Routes = [
    {
        path:'', component: HomeComponent
    },
    {
        path:'paginas', component: PaperComponent
    }
];
