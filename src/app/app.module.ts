import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListUserComponent } from './components/User/list-user/list-user.component';
import { CreateUserComponent } from './components/User/create-user/create-user.component';
import { EditUserComponent } from './components/User/edit-user/edit-user.component';

import { ListProductComponent } from './components/Product/list-product/list-product.component';
import { CreateProductComponent } from './components/Product/create-product/create-product.component';
import { EditProductComponent } from './components/Product/edit-product/edit-product.component';

import { ListCategoryComponent } from './components/Category/list-category/list-category.component';
import { CreateCategoryComponent } from './components/Category/create-category/create-category.component';
import { EditCategoryComponent } from './components/Category/edit-category/edit-category.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,

    ListUserComponent,
    CreateUserComponent,
    EditUserComponent,

    ListProductComponent,
    CreateProductComponent,
    EditProductComponent,    
        
    ListCategoryComponent,
    CreateCategoryComponent,
    EditCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
