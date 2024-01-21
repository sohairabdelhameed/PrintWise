import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { appRoutes } from './route';
import {AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import{AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomePageComponent } from './PrintWisePage/HomePage/home-page/home-page.component';
import { OurServiceComponent } from './PrintWisePage/OurService/our-service/our-service.component';
import { ContactUsComponent } from './PrintWisePage/ContactUs/contact-us/contact-us.component';
import { LoginComponent } from './User/LogIn/login/login.component';
import { UploadDocumentComponent } from './upload-document/upload-document.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './User/siginUp/sign-up/sign-up.component';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
   AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
   //AngularFireStorageModule,
  ],
  declarations: [
    AppComponent,
    NavComponent,
    HomePageComponent,
    OurServiceComponent,
    ContactUsComponent,
    LoginComponent,
    UploadDocumentComponent,
    SignUpComponent,
 
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
