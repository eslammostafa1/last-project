import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http : HttpClient, 
    private UserService:UserService,
    private router:Router,
    ) { }

  signup(data:{name:string,email:string,password:string}){
    this.http.post('http://localhost:3000/auth/signup',data).subscribe(
      (data) => this.router.navigateByUrl('/signin'),
      (error) => console.log(error)
    );
  }

  signin(data:{email:string,password:string}){
    this.http.post<{ token:string,
      user:{
        id:string,
        name:string,
        email:string,
        createdAt:string
      }}>('http://localhost:3000/auth/signin',data).subscribe(
      (data) =>{ 
        this.UserService.setUser(data),
        this.router.navigateByUrl('/')
      },
      (error) => console.log(error)
    );
  }
}