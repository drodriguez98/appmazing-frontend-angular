import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})

export class ProductEditComponent implements OnInit {

  product: any;
  categories: any = [];

  constructor( private productService: ProductsService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() { 
    
    this.productService.getProduct(this.route.snapshot.params['id']).subscribe(data => { this.product = data; });

    this.productService.getCategories().subscribe(data => { this.categories = data });

  }

  editProduct(): void {

    this.productService.editProduct(this.product);
    this.navigateToDetail();

  }

  cancelEdit() { this.navigateToDetail(); }

  navigateToDetail() { this.router.navigate(['/product', this.route.snapshot.params['id']])};


}
