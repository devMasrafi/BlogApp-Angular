import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BlogService } from '../blog-service';

@Component({
  selector: 'app-post-details',
  imports: [RouterLink],
  templateUrl: './post-details.html',
  styleUrl: './post-details.css',
})
export class PostDetails {
  private route = inject(ActivatedRoute)
  private blogService = inject(BlogService)

  post: any



  constructor(){
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.post = this.blogService.getPosts()[id]
  }
}
