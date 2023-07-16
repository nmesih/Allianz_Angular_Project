import { Component } from '@angular/core';
import { Post } from 'src/app/posts/post';
import { User } from 'src/app/user/user';
import { Comment } from '../comment';
import { UserService } from 'src/app/user/user.service';
import { CommentService } from '../comment.service';
import { PostService } from 'src/app/posts/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.css']
})
export class CommentAddComponent {
  users: User[] = [];
  posts: Post[] = [];
  comments: Comment[] = [];
  comment: Comment = {
    commentId: 0,
    postId: 0,
    userId: 0,
    comment: "",
    creationDate: "",
    isConfirmed: false,
  }

  constructor(private userService: UserService, private commentService: CommentService, private postService: PostService, private router: Router){
    if (this.userService.getUsers().length === 0)
      this.userService.setUsers();
    if (this.postService.getPosts().length === 0)
      this.postService.setPosts();
    if (this.commentService.getComments().length === 0)
      this.commentService.setComments();
    else {
      this.users = this.userService.getUsers();
      this.posts = this.postService.getPosts();
      this.comments = this.commentService.getComments();
    }
  }

  // comment eklerken her alanın doldurulma durumunu kontrol ediyoruz
  handleSaveClick(){
    if (this.comment.postId === 0 || this.comment.userId === 0
      ||this.comment.creationDate === "" || this.comment.comment === "")
      alert("You must fill every section");
  else
  {
    this.comment.commentId = this.comments[this.comments.length - 1].commentId + 1;
    this.commentService.addComment(this.comment);
    this.router.navigateByUrl("/commentlist");
  }
}

// cancel'a basınca list'e geri dönmesini sağlıyoruz
  handleCancelClick(): void{
    this.router.navigateByUrl("/commentlist");
  }
}
