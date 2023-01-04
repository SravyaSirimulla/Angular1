import { Quote } from './../models/quote.model';
import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../services/quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  dsaQuote!: Quote;
  dfnQuote!: Quote;
  isDfn: boolean = false;
  quoteId: string = "";
  quote: Quote = {
    id: "",
    quoteId: "",
    accountNumber: "",
    customerNumber: "",
    accountName: "",
    customerName: "",
    products: [""],
    billToAddress: "",
    soldToAddress: "",
    shipToAddress: "",
    installAtAddress: ""
  };
  products: string = "";
  showShipping: boolean = false;
  shippingOptions: {type: string, price: number}[] = [
    { type: "Standard", price: 6.95 },
    { type: "Priority", price: 21.50}
  ];
  subtotal: number = 100.00;
  shippingCost: number = 0;
  tax: number = 0;
  showTax: boolean = false;

  constructor(private quoteservice: QuoteService) { }

  ngOnInit(): void {
  }

  getQuote(id: HTMLInputElement) {
    this.isDfn = false;
    this.showShipping = false;
    this.showTax = false;
    this.shippingCost = 0;
    this.tax = 0;
    this.quoteId = id.value;

    this.quoteservice.getDSAQuote(this.quoteId)
      .subscribe(
        quote => {
          this.dsaQuote = quote;
          this.quote = quote;
          this.products = this.quote.products.join(", ");
        },
        error => {
          console.log(error);
      });

    this.quoteservice.getDFNQuote(this.quoteId)
      .subscribe(
        quote => {
          this.dfnQuote = quote;
        },
        error => {
          console.log(error);
      });
  }

  toggleQuote() {
    if (this.isDfn) {
      this.quote = this.dsaQuote
      this.showShipping = false;
      this.showTax = false;
      this.shippingCost = 0;
      this.tax = 0;
    }
    else {
      this.quote = this.dfnQuote
    }

    this.isDfn = !this.isDfn;
  }

  updateShipping(shippingType: string) {
    for (var i = 0; i < this.shippingOptions.length; i++)
    {
      if (this.shippingOptions[i].type == shippingType)
        this.shippingCost = this.shippingOptions[i].price;
    }
  }

}
