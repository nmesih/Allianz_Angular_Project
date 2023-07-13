import { Injectable } from '@angular/core';
import { User } from './user';
import { defaultUsers } from 'src/assets/defaultUsers';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[]=[]
  constructor() {}

  getUsers(): User[]{
    return this.users;
  }

  setUsers(): void{
    this.users = defaultUsers;
  }

  deleteUser(id: number): void {
    this.users = this.users.filter((user) => user.userId !== id)
  }

  findUserById(id: number): User | undefined{
    return this.users.find((user)=> user.userId === Number(id))
  }

  findUserByUsername(username: string): User | undefined{
    return this.users.find((user)=> user.username === username)
   }

   findUserByEmail(email: string): User | undefined{
    return this.users.find((user)=> user.email === email)
   }

  editUser(editedUser: User, id: number): void{
    
    // map methoduyla array'in içerisinde gezip, içerisinde ihtiyacımız olan objeyi bulup, objeyi birbirine eşitleyeceğiz.

   this.users = this.users.map(user => {
    if (user.userId === id) 
      user = editedUser
      return user;
   });
  }

  addUser(user: User): void{
    
    this.users.push(user);
  }

  userCount(): number {
    return this.users.length;
  }

  //username ve email'in unique olup olmadığını kontrol ediyoruz
  checkUnique(username: string, email: string, id: number): boolean{
    if(this.users.find((user) => user.username === username.toLowerCase()) !== undefined &&
     this.findUserByUsername(username.toLowerCase())!.userId !== id)
      return false;
    else if (this.users.find((user) => user.email === email.toLowerCase()) !== undefined && this.findUserByEmail(email.toLowerCase())!.userId !== id)
      return false;
    else 
      return true;
  }

  }