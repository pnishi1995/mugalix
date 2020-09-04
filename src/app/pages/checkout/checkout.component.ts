import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  loginForm:FormGroup;
  invoiceform:FormGroup;
  shippingAddressForm:FormGroup;
  mycart;
  constructor() { 

    this.loginForm = new FormGroup({
      emailid: new FormControl(''),
      password:new FormControl('')
    })
    
    this.invoiceform = new FormGroup({
      retailInvoice:new FormControl(''),
      taxInvoice:new FormControl('')
    })
    
    this.shippingAddressForm = new FormGroup({
      name:new FormControl(''),
      email:new FormControl(''),
    })
  }

  emailSubmit(){
    console.log(this.loginForm.value);
  }
  submitInvoiceType(){
    console.log(this.invoiceform.value);
  }

  ngOnInit(): void {
    
  }

}
