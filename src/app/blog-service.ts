import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  posts = [
    { title: 'My First Day with Angular', summary: 'Learning the CLI and Components.' },
    { title: 'Understanding Routing', summary: 'Making a Single Page Application.' },
    { title: 'Why TypeScript is Great', summary: 'Catching bugs before they happen.' }
  ]

  getPosts(){
    return this.posts
  }
}
