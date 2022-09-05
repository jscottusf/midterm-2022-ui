import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SenateComponent } from './components/senate/senate.component';
import { HouseComponent } from './components/house/house.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "House", component: HouseComponent},
  {path: "Senate", component: SenateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
