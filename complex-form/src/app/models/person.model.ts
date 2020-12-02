export interface Person {
  firstName: string;
  lastName: string;
  email: string;
  workAddress: Address;
  homeAddress: Address;
  children: Child[];
  fullName?: string;
}

export interface Address {
  country: string;
  city: string;
}

export interface Child {
  fullName: string;
  homeAddress: Address;

}
