import { Component } from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import { PasswordValidator } from "./passwordValidator";
import { LoginService } from "./login.service";
import { Router } from "@angular/router";

@Component({
selector:'login',
templateUrl:"login.component.html"

})
export class LoginComponent{

    constructor(private _router:Router, private _loginService:LoginService){

    }

    form = new FormGroup({
        username:new FormControl('',  Validators.required),
        password: new FormControl('', Validators.compose([Validators.required,
            PasswordValidator.cannotContainSpace]))
    });
    login(){
        
        var result = this._loginService.login(this.form.controls['username'].value, this.form.controls['password'].value)
        console.log(result);
        if(!result){ this.form.controls['password'].setErrors({invalidLogin:true});
        if (result){
            this._router.navigate(['']);
        }
    }
    }

}