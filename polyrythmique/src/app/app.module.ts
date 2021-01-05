import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { RhythmComponent } from './rhythm/rhythm.component';
import { TrackComponent } from './track/track.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateTrackComponent } from './create-track/create-track.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    RhythmComponent,
    TrackComponent,
    DashboardComponent,
    CreateTrackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
