import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducts } from 'src/app/interface/products';
import { CategoryService } from 'src/app/service/category.service';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-products-detailadmin',
  templateUrl: './products-detailadmin.component.html',
  styleUrls: ['./products-detailadmin.component.scss']
})
export class ProductsDetailadminComponent {
  products!: IProducts;
  category!: string;

  constructor(
    private router: ActivatedRoute,
    private productsService: ProductsService,
    private categoryService: CategoryService
  ) {
    const id = this.router.snapshot.paramMap.get('id');
    if (id) {
      this.productsService.getProduct(id).subscribe((data: any) => {
        this.products = data.products;
        console.log(data.products);
        
        
      });
    }

  }
  formatCurrency(value: number): string {
    const formatter = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0
    });

    return formatter.format(value);
  }
}