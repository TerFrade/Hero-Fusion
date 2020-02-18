import { MainViewComponent } from './main-view/main-view.component';
import { DashboardComponent } from './main-view/dashboard/dashboard.component';
import { ListViewComponent } from './main-view/list-view/list-view.component';
import { FusionComponent } from './main-view/fusion/fusion.component';
import { AboutViewComponent } from './main-view/about-view/about-view.component';

export const AppRoutes = [
    { path: '', redirectTo: 'main/dashboard', pathMatch: 'full' },
    { path: 'main', redirectTo: 'main/dashboard', pathMatch: 'full' },
    {
        path: "main", component: MainViewComponent, children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'search', component: ListViewComponent },
            { path: 'fusion', component: FusionComponent },
            { path: 'about', component: AboutViewComponent },
        ]
    },
];