import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: User[] = [];

  // forms kısmındaki değişkenler tanımlandı
  
  username: string= ""; 
  email: string= "";
  creationDate: string="";
  isActive: boolean=false;
  editMode: boolean=false;
  userId: number=0;
  
  constructor(private userService: UserService){
    this.userService.setUsers();
    this.users = this.userService.getUsers();
  }

  handleDeleteClick($event: number){
    // son kullanıcının silinmek istenmesi durumunda hata mesajı verilecek
    if(this.userService.userCount() === 1){
      alert("You can not delete last user")
    } else {
      this.userService.deleteUser($event);
      this.users = this.userService.getUsers();
    }
    }


 handleSaveClick(){
   if(this.username == '' || this.email == '' || this.creationDate == '')
      alert("All the empty spaces must be filled");
    else if(this.userService.checkUnique(this.username, this.email, this.userId) === false)
      alert("Username and email must be unique.");
    else { const user: User = {
      userId: this.userId,
      //userId: Number(this.users[this.users.length -  1].userId) + 1 ,
      username: this.username , 
      email: this.email ,
      creationDate: this.creationDate ,
      isActive: this.isActive
    }

    this.userService.editUser(user, this.userId);
    this.users = this.userService.getUsers();

    this.editMode = false;
    this.username = "";
    this.email = "";
    this.creationDate = "";
    this.userId = 0;
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
 
}
