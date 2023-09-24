import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { TableMatchesComponent } from './components/table-matches/table-matches.component';
import { MatchesComponent } from './components/matches/matches.component';
import { AddTeamsComponent } from './components/add-teams/add-teams.component';
import { TableTeamsComponent } from './components/table-teams/table-teams.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { TablePlayerComponent } from './components/table-player/table-player.component';


const routes: Routes = [
  ///http://localhost:4200/
  {path:'',component:HomeComponent},
  ///http://localhost:4200/contact
  {path:'contact',component:ContactComponent},
  ///http://localhost:4200/addMatch
  {path:'add-match',component:AddMatchComponent},
  ///http://localhost:4200/addMatch/id
  {path:'add-match/:id',component:AddMatchComponent},
  ///http://localhost:4200/signup
  {path:'signup',component:SignupComponent},
  ///http://localhost:4200/login
  {path:'login',component:LoginComponent},
  ///http://localhost:4200/table-matches
  {path:'table-matches',component:TableMatchesComponent},
  ///http://localhost:4200/matches
  {path:'matches',component:MatchesComponent},
  ///http://localhost:4200/addTeam
  {path:'add-team',component:AddTeamsComponent},
  ///http://localhost:4200/addTeam/id
  {path:'add-team/:id',component:AddTeamsComponent},
  ///http://localhost:4200/table-matches
  {path:'table-teams',component:TableTeamsComponent},
  ///http://localhost:4200/addPlayer
  {path:'add-player',component:AddPlayerComponent},
  ///http://localhost:4200/addPlayer/id
  {path:'add-player/:id',component:AddPlayerComponent},
  ///http://localhost:4200/table-Player
  {path:'table-players',component:TablePlayerComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
