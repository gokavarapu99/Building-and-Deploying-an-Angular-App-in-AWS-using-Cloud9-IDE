import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

const routes: Routes = [
  {path:'',component: FirstComponent},
    {path:'first',component: FirstComponent},
  {path:'second',component: SecondComponent},
  {path:'third',component: ThirdComponent},
  {path:'**',redirectTo:''}

  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
