import { Component, inject, OnInit } from '@angular/core';
import { Apidata } from '../../services/apidata';

@Component({
  selector: 'app-posts',
  imports: [],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts implements OnInit {
  postService = inject(Apidata);

  postArr: any[] = [];
  currentPost: any[] = [];

  ngOnInit() {
    const cachedPost = localStorage.getItem('postArr');

    if (cachedPost) {
      this.postArr = JSON.parse(cachedPost);
      this.setPagePost();
      console.log(`loaded from localStorage`);
    } else {
      this.postService.getPost().subscribe((data: any) => {
        this.postArr = data;
        localStorage.setItem('postArr', JSON.stringify(data));
        this.setPagePost();

        console.log(`saved items to localStorage`);
      });
    }
  }

  page: number = 1;
  postPerPage: number = 15;

  setPagePost() {
    const startIndex = (this.page - 1) * this.postPerPage;
    const endIndex = startIndex + this.postPerPage;

    this.currentPost = this.postArr.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.page * this.postPerPage < this.postArr.length) {
      this.page++;
      this.setPagePost();
    }
  }
  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.setPagePost();
    }
  }
}
