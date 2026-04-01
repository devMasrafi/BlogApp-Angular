import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Posts } from './pages/posts/posts';
import { Dashboard } from './pages/dashboard/dashboard';
import { PostDetails } from './pages/post-details/post-details';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'posts', component: Posts },
  { path: 'dashboard', component: Dashboard },

  {path: 'post/:id', component: PostDetails},
];
