import { PotfolioComponent } from './potfolio/potfolio.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'home' , pathMatch:'full'},
  {path:'home',component:HomeComponent , title:'Home'},
  {path:'about',component:AboutComponent, title:'About'},
  {path:'portfolio',component:PotfolioComponent, title:'Portfolio'},
  {path:'contact',component:ContactComponent, title:'Contact'}, 
  {path:'**',component:NotfoundComponent, title:'Not Found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {scrollPositionRestoration:"enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
