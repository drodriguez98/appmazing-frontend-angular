import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { Product } from '../model/Product';
import { Category } from '../model/Category';

@Component({

  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']

})

export class ProductNewComponent implements OnInit {

  product : Product = new Product();
  category : Category = new Category();

  categories: any = [];

  constructor( private router : Router, private productsService: ProductsService) {}

  ngOnInit() {

    this.productsService.getCategories().subscribe(data => { this.categories = data }); 

  }

  newProduct() {

    const newProduct = {

      name : this.product.name,
      stock : this.product.stock,
      price : this.product.price,
      active : this.product.active,
      date_added : this.product.date_added,
      category_id : this.category

    }

    this.productsService.newProduct(newProduct);

    this.navigateToHome();

  }

  cancelInsert() { this.navigateToHome(); }

  navigateToHome() { this.router.navigate(['/products']); }

}
