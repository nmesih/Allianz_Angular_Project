import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { PostService } from 'src/app/posts/post.service';
import { CommentService } from 'src/app/comments/comment.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: User[] = [];
  pagedData: User[] = [];
  currentPage = 1;
  itemsPerPage = 10;

  // forms kısmındaki değişkenler tanımlandı
  
  username: string= ""; 
  email: string= "";
  creationDate: string="";
  isActive: boolean=false;
  editMode: boolean=false;
  userId: number=0;
  
  constructor(private userService: UserService, private postService: PostService, private commentService: CommentService){
    if(this.userService.getUsers().length === 0)
      this.userService.setUsers();
    this.users = this.userService.getUsers();
    if (this.postService.getPosts().length === 0)
      this.postService.setPosts();
    if(this.commentService.getComments().length === 0)
      this.commentService.setComments();
    
  }

  handleDeleteClick($event: number){
    // son kullanıcının silinmek istenmesi durumunda hata mesajı verilecek
    if(this.userService.userCount() === 1){
      alert("You can not delete last user")
    } 
    else if(this.checkPostsAndComments($event))
      alert("You cannot delete a user with post or comment")
    else {
      this.userService.deleteUser($event);
      this.users = this.userService.getUsers();
      this.pageChanged(this.currentPage);
    }
  }


  checkPostsAndComments(id: number){
    if (this.postService.getPosts().filter((post) => post.userId === id).length !== 0)
      return true;
    else if (this.commentService.getComments().filter((comment) => comment.userId === id).length !== 0)
      return true;
    else
      return false;
  }

// her alanın doldurulduğundan ve username ve email'in daha önce kullanılmadığından emin oluyoruz.
 handleSaveClick(){
   if(this.username == '' || this.email == '' || this.creationDate == '')
      alert("All the empty spaces must be filled");
    else if(this.userService.checkUnique(this.username, this.email, this.userId) === false)
      alert("Username and email must be unique.");
    else { const user: User = {
      userId: this.userId,
      username: this.username , 
      email: this.email ,
      creationDate: this.creationDate ,
      isActive: this.isActive
    }

    this.userService.editUser(user, this.userId);
    this.users = this.userService.getUsers();
    this.handleCancelClick();
    this.pageChanged(this.currentPage);
  }
}

  handleEditClick($event: number): void{
    this.editMode= true;
    this.userId = $event;
  }

  handleCancelClick(){
    this.editMode = false;
    this.username = "";
    this.email = "";
    this.creationDate = "";
    this.userId = 0;
  }

  ngOnInit(){
    this.pageChanged(this.currentPage);
  }

  pageChanged(page: number): void {
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedData = this.users.slice(startIndex, endIndex);
    this.currentPage = page;
    if (this.pagedData.length === 0 && this.currentPage > 1)
      this.previousPage();
  }

  previousPage(): void {
    if (this.currentPage > 1)
    {
      this.currentPage--;
      this.pageChanged(this.currentPage);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages)
    {
      this.currentPage++;
      this.pageChanged(this.currentPage);
    }
  }

  get totalPages(): number {
    return Math.ceil(this.users.length / this.itemsPerPage);
  }
 
}
