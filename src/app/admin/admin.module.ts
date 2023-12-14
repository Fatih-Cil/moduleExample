import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    LayoutComponent,
    FirstPageComponent,
    SecondPageComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,

    
        RouterModule.forChild([
      {path:"",component:FirstPageComponent},
      {path:"firstpage",component:FirstPageComponent},
      {path:"secondpage",component:SecondPageComponent},
    ])
  ],
  exports:[LayoutComponent,
    FirstPageComponent,
    SecondPageComponent,
    MainPageComponent,
    

  ]
})
export class AdminModule { }
