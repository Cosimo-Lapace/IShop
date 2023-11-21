export class Order {
  orderId: number;
  orderTrackingNumber: string;
  totalPrice: number;
  totalQuantity: number;

  billingAddressCity: string;
  billingAddressCountry: string;
  billingAddressState: string;
  billingAddressSreet: string;
  billingAddressZipCode: string;

  shippingAddressCity: string;
  shippinhAddressCountry: string;
  shippingAddressState: string;
  shippingAddressSreet: string;
  shippingAddressZipCode: string;

  customerId: number;

  orderItemQuantity:number;

  customerFirstName: string;
  customerLastName: string;
  customerEmail: string;

  productId: number;

  productName: string;
  productImageUrl: string;
  productDescription: string;
  productUnitPrice: number;
}
