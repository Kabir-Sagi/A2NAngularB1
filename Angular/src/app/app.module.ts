import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyfirstComponent } from './myfirst/myfirst.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { StudentInformationComponent } from './student-information/student-information.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { NgstyleclassComponent } from './ngstyleclass/ngstyleclass.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PropertyclassComponent } from './propertyclass/propertyclass.component';
import { EvendatabindingComponent } from './evendatabinding/evendatabinding.component';
 import {FormsModule} from '@angular/forms';
import { TwowayDBComponent } from './twoway-db/twoway-db.component';
import { FilterdataComponent } from './filterdata/filterdata.component';
import { CustompipePipe } from './custompipe.pipe';
import { Comp3Component } from './comp3/comp3.component';
import { HomeComponent } from './Routing/home/home.component';
import { EmployeeComponent } from './Routing/employee/employee.component';
import { StocksComponent } from './Routing/stocks/stocks.component';
import { NavbarComponent } from './Routing/navbar/navbar.component';
import { ParentComponent } from './ComponentInteraction/parent/parent.component';
import { ChildComponent } from './ComponentInteraction/child/child.component'

@NgModule({
  declarations: [
    AppComponent,
    MyfirstComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    MenuComponent,
    LandingpageComponent,
    StudentInformationComponent,
    Comp1Component,
    Comp2Component,
    NgstyleclassComponent,
    DatabindingComponent,
    PropertyclassComponent,
    EvendatabindingComponent,
    TwowayDBComponent,
    FilterdataComponent,
    CustompipePipe,
    Comp3Component,
    HomeComponent,
    EmployeeComponent,
    StocksComponent,
    NavbarComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
