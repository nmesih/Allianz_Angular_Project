import { Component } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {
  posts: Post[] = [];
  post: Post = {
    postId: 0,
    userId: 0,
    categoryId: 0,
    title: "",
    content: "",
    viewCount: 0,
    creationDate: "",
    isPublished: false
  };

  constructor(private postService: PostService, private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) {
    
  }

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.postService.setPosts();
      this.posts = this.postService.getPosts();
      console.log(this.posts);
      this.post = this. posts.find(post => post.postId === Number(id))!;
    } )
  }
}
