export interface Immobilier {
  id: number;
  title: string;//2
  description: string;//3
  price: number;//en bas gauch
  rating: number;
  superhost: boolean;// en haut gauch
  location: string;
  capacity: Capacity;
  image: string;//1

}

export interface Capacity {
  bedroom: number;//4
  people: number;
}

