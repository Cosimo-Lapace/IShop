import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css','../../components/product-components/product-list/product-list.component.css']
})
export class Error404Component implements OnInit {
  message:string;
  constructor(private router:Router){}
  ngOnInit(): void {
    if(this.router.isActive('/checkout/error', true)){
      this.message = "You do not have permission to access this section, please go back";
    }else{
      this.message ="Error 404 Page Not Found :-(";
    }
  }
}
