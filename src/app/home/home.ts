import { Component } from '@angular/core';
import { BlogCard } from '../blog-card/blog-card';

@Component({
  selector: 'app-home',
  imports: [BlogCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  blogPosts = [
    { title: 'My First Day with Angular', summary: 'Learning the CLI and Components.' },
    { title: 'Understanding Routing', summary: 'Making a Single Page Application.' },
    { title: 'Why TypeScript is Great', summary: 'Catching bugs before they happen.' }
  ]
}
