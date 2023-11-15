import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})

export class ProductEditComponent implements OnInit {

  product: any;
  categories: any = [];

  constructor( private productService: ProductsService, private route: ActivatedRoute, private router: Router, private datePipe: DatePipe) {}

  ngOnInit() { 
    
    this.productService.getProduct(this.route.snapshot.params['id']).subscribe(data => { 

      this.product = data; 
      this.formatDate();
    
    });

    this.productService.getCategories().subscribe(data => { this.categories = data });

  }

  formatDate() {
    
      const date = new Date(this.product.date_added); // Convertir la cadena a un objeto Date
      this.product.date_added = this.datePipe.transform(date, 'yyyy-MM-dd');

  }

  editProduct(): void {

    this.productService.editProduct(this.product);
    this.navigateToDetail();

  }

  cancelEdit() { this.navigateToDetail(); }

  navigateToDetail() { this.router.navigate(['/product', this.route.snapshot.params['id']])};
}
