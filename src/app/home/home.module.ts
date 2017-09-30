import { NgModule } from '@angular/core';
import { HomeRouteModule } from './home.routes';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MusicSheetComponent } from './music-sheet/music-sheet.component';
import { LiveStationComponent } from './live-station/live-station.component';
import { RankListComponent } from './rank-list/rank-list.component';
import { SingerComponent } from './singer/singer.component';
import { NewMusicComponent } from './new-music/new-music.component';
import { RecommendComponent } from './recommend/recommend.component';
import { HomeComponent } from './home.component';
import { CarouselComponent } from './recommend/carousel/carousel.component';
import { XLargeDirective } from './recommend/x-large';
@NgModule({
  /**
   * Import Angular's modules.
   */
  imports: [
    // BrowserModule,
    // FormsModule,
    // ReactiveFormsModule,
    // HttpModule,
    //preloadingStrategy: PreloadAllModules
    CommonModule,
    HomeRouteModule,
    BrowserAnimationsModule
  ],
  declarations: [
    HomeComponent,
    MusicSheetComponent,
    LiveStationComponent,
    RankListComponent,
    SingerComponent,
    NewMusicComponent,
    RecommendComponent,
    XLargeDirective,
    CarouselComponent
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [
  ]
})

export class HomeModule {

}
