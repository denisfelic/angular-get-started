export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image_url?: string;
  full_description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    image_url: 'https://picsum.photos/250/150',
    full_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dui turpis. Proin finibus vestibulum nulla eu pretium. Morbi ac ligula fermentum, scelerisque lorem vel, ullamcorper nunc. Suspendisse porttitor libero et laoreet ultrices. Cras aliquet lobortis velit, quis dictum felis interdum sit amet. Aenean et orci ac lorem volutpat posuere. In hac habitasse platea dictumst. Donec posuere sit amet tortor at elementum. Aenean varius porttitor vulputate.`
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    full_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dui turpis. Proin finibus vestibulum nulla eu pretium. Morbi ac ligula fermentum, scelerisque lorem vel, ullamcorper nunc. Suspendisse porttitor libero et laoreet ultrices. Cras aliquet lobortis velit, quis dictum felis interdum sit amet. Aenean et orci ac lorem volutpat posuere. In hac habitasse platea dictumst. Donec posuere sit amet tortor at elementum. Aenean varius porttitor vulputate.`

  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    image_url: 'https://picsum.photos/200/300',
    full_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dui turpis. Proin finibus vestibulum nulla eu pretium. Morbi ac ligula fermentum, scelerisque lorem vel, ullamcorper nunc. Suspendisse porttitor libero et laoreet ultrices. Cras aliquet lobortis velit, quis dictum felis interdum sit amet. Aenean et orci ac lorem volutpat posuere. In hac habitasse platea dictumst. Donec posuere sit amet tortor at elementum. Aenean varius porttitor vulputate.`
  },
  {
    id: 4,
    name: 'Samsung S23',
    price: 399,
    description: '',
    image_url: 'https://picsum.photos/200/300',
    full_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dui turpis. Proin finibus vestibulum nulla eu pretium. Morbi ac ligula fermentum, scelerisque lorem vel, ullamcorper nunc. Suspendisse porttitor libero et laoreet ultrices. Cras aliquet lobortis velit, quis dictum felis interdum sit amet. Aenean et orci ac lorem volutpat posuere. In hac habitasse platea dictumst. Donec posuere sit amet tortor at elementum. Aenean varius porttitor vulputate.`
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
