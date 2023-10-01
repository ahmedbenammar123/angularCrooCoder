import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//formulaire
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { NewsComponent } from './components/news/news.component';
import { ScoreComponent } from './components/score/score.component';
import { VideosComponent } from './components/videos/videos.component';
import { BlogComponent } from './components/blog/blog.component';
import { NextMatchComponent } from './components/next-match/next-match.component';
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
import { MatchComponent } from './components/match/match.component';
import { BannerComponent } from './components/banner/banner.component';
import { ReversePipe } from './pipe/reverse.pipe';
import { VoyellePipe } from './pipe/voyelle.pipe';
import { ColorDirective } from './directives/color.directive';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HeroComponent,
    NewsComponent,
    ScoreComponent,
    VideosComponent,
    BlogComponent,
    NextMatchComponent,
    ContactComponent,
    AddMatchComponent,
    SignupComponent,
    LoginComponent,
    TableMatchesComponent,
    MatchesComponent,
    AddTeamsComponent,
    TableTeamsComponent,
    AddPlayerComponent,
    TablePlayerComponent,
    MatchComponent,
    BannerComponent,
    ReversePipe,
    VoyellePipe,
    ColorDirective,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //TDF
    ReactiveFormsModule, //Reactive forms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
