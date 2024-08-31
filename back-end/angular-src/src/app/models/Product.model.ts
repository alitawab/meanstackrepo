export interface Product {
  _id: string ;
  name: string | Blob;
  category: string | Blob;
  offer: string | Blob;
  price: string | Blob;
  quantity: string | Blob;
  productImage: Array<any>;
}
