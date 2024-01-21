import { Routes } from '@angular/router';
import { HomePageComponent } from './PrintWisePage/HomePage/home-page/home-page.component';
import { OurServiceComponent } from './PrintWisePage/OurService/our-service/our-service.component';
import { ContactUsComponent } from './PrintWisePage/ContactUs/contact-us/contact-us.component';
import { LoginComponent } from './User/LogIn/login/login.component';
import { UploadDocumentComponent } from './upload-document/upload-document.component';
import { SignUpComponent } from './User/siginUp/sign-up/sign-up.component';

export const appRoutes: Routes = [
    { path: 'HomePage', component: HomePageComponent },
    { path: '', redirectTo: '/HomePage', pathMatch: 'full' },
    {path:'OurService' , component:OurServiceComponent},
    {path:'contact',component:ContactUsComponent},
    {path:'signUp',component:SignUpComponent},
    {path:'logIn',component:LoginComponent},
    {path:'upload',component:UploadDocumentComponent},
];
