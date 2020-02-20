import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutes } from './app.routes';

//Views
import { MainViewComponent } from './main-view/main-view.component';
import { DashboardComponent } from './main-view/dashboard/dashboard.component';
import { ListViewComponent } from './main-view/list-view/list-view.component';
import { FusionComponent } from './main-view/fusion/fusion.component';
import { AboutViewComponent } from './main-view/about-view/about-view.component';


//Services
import { DatahandlerService } from './services/datahandler.service';


@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    DashboardComponent,
    ListViewComponent,
    FusionComponent,
    AboutViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [DatahandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
