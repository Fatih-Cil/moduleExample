import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent as adminlayout} from './admin/layout/layout.component';
import { LayoutComponent as userlayout } from './user/layout/layout.component';
import { AppComponent } from './app.component';
import { MainPageComponent } from './admin/main-page/main-page.component';
import { UserComponent } from './user/user.component';
import { UsermainpageComponent } from './user/usermainpage/usermainpage.component';
import { FirstPageComponent } from './admin/first-page/first-page.component';
import { UserfirstpageComponent } from './user/userfirstpage/userfirstpage.component';

const routes: Routes = [

  {path:"",component:UserComponent},
 
{path:"admin",component:MainPageComponent,children:[
  
{path:"",loadChildren:()=>import("./admin/admin.module").then(module=>module.AdminModule)},

]},

{path:"user",component:UsermainpageComponent,children:[
  
  {path:"",loadChildren:()=>import("./user/user.module").then(module=>module.UserModule)},
  
  ]}
  
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
