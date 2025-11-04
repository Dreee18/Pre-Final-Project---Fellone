import { useContext, useEffect } from "react";
import "../styles/product_container.css";
import Card from "./Card";
import ProductAdder from "./ProductAdder";
import { ProductContext } from "../Context";

import WirelesssHeadphones from "../assets/images/WirelessHeadphones.png";
import RunningShoes from "../assets/images/RunningShoes.png";
import SmartWatch from "../assets/images/Smartwatch.png";
import Vivobook16 from "../assets/images/Vivobook16.png";
import MacBookAirM2 from "../assets/images/MacbookAirM2.png";
import HP15s from "../assets/images/HP15s.png";
import DellInspiron14 from "../assets/images/DellInspiron14.png";
import LenovoIdeaPad3 from "../assets/images/LenovoIdeaPad3.png";
import iPhone15 from "../assets/images/Iphone15.png";
import SamsungGalaxyS23 from "../assets/images/SamsungGalaxyS23.png";
import SonyWH1000XM5 from "../assets/images/SonyWH1000XM5.png";
import LGUltragear27 from "../assets/images/LGUltraGear27.png";
import AppleWatchSeries9 from "../assets/images/AppleWatchSeries9.png";
function Product_List() {
  const context = useContext(ProductContext);
  if (!context) return null;
  const { product, setProduct } = context;

  let staticProducts = [
    {
      image: WirelesssHeadphones,
      name: "Wireless Bluetooth Headphones",
      description: "High-quality sound with noise cancellation.",
      specifications: ["Bluetooth 5.0", "20h Battery Life", "Over-Ear"],
      price: 79.99,
      stock: 42,
      category: ["Electronics", "Audio"],
      rating: 4.5,
    },
    {
      image: RunningShoes,
      name: "Running Shoes",
      description: "Comfortable and durable running shoes for all terrains.",
      specifications: [
        "Size Range: 6-12",
        "Color: Black/White",
        "Weight: 250g",
      ],
      price: 59.99,
      stock: 30,
      category: ["Footwear", "Sports"],
      rating: 3.2,
    },
    {
      image: SmartWatch,
      name: "Smartwatch",
      description:
        "Stay connected and track your fitness with this sleek smartwatch.",
      specifications: ["Heart Rate Monitor", "GPS", "Water Resistant"],
      price: 199.99,
      stock: 2,
      category: ["Electronics", "Wearables"],
      rating: 5,
    },
    {
      image: Vivobook16,
      name: "Vivobook 16",
      description:
        "The ASUS Vivobook 16 is a sleek and powerful laptop designed for everyday productivity and entertainment. Featuring a 16-inch WUXGA display, AMD Ryzen 5 or Intel Core i5 processors, and long battery life, it delivers exceptional performance in a lightweight form factor. Ideal for students, professionals, and casual users alike.",
      specifications: [
        "Display: 16-inch WUXGA (1920 x 1200) anti-glare IPS panel",
        "Processor: AMD Ryzen 5 7530U / Intel Core i5-1335U (depending on variant)",
        "Graphics: Integrated AMD Radeon / Intel Iris Xe",
        "Memory: 8GB / 16GB DDR4 RAM",
        "Storage: 512GB PCIe NVMe SSD",
        "Operating System: Windows 11 Home",
        "Battery: 42Wh / up to 8 hours battery life",
        "Weight: 1.8 kg",
        "Ports: USB-C, USB-A, HDMI, audio combo jack, microSD card reader",
        "Webcam: 720p HD with privacy shutter",
      ],
      price: 46000.0,
      stock: 4,
      category: ["Laptops", "ASUS", "Vivobook Series"],
      rating: 4.8,
    },
    {
      image: MacBookAirM2,
      name: "MacBook Air M2",
      description:
        "Apple’s MacBook Air M2 redefines portability and performance with its ultra-thin design, powerful M2 chip, and up to 18 hours of battery life. Perfect for professionals and students seeking smooth multitasking and premium build quality.",
      specifications: [
        "Display: 13.6-inch Liquid Retina (2560 x 1664)",
        "Processor: Apple M2 chip (8-core CPU, 8-core GPU)",
        "Memory: 8GB / 16GB Unified RAM",
        "Storage: 256GB / 512GB SSD",
        "Operating System: macOS Monterey / Ventura",
        "Battery: Up to 18 hours",
        "Weight: 1.24 kg",
        "Ports: 2x Thunderbolt 4, MagSafe 3, Audio Jack",
        "Webcam: 1080p FaceTime HD",
      ],
      price: 114900.0,
      stock: 3,
      category: ["Laptops", "Apple", "MacBook Series"],
      rating: 4.8,
    },
    {
      image: HP15s,
      name: "HP 15s",
      description:
        "The HP 15s is a reliable and affordable laptop ideal for students and home users. Equipped with AMD Ryzen 5 or Intel Core i5 processors, it delivers balanced performance for work, entertainment, and light gaming.",
      specifications: [
        "Display: 15.6-inch FHD (1920 x 1080) micro-edge display",
        "Processor: AMD Ryzen 5 5500U / Intel Core i5-1235U",
        "Graphics: AMD Radeon / Intel Iris Xe",
        "Memory: 8GB DDR4",
        "Storage: 512GB SSD",
        "Operating System: Windows 11 Home",
        "Battery: 41Wh / up to 7 hours",
        "Weight: 1.69 kg",
        "Ports: USB Type-C, USB Type-A, HDMI, SD card reader",
        "Webcam: 720p HD with integrated dual mics",
      ],
      price: 48990.0,
      stock: 8,
      category: ["Laptops", "HP", "Everyday Use"],
      rating: 4.3,
    },
    {
      image: DellInspiron14,
      name: "Dell Inspiron 14",
      description:
        "The Dell Inspiron 14 combines performance and portability with Intel’s 13th Gen Core i5 processor, a sleek metal design, and long battery life. Designed for multitasking and productivity on the go.",
      specifications: [
        "Display: 14-inch FHD (1920 x 1080) WVA display",
        "Processor: Intel Core i5-1335U",
        "Graphics: Intel Iris Xe Graphics",
        "Memory: 8GB LPDDR5",
        "Storage: 512GB SSD",
        "Operating System: Windows 11 Home",
        "Battery: 54Wh / up to 10 hours",
        "Weight: 1.54 kg",
        "Ports: USB-C, USB-A, HDMI, Audio Jack",
        "Webcam: 1080p with privacy shutter",
      ],
      price: 58990.0,
      stock: 5,
      category: ["Laptops", "Dell", "Inspiron Series"],
      rating: 3.4,
    },
    {
      image: LenovoIdeaPad3,
      name: "Lenovo IdeaPad 3",
      description:
        "The Lenovo IdeaPad 3 is a budget-friendly laptop that doesn’t compromise on essential performance. With a 15.6-inch FHD display and Ryzen 5 processor, it’s great for daily computing and entertainment.",
      specifications: [
        "Display: 15.6-inch FHD (1920 x 1080) anti-glare display",
        "Processor: AMD Ryzen 5 5500U",
        "Graphics: AMD Radeon Graphics",
        "Memory: 8GB DDR4",
        "Storage: 512GB SSD",
        "Operating System: Windows 11 Home",
        "Battery: 45Wh / up to 8 hours",
        "Weight: 1.65 kg",
        "Ports: USB-C, USB-A, HDMI, Audio Jack, SD card reader",
        "Webcam: 720p with privacy shutter",
      ],
      price: 42990.0,
      stock: 10,
      category: ["Laptops", "Lenovo", "IdeaPad Series"],
      rating: 4.2,
    },
    {
      image: iPhone15,
      name: "iPhone 15",
      description:
        "Apple’s iPhone 15 offers cutting-edge performance with the A16 Bionic chip, a stunning Super Retina XDR display, and an advanced dual-camera system. Designed for exceptional photography, performance, and all-day battery life.",
      specifications: [
        "Display: 6.1-inch Super Retina XDR OLED",
        "Processor: A16 Bionic chip",
        "Camera: Dual 48MP + 12MP rear, 12MP front",
        "Storage: 128GB / 256GB / 512GB",
        "Operating System: iOS 17",
        "Battery: Up to 20 hours video playback",
        "Weight: 171g",
        "Connectivity: 5G, Wi-Fi 6, Bluetooth 5.3, USB-C",
        "Water Resistance: IP68 rated",
      ],
      price: 79900.0,
      stock: 12,
      category: ["Smartphones", "Apple", "iPhone Series"],
      rating: 3.9,
    },
    {
      image: SamsungGalaxyS23,
      name: "Samsung Galaxy S23",
      description:
        "The Samsung Galaxy S23 combines elegance and power with its Snapdragon 8 Gen 2 processor, Dynamic AMOLED 2X display, and pro-grade triple camera system — perfect for both work and play.",
      specifications: [
        "Display: 6.1-inch FHD+ Dynamic AMOLED 2X (120Hz)",
        "Processor: Snapdragon 8 Gen 2 for Galaxy",
        "Camera: 50MP + 12MP + 10MP rear, 12MP front",
        "Storage: 128GB / 256GB",
        "Operating System: Android 13 with One UI 6",
        "Battery: 3900mAh with 25W fast charging",
        "Weight: 168g",
        "Connectivity: 5G, Wi-Fi 6E, Bluetooth 5.3, USB-C",
      ],
      price: 74999.0,
      stock: 1,
      category: ["Smartphones", "Samsung", "Galaxy Series"],
      rating: 4.7,
    },
    {
      image: SonyWH1000XM5,
      name: "Sony WH-1000XM5",
      description:
        "Experience industry-leading noise cancellation and crystal-clear audio with the Sony WH-1000XM5 wireless headphones. Ideal for travel, work, and immersive music sessions.",
      specifications: [
        "Driver Unit: 30mm Dynamic Driver",
        "Connectivity: Bluetooth 5.2, USB-C",
        "Battery Life: Up to 30 hours (ANC on)",
        "Charging Time: 3 hours",
        "Noise Cancelling: Dual Noise Sensor Technology",
        "Weight: 250g",
        "Voice Assistant: Google Assistant, Alexa",
        "Audio Codecs: SBC, AAC, LDAC",
      ],
      price: 29990.0,
      stock: 15,
      category: ["Audio", "Sony", "Headphones"],
      rating: 2,
    },
    {
      image: LGUltragear27,
      name: "LG Ultragear 27GP850",
      description:
        "A 27-inch gaming monitor with QHD resolution, 165Hz refresh rate, and Nano IPS technology. Designed for smooth, color-rich, and tear-free gameplay experiences.",
      specifications: [
        "Display: 27-inch QHD (2560 x 1440) Nano IPS",
        "Refresh Rate: 165Hz (OC 180Hz)",
        "Response Time: 1ms GtG",
        "Ports: DisplayPort 1.4, HDMI 2.0, USB 3.0",
        "Brightness: 400 nits",
        "Sync: NVIDIA G-SYNC Compatible, AMD FreeSync Premium",
        "Stand: Height, tilt, pivot adjustable",
      ],
      price: 32999.0,
      stock: 7,
      category: ["Monitors", "LG", "Gaming"],
      rating: 4.6,
    },
    {
      image: AppleWatchSeries9,
      name: "Apple Watch Series 9",
      description:
        "The Apple Watch Series 9 brings faster performance, improved health tracking, and the new Double Tap gesture. Stay connected, active, and healthy — all from your wrist.",
      specifications: [
        "Display: Always-On Retina LTPO OLED, 2000 nits",
        "Processor: S9 SiP with 64-bit dual-core",
        "Sensors: Heart rate, ECG, SpO2, temperature, GPS",
        "Water Resistance: 50 meters",
        "Battery: Up to 18 hours",
        "Connectivity: Wi-Fi, Bluetooth 5.3, Optional LTE",
        "Compatibility: iPhone with iOS 17 or later",
      ],
      price: 41900.0,
      stock: 11,
      category: ["Wearables", "Apple", "Smartwatch"],
      rating: 3.4,
    },
  ];

  useEffect(() => {
    setProduct((prev) => {
      if (!prev || prev.length === 0) return [...staticProducts];
      return prev;
    });
  }, []);

  return (
    <div className="products_container">
      <ProductAdder />
      <div className="featured_products">
        {product.map(
          (product, index) =>
            product.rating >= 4.6 &&
            product.stock > 0 && <Card key={index} product={product} />
        )}
      </div>

      <div className="product_list">
        {product.length === 0 ? (
          <p>Product is Empty</p>
        ) : (
          product.map(
            (product, index) =>
              product.stock > 0 && <Card key={index} product={product}/>
          )
        )}
      </div>
    </div>
  );
}

export default Product_List;
