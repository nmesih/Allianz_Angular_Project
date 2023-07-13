import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  
  posts: Post[] = []
  constructor(private postService: PostService, private router: Router){
    this.postService.setPosts();
    this.posts = this.postService.getPosts();
  }


  handleDeleteClick($event: number): void {
    this.postService.deletePost($event);
    this.posts = this.postService.getPosts();
  }

  handleDetailClick($event: number): void {
    this.router.navigate(["/postlist/", $event]);
  }
}
