interface Buyer {
  email?: string;
  firstName?: string;
  lastName?: string;
  country?: string;
  city?: string;
  address?: string;
  postCode?: number | null;
  phoneNumber?: number;
}

export default Buyer;
