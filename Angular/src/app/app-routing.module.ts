import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './Routing/employee/employee.component';
import { HomeComponent } from './Routing/home/home.component';
import { StocksComponent } from './Routing/stocks/stocks.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'stocks',component:StocksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
