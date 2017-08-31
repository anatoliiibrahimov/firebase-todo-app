import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { TodoService } from './todos/shared/todo.service'
import { TodoModule } from './todos/shared/todo.module';
import { UserModule } from './user/shared/user.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GroupModule } from './groups/shared/group.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TodoModule,
    UserModule,
    GroupModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
