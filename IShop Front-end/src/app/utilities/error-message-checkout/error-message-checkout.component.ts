import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-message-checkout',
  templateUrl: './error-message-checkout.component.html',
  styleUrls: ['./error-message-checkout.component.css']
})
export class ErrorMessageCheckoutComponent {

  @Input() element:any;
  @Input() textElement:string;

}
