import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RhythmComponent } from "./rhythm/rhythm.component";

const routes: Routes = [{path: "rhythm", component: RhythmComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
