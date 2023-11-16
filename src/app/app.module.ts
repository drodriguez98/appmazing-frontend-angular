import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatIconModule, MatInputModule, MatRadioModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ContactHomeComponent } from './contact-home/contact-home.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ContactNewComponent } from './contact-new/contact-new.component';
import { FormsModule } from '@angular/forms';
import { ProductNewComponent } from './product-new/product-new.component';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { CommonModule, DatePipe } from '@angular/common';
import { ContactDeleteComponent } from './contact-delete/contact-delete.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';

@NgModule({

  declarations: [

    AppComponent,
    ContactHomeComponent,
    ContactDetailComponent,
    ProductHomeComponent,
    ProductDetailComponent,
    ContactNewComponent,
    ProductNewComponent,
    ContactEditComponent,
    ProductEditComponent,
    ContactDeleteComponent,
    ProductDeleteComponent,

  ],

  entryComponents: [ ContactDeleteComponent, ProductDeleteComponent ],

  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule, 
    CommonModule,
    MatDialogModule

  ],

  providers: [ DatePipe ],
  
  bootstrap: [AppComponent]

})

export class AppModule { }