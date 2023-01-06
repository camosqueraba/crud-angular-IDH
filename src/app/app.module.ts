import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearUsuarioComponent } from './components/User/crear-usuario/crear-usuario.component';
import { EditUserComponent } from './components/User/edit-user/edit-user.component';
import { CreateProductComponent } from './components/product/create-product/create-product.component';
import { CreateUserComponent } from './components/User/create-user/create-user.component';
import { ListProductComponent } from './components/Product/list-product/list-product.component';
import { ListUserComponent } from './components/User/list-user/list-user.component';
import { EditProductComponent } from './components/Product/edit-product/edit-product.component';
import { EditCategoryComponent } from './components/Category/edit-category/edit-category.component';
import { ListCategoryComponent } from './components/Category/list-category/list-category.component';
import { CreateCategoryComponent } from './components/Category/create-category/create-category.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearUsuarioComponent,
    EditUserComponent,
    CreateProductComponent,
    CreateUserComponent,
    ListProductComponent,
    ListUserComponent,
    EditProductComponent,
    EditCategoryComponent,
    ListCategoryComponent,
    CreateCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
