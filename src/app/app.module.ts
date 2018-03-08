import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { Http } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { GitHubComponent } from './github.component';
import { NotFoundComponent } from './notfound.component';
import { routing } from './app.routing';
import { GitHubUserComponent } from './github.user.component';
import { AuthGuard } from './auth-guard.service';
import { LoginService } from './login.service';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [
    AppComponent,HomeComponent,GitHubComponent,NotFoundComponent, GitHubUserComponent,LoginComponent
  ],
  imports: [
    BrowserModule,HttpModule,ReactiveFormsModule,routing
  ],
  providers: [AuthGuard, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
