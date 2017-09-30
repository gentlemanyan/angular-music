import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  ActivatedRoute,
  PreloadAllModules
 } from '@angular/router';

import { MusicSheetComponent } from './music-sheet/music-sheet.component';
import { LiveStationComponent } from './live-station/live-station.component';
import { RankListComponent } from './rank-list/rank-list.component';
import { SingerComponent } from './singer/singer.component';
import { NewMusicComponent } from './new-music/new-music.component';
import { RecommendComponent } from './recommend/recommend.component';
import { HomeComponent } from './home.component';

const HOMEROUTES: Routes = [
  { path: 'home', component: HomeComponent,
    children: [
    { path: 'recommend', component: RecommendComponent },
    { path: 'music-sheet', component: MusicSheetComponent },
    { path: 'live-station', component: LiveStationComponent },
    { path: 'rank-list', component: RankListComponent },
    { path: 'singer', component: SingerComponent },
    { path: 'new-music', component: NewMusicComponent },
    { path: '', redirectTo: './recommend', pathMatch: 'full' }
   ] }
];

@NgModule({
  imports: [
    RouterModule.forChild(HOMEROUTES)
  ],
  exports: [ RouterModule ]
})

export class HomeRouteModule {
  constructor( route: ActivatedRoute ) {
    console.log( 'home 模块路由配置打印：');
    console.log( route );
  }
}
