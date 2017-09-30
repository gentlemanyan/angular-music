import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoContentComponent } from './no-content';
import { PersonFmComponent } from './person-fm/person-fm.component';

// 应用级的路由用于切换侧栏的不同选项
export const ROUTES: Routes = [
  // { path: '',
  //   loadChildren: './home/home.module#HomeModule',
  //   data: { preload: true  }
  // },
  // { path: '', redirectTo: '/home', pathMatch: 'full'
  //   // loadChildren: 'app/home/home.module#HomeModule',
  //   // data: { preload: true }
  //  },
  { path: 'FM', component: PersonFmComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];
