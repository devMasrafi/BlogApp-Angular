import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Dashboard } from './dashboard/dashboard';
import { PostDetails } from './post-details/post-details';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'dashboard', component: Dashboard },

  {path: 'post/:id', component: PostDetails},
];
