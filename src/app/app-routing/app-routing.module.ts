import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from '../customer/customer.component';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
   { 
     path: 'customers', 
     component: CustomerComponent 
   },
   { 
     path: 'customer/add', 
     component: AddCustomerComponent 
   },
   { 
     path: 'customers/:id', 
     component: CustomerDetailsComponent 
   },
   { 
     path: '', 
     redirectTo: 'customers', 
     pathMatch: 'full'
   }, 
   {
     path: 'home',
     component: HomeComponent
   }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}