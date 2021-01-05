import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from "./dashboard/dashboard.component";
import { RhythmComponent } from "./rhythm/rhythm.component";

const routes: Routes = [{path: "rhythm", component: RhythmComponent},
                        {path: "rhythm-sound", component: RhythmComponent},
                        {path: "metronome", component: RhythmComponent},
                        {path: "dashboard", component: DashboardComponent},
                        {path: "", redirectTo: "/dashboard", pathMatch: "full"},
                        {path: "**", component: RhythmComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
