export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image_url?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    image_url: 'https://picsum.photos/250/150',
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    image_url: 'https://picsum.photos/200/300',
  },
  {
    id: 4,
    name: 'Samsung S23',
    price: 399,
    description: '',
    image_url: 'https://picsum.photos/200/300',
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
