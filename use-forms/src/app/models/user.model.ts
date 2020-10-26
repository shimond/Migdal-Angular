export interface UserModel {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    userStatus: number;
    address: Address;
}
export interface Address {
    city: string;
    street: string;
}




