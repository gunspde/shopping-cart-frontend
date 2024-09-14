import ItemList1 from "../assets/images/itemList/product1.png";
import ItemList2 from "../assets/images/itemList/product2.webp";
import ItemList3 from "../assets/images/itemList/product3.webp";
import ItemList4 from "../assets/images/itemList/product4.png";
import detailList1Id1 from "../assets/images/imgList/product1-1.png";
import detailList1Id2 from "../assets/images/imgList/product1-2.png";
import detailList1Id3 from "../assets/images/imgList/product1-3.png";
import detailList2Id1 from "../assets/images/imgList/product2-1.webp";
import detailList3Id1 from "../assets/images/imgList/product3-1.webp";
import detailList4Id1 from "../assets/images/imgList/product4-1.png";
import detailList4Id2 from "../assets/images/imgList/product4-2.webp";
import detailList4Id3 from "../assets/images/imgList/product4-3.webp";

export const itemList = [
  {
    id: 1,
    img: ItemList1,
    name: "BAMM PRO 166",
    expire: '24/10/2570',
    description: 'การเพิ่มกล้ามเนื้อของคนผอมนั้น แน่นอนว่าโปรตีนเป็นสิ่งสำคัญ แต่สิ่งที่คนผอมขาด และเป็นปัญหามากที่สุด กลับไม่ใช่โปรตีน',
    size: [
      { id: 1, value: 1, nameLong: "pound", nameShort: "lb", price: 300 },
      { id: 2, value: 3, nameLong: "pound", nameShort: "lb",  price: 600 },
      { id: 3, value: 12, nameLong: "pound", nameShort: "lb", price: 1200 },
    ],
    quantityInstock: 10,
    minMaxPrice: [ {id: 1, type: 'min', price: 300}, {id: 1, type: 'max', price: 1200}],
    flavor: [
      { id: 1, name: "Chocolate",  isActive: true  },
      { id: 2, name: "Matcha Green Tea",  isActive: true  },
      { id: 3, name: "Vanilla",  isActive: true  },
      { id: 4, name: "Cafe Mocha", isActive: true  },
    ],
    imgList: [
        {
            id: 1,
            img: detailList1Id1
        },
        {
            id: 2,
            img: detailList1Id2
        },
        {
            id: 3,
            img: detailList1Id3
        }
    ]
  },
  {
    id: 2,
    img: ItemList2,
    name: "Super Mass Gainer",
    expire: '23/01/2569',
    quantityInstock: 10,
    description: 'ผสานพลังของ Zinc, Magnesium และ Vitamin B6 เข้าด้วยกัน เพื่อช่วงเพิ่มสมรรถนะร่างกายให้ใช้ได้อย่างเต็มที่ กล้ามเนื้อแข็งแรง และช่วยทำให้การนอนหลับมีคุณภาพมากขึ้น',
    size: [
        { id: 1, value: 1, nameLong: "pound", nameShort: "lb", price: 294 },
        { id: 2, value: 6, nameLong: "pound", nameShort: "lb",  price: 799 },
      ],
      minMaxPrice: [ {id: 1, type: 'min', price: 294}, {id: 1, type: 'max', price: 799}],
    flavor: [
      { id: 1, name: "Chocolate", isActive: true },
      { id: 2, name: "Matcha Green Tea",  isActive: false  },
      { id: 3, name: "Vanilla",  isActive: true  },
    ],
    imgList: [
        {
            id: 1,
            img: detailList2Id1
        }
    ]
  },
  {
    id: 3,
    img: ItemList3,
    name: "Real Gains",
    expire: '09/12/2569',
    quantityInstock: 0,
    description: 'สูตรนี้เพิ่ม Vitamin B Complex เพิ่มโฟกัสในการเล่น ให้มีประสิทธิภาพมากขึ้น ลดความตื้อของสมองระหว่างวันในช่วงไดเอท ที่สำคัญแม่** โคตรอร่อย ลำบากอย่างเดียว คือ ห้ามใจ ไม่ให้ซดเยอะเกิน !!',
    size: [
        { id: 1, value: 1, nameLong: "pound", nameShort: "lb", price: 799 },
      ],
      minMaxPrice: [ {id: 1, type: 'min', price: 799}],
    flavor: [
      { id: 1, name: "Chocolate", isActive: true },
    ],
    imgList: [
        {
            id: 1,
            img: detailList3Id1
        }
    ]
  },
  {
    id: 4,
    img: ItemList4,
    name: "Real Gains",
    expire: '09/04/2568',
    quantityInstock: 20,
    description: 'แน่นอนว่าโปรตีนเป็นสิ่งสำคัญแต่สิ่งที่คนผอมขาดแลเป็นปัญหามากที่สุด กลับไม่ใช่โปรตีนแต่เป็นพลังงานที่รับ น้อยเกินไป ไม่เพียงพอที่จะเพิ่มน้ำหนักและกล้ามเนื้อได้ อาหารเสริมประเภท',
    size: [
        { id: 1, value: 1, nameLong: "pound", nameShort: "lb", price: 400 },
      ],
      minMaxPrice: [ {id: 1, type: 'min', price: 400}],
    flavor: [
      { id: 1, name: "Chocolate", isActive: true },
    ],
    imgList: [
        {
            id: 1,
            img: detailList4Id1
        },
        {
            id: 2,
            img: detailList4Id2
        },
        {
            id: 3,
            img: detailList4Id3
        }
    ]
  },
];
