import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {
  
  // yeni user objesi oluşturarak tipleri belirledik
  user: User = {
    userId: 0,
    username: "",
    email: "",
    creationDate:"",
    isActive: false
  };
  users: User[] = [];

  constructor(private userService: UserService, private router: Router){
    if(this.userService.getUsers().length === 0)
      this.userService.setUsers();
    this.users = this.userService.getUsers();  
  }

  /* userService componentinden veri önce setUsers fonksiyonun kullanarak verileri çekiyoruz, daha sonra getUsers kullanarak userCount fonksiyonu ile son userId'yi bularak yeni userId numarası oluşturuyoruz */ 
  handleCreateClick(){
    // eklenmek istenen kullanıcının halihazırda listede olup olmadığını kontrol ediyoruz.
    if(this.user.username === "" || this.user.email === "" || this.user.creationDate === "")
      alert("No additions can be made without filling in the blanks.")
    else if(this.userService.checkUnique(this.user.username, this.user.email, this.user.userId) === false)
      alert("This user already exist.")
    else {  
    this.user.userId = this.users[this.users.length - 1].userId + 1;  
    this.userService.addUser(this.user);
    this.users = this.userService.getUsers();
    this.router.navigateByUrl("/userlist");
  }
}

  handleCancelClick(){
    this.router.navigateByUrl("/userlist");
  }
}
