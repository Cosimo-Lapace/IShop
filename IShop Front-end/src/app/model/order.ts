import { Product } from "./product";


export class Order {
  orderId: number;
  orderTrackingNumber: string;
  totalPrice: number;
  totalQuantity: number;
  status:String;
  dataCreated:Date;
  lastUpdated:Date;


  shippingAddressCity: string;
  shippingAddressCountry: string;
  shippingAddressState: string;
  shippingAddressSreet: string;
  shippingAddressZipCode: string;

  billingAddressCity: string;
  billingAddressCountry: string;
  billingAddressState: string;
  billingAddressSreet: string;
  billingAddressZipCode: string;

  products:Product[];
  orderQuantity:[];
  customerlastName:string;
  customerfirstName:string;
  customeremail:string;
}
