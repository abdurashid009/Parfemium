import React from 'react';

// Rasmlarni import qilamiz
import Par1 from '../assets/par1.png';
import Lux from '../assets/Lux.png';
import P3 from '../assets/P3.png';
import P4 from '../assets/P4.png';
import P5 from '../assets/P5.png';
import P6 from '../assets/P6.png';
import P7 from '../assets/P7.png';
import P8 from '../assets/P8.png';
import P9 from '../assets/P9.png';
import P10 from '../assets/P10.png';
import P11 from '../assets/P11.png';
import P12 from '../assets/P12.png';

const products = [
  {
    id: 1,
    name: "Luxurious Elixir Rough",
    price: 220,
    size: "100ml",
    rating: 4.9,
    reviews: 624,
    img: Par1, // ✅ importdan foydalanildi
  },
  {
    id: 2,
    name: "The Golden Legacy",
    price: 160,
    size: "100ml",
    rating: 4.8,
    reviews: 520,
    img: Lux,
  },
  {
    id: 3,
    name: "Luxurious Elixir",
    price: 250,
    size: "150ml",
    rating: 5.0,
    reviews: 711,
    img: P3,
  },
  {
    id: 4,
    name: "Luxurious Essence",
    price: 200,
    size: "100ml",
    rating: 4.7,
    reviews: 121,
    img: P4,
  },
  {
    id: 5,
    name: "Luxurious Essence",
    price: 220,
    size: "100ml",
    rating: 4.7,
    reviews: 121,
    img: P5,
  },
  {
    id: 6,
    name: "Luxurious Essence",
    price: 120,
    size: "100ml",
    rating: 4.7,
    reviews: 121,
    img: P6,
  },
  {
    id: 7,
    name: "Luxurious Essence",
    price: 200,
    size: "100ml",
    rating: 4.7,
    reviews: 121,
    img: P7,
  },
  {
    id: 8,
    name: "Luxurious Essence",
    price: 200,
    size: "100ml",
    rating: 4.7,
    reviews: 121,
    img: P8,
  },
  {
    id: 9,
    name: "Luxurious Essence",
    price: 200,
    size: "100ml",
    rating: 4.7,
    reviews: 121,
    img: P9,
  },
  {
    id: 10,
    name: "Luxurious Essence",
    price: 200,
    size: "100ml",
    rating: 4.7,
    reviews: 121,
    img: P10,
  },
  {
    id: 11,
    name: "Luxurious Essence",
    price: 100,
    size: "80ml",
    rating: 4.7,
    reviews: 121,
    img: P11,
  },
  {
    id: 12,
    name: "Luxurious Essence",
    price: 240,
    size: "90ml",
    rating: 4.7,
    reviews: 121,
    img: P12,
  }
];

export default products;
