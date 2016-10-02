import './polyfills';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app/app.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {AccountListComponent} from './account-list/account-list.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';

import {enableProdMode} from '@angular/core';
enableProdMode();

const routing = RouterModule.forRoot([
    { path: '',      component: WelcomeComponent },
    { path: 'account-list', component: AccountListComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent }
]);

@NgModule({
    imports: [BrowserModule,
    		  routing,
    		  HttpModule,
    		  FormsModule,
    		  ReactiveFormsModule],
    declarations: [AppComponent,
    			   WelcomeComponent,
    			   AccountListComponent,
                   AboutComponent,
                   ContactComponent
             ],
    //providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {}