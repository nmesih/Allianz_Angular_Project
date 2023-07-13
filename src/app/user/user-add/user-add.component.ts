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

  }

  constructor(private userService: UserService, private router: Router){
    this.userService.setUsers();
  }

  /* userService componentinden veri önce setUsers fonksiyonun kullanarak verileri çekiyoruz, daha sonra getUsers kullanarak userCount fonksiyonu ile son userId'yi bularak yeni userId numarası oluşturuyoruz */ 
  handleCreateClick(){
    this.user.userId = this.userService.getUsers()[this.userService.userCount() - 1].userId + 1;
   
    // eklenmek istenen kullanıcının halihazırda listede olup olmadığını kontrol ediyoruz.
    if(this.user.username === "" || this.user.email === "" || this.user.creationDate === "")
      alert("No additions can be made without filling in the blanks.")
    else if(this.userService.checkUnique(this.user.username, this.user.email, this.user.userId) === false)
      alert("This user already exist.")
    else {    
    this.userService.addUser(this.user);
    this.router.navigateByUrl("/userlist");
  }
}

  handleCancelClick(){
    this.router.navigateByUrl("/userlist");
  }
}
