import { Component } from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import { PasswordValidator } from "./passwordValidator";
import { LoginService } from "./login.service";

@Component({
selector:'login',
templateUrl:"login.component.html"

})
export class LoginComponent{

    form = new FormGroup({
        username:new FormControl('',  Validators.required),
        password: new FormControl('', Validators.compose([Validators.required,
            PasswordValidator.cannotContainSpace]))
    });
    login(){
        let loginService=new LoginService();
        var result = loginService.login(this.form.controls['username'].value, this.form.controls['password'].value)
        if(!result){ this.form.controls['password'].setErrors({invalidLogin:true});
    }
    }

}