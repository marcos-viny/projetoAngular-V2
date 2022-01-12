import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/resouces/services/alert.service';
import { LoginService } from 'src/app/resouces/services/login.service';
import {RequestLogin} from '../../resouces/models/RequestLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  public requestLogin!: RequestLogin;

  constructor(private loginService: LoginService,
              private alertService:AlertService,
              private router:Router 
              ) { }

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }

  public doLogin() :void{
    this.loginService.doLogin(this.requestLogin).subscribe(data =>{
      this.router.navigate(['dashboard'])
    },
    error =>{
      this.alertService.error('Email ou senha incorreeto!');
    })
    
  }

}
