import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { QuoteService } from './services/quote.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuoteComponent } from './quote/quote.component';
import { HeaderComponent } from './Header/Header.component';
import { FooterComponent } from './Footer/Footer.component';
import { TabComponent } from './Tab/Tab.component';
import { StaticbreadcrumbComponent } from './staticbreadcrumb/staticbreadcrumb.component';
import { DynamicbcComponent } from './dynamicbc/dynamicbc.component';
import { DynamicbcModule } from './dynamicbc/dynamicbc.module';
import { BreadcrumbModule, BreadcrumbService } from "xng-breadcrumb";
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicRoutingComponent } from './DynamicRouting/DynamicRouting.component';
import { DynamicRoutingRouteModule } from './DynamicRouting/DynamicRouting-routing.module';
//import { BreadcrumbModule } from 'xng-breadcrumb/lib/breadcrumb.module';
//import { BreadcrumbService } from 'xng-breadcrumb/lib/breadcrumb.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuoteComponent,
    HeaderComponent,
    FooterComponent,
    TabComponent,
    StaticbreadcrumbComponent,
    DynamicbcComponent,
    DynamicRoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DynamicbcModule,
    BreadcrumbModule,
    MatIconModule,
    BrowserAnimationsModule,
    DynamicRoutingRouteModule
  ],
  providers: [
    BreadcrumbService,
    QuoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
