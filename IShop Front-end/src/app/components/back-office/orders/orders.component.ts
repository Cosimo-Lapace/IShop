import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { Order } from 'src/app/model/order';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css','../../page-components/header/header.component.css','../../cart-components/cart-detail/cart-detail.component.css']
})
export class OrdersComponent implements OnInit,OnDestroy {

  orders:Order[] = []
  pageNumber: number = 1; //number actually page
  pageSize: number = 5; //total page number
  totalElement: number = 0; //total elementi in the page

  constructor(private orderService:OrdersService){}
  pageChange(){
    this.ngOnInit();
  }
  selectedPagination(SelectedPagination :string){
    this.pageSize = +SelectedPagination;
    this.pageNumber = 1;
    this.getOrder();

}

  getOrder() {
    this.orderService.getOrders(this.pageNumber - 1, this.pageSize).subscribe(data => {
      this.orders = data.content;
      this.pageNumber = data.number + 1,
      this.pageSize = data.size;
      this.totalElement = data.totalElements;

    });
  }


ngOnInit(): void {
  this.getOrder()
}
ngOnDestroy(): void {

}
}
