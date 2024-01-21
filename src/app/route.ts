import { Routes } from '@angular/router';
import { HomePageComponent } from './PrintWisePage/HomePage/home-page/home-page.component';
import { OurServiceComponent } from './PrintWisePage/OurService/our-service/our-service.component';
import { ContactUsComponent } from './PrintWisePage/ContactUs/contact-us/contact-us.component';

export const appRoutes: Routes = [
    { path: 'HomePage', component: HomePageComponent },
    { path: '', redirectTo: '/HomePage', pathMatch: 'full' },
    {path:'OurService' , component:OurServiceComponent},
    {path:'contact',component:ContactUsComponent}
];
