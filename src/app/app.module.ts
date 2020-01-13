import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { MatDialogModule } from '@angular/material'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout';
import { ExploreComponent } from './explore/explore.component';
import { RecommendComponent } from './explore/recommend/recommend.component';
import { SearchComponent } from './explore/search/search.component';
import { HistoryComponent } from './explore/history/history.component';
import { UserService } from './user.service';
import { ProfileComponent } from './auth/profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    ExploreComponent,
    RecommendComponent,
    SearchComponent,
    HistoryComponent,
    ProfileComponent,
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule, 
    FormsModule,
    FlexLayoutModule,
    ],
  providers: [UserService],
  bootstrap: [AppComponent],
  entryComponents: [ProfileComponent]
})
export class AppModule { }
