export class Contact {
  FullName: string;
  Phone_Number: string;
  Email: string;
  Address: string;

  Card_Details: {
    holder_name: string;
    card_number: number;
    expiry_month: number;
    expiry_year: number;
    card_cvv: number;
  };

  DeliveryLocation: {
    latitude: number,
    longitude: number
  };
}
