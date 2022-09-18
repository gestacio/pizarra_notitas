export interface Product {
  name: string;
  price: number;
  image: string;
  category?: string;
}


export interface Priority {
  value: string;
  description: string;
}


export interface ToDoCard {
  name: string;
  priority: string;
  status: string;
  category: string;
  comment?: string;
}
