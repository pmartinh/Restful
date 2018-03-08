import { Injectable } from "@angular/core";

@Injectable()
export class LoginService {
    isLogged=false;
    login(username,password){
        if(username=="patri" && password=="simone")  this.isLogged=true;
        else  this.isLogged=false;

        return this.isLogged;
    }

    logout(){
        this.isLogged=false;
        return this.isLogged;
    }
}