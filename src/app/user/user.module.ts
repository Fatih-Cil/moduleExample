import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { UserfirstpageComponent } from './userfirstpage/userfirstpage.component';
import { UsermainpageComponent } from './usermainpage/usermainpage.component';
import { RouterModule } from '@angular/router';
import { UsersecondpageComponent } from './usersecondpage/usersecondpage.component';



@NgModule({
  declarations: [
    LayoutComponent,
    UserfirstpageComponent,
    UsermainpageComponent,
    UsersecondpageComponent
  ],
  imports: [
    CommonModule,
    
    RouterModule.forChild([
      {path:"",component:UserfirstpageComponent},
      {path:"usersecondpage",component:UsersecondpageComponent},
      {path:"userfirstpage",component:UserfirstpageComponent},
    ])
  ],
  exports:[ LayoutComponent,
    UserfirstpageComponent,
    UsermainpageComponent,
    UsersecondpageComponent
  ]
})
export class UserModule { }
