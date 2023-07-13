import { Injectable } from '@angular/core';
import { Post } from './post';
import { defaultPosts } from 'src/assets/defaultPosts';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = []

  constructor() { }
  getPosts(): Post[] {
      return this.posts;
  }

  setPosts(): void {
    this.posts = defaultPosts;
  }

  deletePost(id: number): void {
    this.posts = this.posts.filter((post) => post.postId !== id);
  }

  findPostById(id: number): Post | undefined{
    return this.posts.find((post)=> post.postId === Number(id))
  }

  addPost(post: Post) {
    this.posts.push(post);
  }
}
