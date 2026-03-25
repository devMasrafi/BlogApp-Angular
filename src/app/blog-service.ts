import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  posts: any[] = [];

  constructor() {
    const savedPosts = localStorage.getItem('myBlogPosts');

    if (savedPosts) {
      this.posts = JSON.parse(savedPosts);
    } else {
      this.posts = [
        { title: 'My First Day with Angular', summary: 'Learning the CLI and Components.' },
        { title: 'Understanding Routing', summary: 'Making a Single Page Application.' },
        { title: 'Why TypeScript is Great', summary: 'Catching bugs before they happen.' },
      ];
    }
  }

  saveData() {
    localStorage.setItem('myBlogPosts', JSON.stringify(this.posts));
  }

  getPosts() {
    return this.posts;
  }

  addPost(newTitle: string, newSummary: string, newImage: string) {
    this.posts.push({
      title: newTitle,
      summary: newSummary,
      image: newImage
    });
    this.saveData();
  }
  deletePost(index: number) {
    this.posts.splice(index, 1);
    this.saveData();
  }

}
