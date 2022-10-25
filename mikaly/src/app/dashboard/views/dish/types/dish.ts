export interface Dish {
  _id: string;
  img: string;
  imgPath: string;
  name: string;
  ingredients: string;
  price: number;
  status: string;
  qty?: number;
}
