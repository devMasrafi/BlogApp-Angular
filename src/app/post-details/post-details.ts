import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BlogService } from '../blog-service';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './post-details.html',
  styleUrls: ['./post-details.css'],
})
export class PostDetails implements OnInit {
  private route = inject(ActivatedRoute);
  private blogService = inject(BlogService);

  post: any;
  recentPosts: any[] = [];

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam !== null) {
      const index = +idParam;
      const all = this.blogService.getPosts();

      this.post = all[index];

      this.recentPosts = all
        .map((p, i) => ({ ...p, originalIndex: i })) 
        .reverse()
        .filter(p => p.originalIndex !== index)
        .slice(0, 4);
    }
  }
}