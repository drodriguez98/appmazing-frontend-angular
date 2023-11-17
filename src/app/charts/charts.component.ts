// Imports

import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { ProductsService } from '../products.service';

// Component

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})

// ChartsComponent class

export class ChartsComponent implements OnInit {

  // Contacts charts arrays

  initialLetter = [];
  contactsByFullName = [];
  emailExtensions = [];
  phonePrfixData = [];

  // Product charts arrays

  productQuantityByCategory = [];
  priceRangeByCategory = [];

  // Constructor

  constructor( 

    private contactService: ContactsService, 
    private productService: ProductsService

  ) {}

  // OnInit

  ngOnInit() { 

    this.contactService.getContacts().subscribe(contacts => {

      this.initialLetter = this.calculateInitialLettersData(contacts); 
      this.contactsByFullName = this.calculateContactsByFullName(contacts);
      this.emailExtensions = this.calculateEmailExtensionsData(contacts);
      this.phonePrfixData = this.generatePhonePrefixData(contacts);

    })

    this.productService.getProducts().subscribe(products => {

      this.priceRangeByCategory = this.calculatePriceRangeByCategory(products);
      this.productQuantityByCategory = this.calculateProductQuantityByCategory(products);

    });

  }

  // Contacts methods

  calculateInitialLettersData(contacts: any[]): any {

    return contacts.reduce((result,  contact) => {

      const initial = contact.surname1.charAt(0).toUpperCase();

      if(result.find(item => item.name === initial)) {

        result.find(item => item.name === initial).value++; 

      } else { result.push({name: initial, value: 1}) }

      return result;

    }, [] )

  }

  calculateContactsByFullName (contacts: any[]): any {

    let tempContactsByFullName = [{

      name:'Contacts',
      series: []

    }];

    contacts.forEach(contact => {

      let fullName = contact.name + contact.surname1 + contact.surname2;
      const size = fullName.length;
      const range = `${size - (size % 5)} - ${size - (size % 5) +4} ch.`;
      let existingRange = tempContactsByFullName[0].series.find(item => item.name === range);

      if (existingRange) {

        existingRange.value++;

      } else { tempContactsByFullName[0].series.push({ name: range, value: 1 }); }

    });
    
    return tempContactsByFullName.map(entry => {

      return {

        ...entry,
        series: entry.series.sort((a,b) => Number(a.name.split('-')[0]) - Number(b.name.split('-')[0]))

      }

    })

  }

  calculateEmailExtensionsData(contacts: any[]): any {

    let emailExtensionMap = new Map<string, number>();

    contacts.forEach(contact => {

      let emailParts = contact.email.split('@');

      if (emailParts.length == 2) {

        const domain = emailParts[1];
        const firstDomainIndex = domain.indexOf('.');

        if (firstDomainIndex != 1) {

          const extension = domain.substring(firstDomainIndex);

          if (emailExtensionMap.has(extension)) {

            emailExtensionMap.set(extension, emailExtensionMap.get(extension) + 1);

          } else { emailExtensionMap.set(extension, 1); }

        }

      }

    });

    let emailExtensions = [];
    emailExtensionMap.forEach((value, key) => { emailExtensions.push({name: key, value: value}); });

    return emailExtensions;

  }
 
  generatePhonePrefixData(contacts: any[]): any {

    let phonePrefixData = [];
    let prefixCounts = {};

    contacts.forEach(contact => {

      const phonePrefix = contact.phone.substring(0,3);

      if (prefixCounts[phonePrefix]) {

        prefixCounts[phonePrefix]++;

      } else { prefixCounts[phonePrefix] = 1; }

    });

    for (let prefix in prefixCounts) {

      if (prefixCounts.hasOwnProperty(prefix)) { phonePrefixData.push({name: prefix, value: prefixCounts[prefix]}) }

    }

    return phonePrefixData;

  }

  // Products methods

  calculateProductQuantityByCategory(products: any[]): any[] {

    const categoriesQuantityData = {};

    products.forEach(product => {

      const categoryName = product.category_id.name;
      categoriesQuantityData[categoryName] = (categoriesQuantityData[categoryName] || 0) + 1;

    });

    return Object.keys(categoriesQuantityData).map(categoryName => ({

      name: categoryName,
      value: categoriesQuantityData[categoryName]

    }));
    
  }

  calculatePriceRangeByCategory(products: any[]): any[] {

    const categoriesData = [];
  
    products.forEach(product => {

      const categoryName = product.category_id.name;

      const existingCategoryIndex = categoriesData.findIndex(item => item.name === categoryName);
  
      if (existingCategoryIndex !== -1) {

        const productPrice = product.price;
        const existingCategory = categoriesData[existingCategoryIndex];
        existingCategory.minPrice = Math.min(existingCategory.minPrice, productPrice);
        existingCategory.maxPrice = Math.max(existingCategory.maxPrice, productPrice);

      } else {

        const productPrice = product.price;
        categoriesData.push({ name: categoryName, minPrice: productPrice, maxPrice: productPrice });

      }

    });

    const formattedCategoriesData = categoriesData.map(category => {

      return { name: category.name, value: category.maxPrice - category.minPrice };

    });

    return formattedCategoriesData;
    
  }

}