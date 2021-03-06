import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getAllProducts(): Product[]{
    return this.products;
  }

  getProductDetialsById(id: number) {
    return this.products.filter((product) => product.id == id)[0];
  }

  getProductsByCategory(id: number): Product[] {
    return this.products.filter((product) => product.category == id);
  }

  getProductsBySearch(word: string): Product[] {
    return this.products.filter((product) => {
      if (product.title.toLowerCase().search(word.toLowerCase()) != -1 || product.brand.toLowerCase().search(word.toLowerCase()) != -1) {
        return true;
      }
      else {
        for (let i = 0; i < product.features.length; i++){
          if (product.features[i].toLowerCase().search(word.toLowerCase()) != -1) {
            return true;
          }
        }
        return false;
      }
    });
  }

  products: Product[] = [
  {
    id: 1,
    title: 'ThinkPad X1 Yoga Gen 4',
    poster: '../../../assets/lenovo.webp',
    rating: 4,
    review: 806,
    price: 41252,
    features: [
      'The ultimate in flexibility',
      'Thinner. Lighter. More secure.',
      '35.56cms (14) 2-in-1 laptop with a 360-degree hinge',
      'Up to 18 hours of battery life',
      'Built-in suite of ThinkShield security features',
      'Includes a rechargeable ThinkPad Pen Pro',
      'Optional 4K display with Dolby Vision™ and Dolby Atmos™ Speaker System',
      'A new level of creativity and entertainment'
    ],
    is_available: true,
      category: 1,
    brand: "Lenovo",
  },
  {
    id: 2,
    title: 'New Inspiron 14 5402 Laptop',
    poster: 'https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/inspiron_notebooks/14_5401_5408/pdp/notebooks-inspiron-14-5401-5408-laptop-pdp-design-gallery504x350_silver.jpg?fmt=jpg&wid=570&hei=400',
    rating: 3.9,
    review: 542,
    price: 59989.99,
    features: [
      '11th Generation Intel® Core™ i5-1135G7 Processor (8MB Cache, up to 4.2 GHz)',
      'Windows 10 Home Single Language, English',
      'Intel® Iris® Xe Graphics with shared graphics memory',
      '8GB, 1x8GB, DDR4, 3200MHz',
      '512GB M.2 PCIe NVMe Solid State Drive',
      'Platinum Silver (ICC)',
      'Ports & Slots'
    ],
    is_available: true,
    category: 1,
    brand: "Dell",
  },
  {
    id: 3,
    title: 'OnePlus 8T 5G',
    poster: 'https://images-na.ssl-images-amazon.com/images/I/71m05O2uNdL._SL1500_.jpg',
    rating: 4,
    review: 4200,
    price: 45999.00,
    features: [
      'Rear Quad Camera with 48 MP Sony IMX586 Sensor, 16 MP Ultra Wide Angle, 5 MP macro lens and 2 MP monochrome lens | Front Camera with 16 MP Sony IMX471 Sensor',
      '6.55 inch ( 16.63 centimeters) 120 Hz Fluid AMOLED Display with 2400 X 1080 Pixels resolution, 402 PPI density',
      '2.86 GHz Qualcomm Snapdragon 865 Octa-core Processor + Adreno 650 GPU ,Oxygen OS based on Android 11 Operating system',
      '12 GB RAM | 256 GB ROM',
      '4500 mAH Lithium-ion battery with 65 W “Warp charge”',
      '1 year Manufacturer warranty for Device, Battery and in-box Accessories from the date of purchase',
      'Box also includes: OnePlus 8T,Warp Charge 65 Power Adapter, Warp Charge Type-C to Type-C Cable, Quick Start Guide, Welcome Letter, Safety Information and Warranty Card, LOGO Sticker, Case, Screen Protector, SIM Tray Ejector',
      'Important features: Face Unlock, HDR, Screen Flash, Face Retouching, CINE Aspect Ratio Video Recording, Video Portrait, UltraShot HDR, Nightscape, Macro, Portrait, Pro Mode, Panorama, Smart Pet Capture, AI Scene Detection, RAW Image, Filter, Video Focus Tracking, Super Stable, Video Nightscape, Dual Stereo Speakers, Noise cancellation support, Dolby Atmos',
    ],
    is_available: true,
    category: 2,
    brand: "One Plus",
  },
  {
    id: 4,
    title: 'Micromax IN Note 1',
    poster: 'https://rukminim1.flixcart.com/image/416/416/kgzg8sw0/mobile/n/v/g/micromax-in-note-1-e7746-original-imafx3wgfxgd7qfy.jpeg?q=70',
    rating: 4.4,
    review: 3300,
    price: 10999,
    features: [
      '4 GB RAM | 64 GB ROM | Expandable Upto 256 GB',
      '16.94 cm (6.67 inch) Full HD+ Display',
      '48MP + 5MP + 2MP + 2MP | 16MP Front Camera',
      '5000 mAh Li-Polymer Battery',
      'MediaTek Helio G85 (MT6769V/CZ) Processor'
    ],
    is_available: true,
    category: 2,
    brand: "Micromax",
  },
  {
    id: 5,
    title: 'Apple AirPods with Charging Case',
    poster: 'https://images-na.ssl-images-amazon.com/images/I/71NTi82uBEL._SL1500_.jpg',
    rating: 4,
    review: 5131,
    price: 12490,
    features: [
      'Automatically on, automatically connected',
      'Easy setup for all your Apple devices',
      'Quick access to Siri by saying “Hey Siri”',
      'Double-tap to play or skip forward',
      'New Apple H1 headphone chip delivers faster wireless connection to your devices',
      'Charges quickly in the case',
      'Case can be charged using the Lightning connector'
    ],
    is_available: true,
    category: 3,
    brand: "Apple",
    
  },
  {
    id: 1,
    title: 'ThinkPad X1 Yoga Gen 4',
    poster: '../../../assets/lenovo.webp',
    rating: 4,
    review: 806,
    price: 41252,
    features: [
      'The ultimate in flexibility',
      'Thinner. Lighter. More secure.',
      '35.56cms (14) 2-in-1 laptop with a 360-degree hinge',
      'Up to 18 hours of battery life',
      'Built-in suite of ThinkShield security features',
      'Includes a rechargeable ThinkPad Pen Pro',
      'Optional 4K display with Dolby Vision™ and Dolby Atmos™ Speaker System',
      'A new level of creativity and entertainment'
    ],
    is_available: true,
    category: 1,
    brand: "Lenovo",
  },
  {
    id: 1,
    title: 'ThinkPad X1 Yoga Gen 4',
    poster: '../../../assets/lenovo.webp',
    rating: 4,
    review: 806,
    price: 41252,
    features: [
      'The ultimate in flexibility',
      'Thinner. Lighter. More secure.',
      '35.56cms (14) 2-in-1 laptop with a 360-degree hinge',
      'Up to 18 hours of battery life',
      'Built-in suite of ThinkShield security features',
      'Includes a rechargeable ThinkPad Pen Pro',
      'Optional 4K display with Dolby Vision™ and Dolby Atmos™ Speaker System',
      'A new level of creativity and entertainment'
    ],
    is_available: true,
    category: 1,
    brand: "Lenovo",
  },
  {
    id: 1,
    title: 'ThinkPad X1 Yoga Gen 4',
    poster: '../../../assets/lenovo.webp',
    rating: 4,
    review: 806,
    price: 41252,
    features: [
      'The ultimate in flexibility',
      'Thinner. Lighter. More secure.',
      '35.56cms (14) 2-in-1 laptop with a 360-degree hinge',
      'Up to 18 hours of battery life',
      'Built-in suite of ThinkShield security features',
      'Includes a rechargeable ThinkPad Pen Pro',
      'Optional 4K display with Dolby Vision™ and Dolby Atmos™ Speaker System',
      'A new level of creativity and entertainment'
    ],
    is_available: true,
    category: 1,
    brand: "Lenovo",
  },
  {id: 1,
    title: 'ThinkPad X1 Yoga Gen 4',
    poster: '../../../assets/lenovo.webp',
    rating: 4,
    review: 806,
    price: 41252,
    features: [
      'The ultimate in flexibility',
      'Thinner. Lighter. More secure.',
      '35.56cms (14) 2-in-1 laptop with a 360-degree hinge',
      'Up to 18 hours of battery life',
      'Built-in suite of ThinkShield security features',
      'Includes a rechargeable ThinkPad Pen Pro',
      'Optional 4K display with Dolby Vision™ and Dolby Atmos™ Speaker System',
      'A new level of creativity and entertainment'
    ],
    is_available: true,
    category: 1,
    brand: "Lenovo",
  },
  {
    id: 1,
    title: 'ThinkPad X1 Yoga Gen 4',
    poster: '../../../assets/lenovo.webp',
    rating: 4,
    review: 806,
    price: 41252,
    features: [
      'The ultimate in flexibility',
      'Thinner. Lighter. More secure.',
      '35.56cms (14) 2-in-1 laptop with a 360-degree hinge',
      'Up to 18 hours of battery life',
      'Built-in suite of ThinkShield security features',
      'Includes a rechargeable ThinkPad Pen Pro',
      'Optional 4K display with Dolby Vision™ and Dolby Atmos™ Speaker System',
      'A new level of creativity and entertainment'
    ],
    is_available: true,
    category: 1,
    brand: "Lenovo",
  },
  {
    id: 1,
    title: 'ThinkPad X1 Yoga Gen 4',
    poster: '../../../assets/lenovo.webp',
    rating: 4,
    review: 806,
    price: 41252,
    features: [
      'The ultimate in flexibility',
      'Thinner. Lighter. More secure.',
      '35.56cms (14) 2-in-1 laptop with a 360-degree hinge',
      'Up to 18 hours of battery life',
      'Built-in suite of ThinkShield security features',
      'Includes a rechargeable ThinkPad Pen Pro',
      'Optional 4K display with Dolby Vision™ and Dolby Atmos™ Speaker System',
      'A new level of creativity and entertainment'
    ],
    is_available: true,
    category: 1,
    brand: "Lenovo",
  },
  {
    id: 1,
    title: 'ThinkPad X1 Yoga Gen 4',
    poster: '../../../assets/lenovo.webp',
    rating: 4,
    review: 806,
    price: 41252,
    features: [
      'The ultimate in flexibility',
      'Thinner. Lighter. More secure.',
      '35.56cms (14) 2-in-1 laptop with a 360-degree hinge',
      'Up to 18 hours of battery life',
      'Built-in suite of ThinkShield security features',
      'Includes a rechargeable ThinkPad Pen Pro',
      'Optional 4K display with Dolby Vision™ and Dolby Atmos™ Speaker System',
      'A new level of creativity and entertainment'
    ],
    is_available: true,
    category: 1,
    brand: "Lenovo",
  },

  ];


  
}
