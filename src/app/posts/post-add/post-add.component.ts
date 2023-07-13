import { Component, importProvidersFrom } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { User } from 'src/app/user/user';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent {
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

  users: User[] = [];
  constructor(private postService: PostService, private router: Router, private userService: UserService){
    this.userService.setUsers();
    this.users = this.userService.getUsers();
  }

  handleSaveClick(){
    this.postService.addPost(this.post);
    this.router.navigateByUrl("/postlist");
  }

  handleCancelClick(){
    this.router.navigateByUrl("/postlist");
  }
}
