export interface IUser {
  name: string;
  email: string;
  description?: string;
  role: string;
  avatar?: string;
  password: string;
  status: string;
  phone?: string
  country?: string;
  
}

export const profileKeys = [
  { keyName: 'name' },
  { keyName: 'email' },
  { keyName: 'description' },
  { keyName: 'status' },
  { keyName: 'address' },
  { keyName: 'phone' },
  
]

export const profileInputFields = [
  { id: 1, name: 'name', label: 'Name' },
  { id: 2, name: 'email', label: 'Email' },
  { id: 3, name: 'description', label: 'Description' },
  { id: 4, name: 'address', label: 'Address' },
  { id: 5, name: 'phone', label: 'Phone' },
  
  
]