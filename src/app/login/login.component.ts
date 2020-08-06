import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //variables
  usuario: string = '123';
  password: string = '456';
  //variables

  constructor(private router:Router) { 

  }

  logincheck(user,pass){
    //console.log(this.usuario,' ',this.password,' ',user.value,' ',pass.value);
    if (user.value == this.usuario && pass.value == this.password ) {
        this.router.navigate(['loginIn']);     
    } else {
       this.router.navigate(['loginOut']);
    }
    return false;
  }

  ngOnInit(): void {
  }

}
