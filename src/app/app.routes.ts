import { Routes } from '@angular/router';
import { Demo } from '../components/demo/demo';
import { Demo1 } from '../components/demo1/demo1';

export const routes: Routes = [
    {
        path: '',
        component:Demo
    },
    {
        path:'demo1',
        component:Demo1
    }
];
