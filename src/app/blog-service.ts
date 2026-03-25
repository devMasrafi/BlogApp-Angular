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
        {
          title: 'My First Day with Angular',
          summary: 'Learning the CLI and Components.',
          image: 'https://images.pexels.com/photos/36483262/pexels-photo-36483262.jpeg',
        },
        {
          title: 'Understanding Routing',
          summary:
            'Making a Single Page Application. i dont know but will make it with stackoverfllow and ai',
          image: 'https://images.pexels.com/photos/36583411/pexels-photo-36583411.jpeg',
        },
        {
          title: 'Understanding Routing',
          summary:
            'Making a Single Page Application. i dont know but will make it with stackoverfllow and ai',
          image: 'https://images.pexels.com/photos/28482524/pexels-photo-28482524.jpeg',
        },
        {
          title: 'Understanding Routing',
          summary:
            'Making a Single Page Application. i dont know but will make it with stackoverfllow and ai',
          image: 'https://images.pexels.com/photos/36583411/pexels-photo-36583411.jpeg',
        },
        {
          title: 'Understanding Routing',
          summary:
            'Making a Single Page Application. i dont know but will make it with stackoverfllow and ai',
          image: 'https://images.pexels.com/photos/12624737/pexels-photo-12624737.jpeg',
        },
        {
          title: 'Understanding Routing',
          summary:
            'Making a Single Page Application. i dont know but will make it with stackoverfllow and ai',
          image: 'https://images.pexels.com/photos/36404634/pexels-photo-36404634.jpeg',
        },
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
      image: newImage,
    });
    this.saveData();
  }
  deletePost(index: number) {
    this.posts.splice(index, 1);
    this.saveData();
  }
}
