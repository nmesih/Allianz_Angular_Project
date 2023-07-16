import { Injectable } from '@angular/core';
import { Comment } from './comment';
import { defaultComments } from 'src/assets/defaultComments';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private comments: Comment[] = [];
  constructor() { }

  getComments(): Comment[] {
    return this.comments;
  }

  setComments(): void {
    this.comments = defaultComments;
  }

  deleteComment($event: number){
    this.comments = this.comments.filter((comment) => comment.commentId !== $event)
  }

  addComment(comment: Comment) {
    this.comments.push(comment);
  }
}
