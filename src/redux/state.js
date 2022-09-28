import ava from "./res/ava.jpg"
import coin from "./res/coin.svg"
import geo from "./res/geo.svg"
import login from "./res/login.svg"
import logo from "./res/logo.svg"

import email from "./res/email.svg"
import phone from "./res/phone.svg"

import promocard from "./res/promocard.png"

import arrow_left from "./res/arrow_left.svg"
import arrow_right from "./res/arrow_right.svg"
import arrow_block from "./res/arrow_block.svg"

import banner1 from "./res/banner1.png"
import banner2 from "./res/banner2.png"
import banner3 from "./res/banner3.png"
import block1 from "./res/block1.png"
import block2 from "./res/block2.png"

import product1 from "./res/product1.png"
import product2 from "./res/product2.png"
import product3 from "./res/product3.png"
import product4 from "./res/product4.png"
import product5 from "./res/product5.png"

let state = {
  icons: {
    coin: coin,
    geo: geo,
    login: login,
    logo: logo,
    email: email,
    phone: phone,
    promocard: promocard,
    arrow_left: arrow_left,
    arrow_right: arrow_right,
    arrow_block: arrow_block
  },

  userData: {
    name: 'Алексей',
    surname: 'Мачихин',
    balance: 2400000,
    phone: '+79274351254',
    email: 'd22lbn@gmail.com',
    city: 'Тамбов',
    ava: ava
  },

  footerInf: {
    email: 'info@ecorus.ru',
    phone: '+7 (800) 880-88-88'
  },

  lkPage: {
    promocodies: [
      {
        id: 1,
        isActive: true,
        price: 1000,
        date: "25.09.2021",
        link: "https://www.adidas.ru/tolstovka-future-icons-doubleknit/HA1417.html"
      },
      {
        id: 2,
        isActive: true,
        price: 0,
        date: "25.09.2021",
        link: "https://www.adidas.ru/tolstovka-future-icons-doubleknit/HA1417.html"
      },
      {
        id: 3,
        isActive: false,
        price: 5000,
        date: "25.09.2021",
        link: "https://www.adidas.ru/tolstovka-future-icons-doubleknit/HA1417.html"
      },
      {
        id: 4,
        isActive: false,
        price: 1100,
        date: "25.09.2021",
        link: "https://www.adidas.ru/tolstovka-future-icons-doubleknit/HA1417.html"
      },
      {
        id: 5,
        isActive: false,
        price: 700,
        date: "25.09.2021",
        link: "https://www.adidas.ru/tolstovka-future-icons-doubleknit/HA1417.html"
      },
    ],
    stories: [
      {id: 1, address: "Казань, Кремлёвская, 88", material: "Пластик, стекло, бумага", date: "25.09.2021", price: 1000},
      {id: 2, address: "Казань, Кремлёвская, 88", material: "Пластик, стекло, бумага", date: "25.09.2021", price: 1000},
    ]
  },

  mainPage: {
    banners: [
      {
        title: 'Сделаем мир чище',
        subtitle: 'Сдай макулатуру или старую одежду и получи скидку на покупку товаров из переработанных материалов',
        btn: 'Условия сервиса',
        img: banner1,
        background: 'rgba(179, 237, 200, 1)'
      },
      {
        title: 'А вы знали...',
        subtitle: 'что среднее время разложения пластмассовых изделий колеблется от 400 до 700 лет,  а полиэтиленовых пакетов — от 100 до 200 лет?',
        btn: 'Узнать больше',
        img: banner2,
        background: 'rgba(255, 228, 143, 1)'
      },
      {
        title: 'Что с масками?',
        subtitle: 'Медицинские маски не обязательно должны становиться отходами. Их тоже можно сдать на переработку',
        btn: 'Пункты сбора масок',
        img: banner3,
        background: 'rgba(191, 240, 222, 1)'
      },
    ],
    blocks: [
      {
        title: 'Пункты сбора',
        subtitle: 'Посмотри, где в твоем городе можно сдать вторсырье на переработку',
        img: block1
      },
      {
        title: 'ЭкоМаркет',
        subtitle: 'Используй заработанные экокоины для покупки товаров из переработанных материалов',
        img: block2
      },
      // {
      //   title: 'ЭкоМаркет',
      //   subtitle: 'Используй заработанные экокоины для покупки товаров из переработанных материалов',
      //   img: block2
      // },
      // {
      //   title: 'Пункты сбора',
      //   subtitle: 'Посмотри, где в твоем городе можно сдать вторсырье на переработку',
      //   img: block1
      // }
    ]
  },

  ecomarketPage: {
    products: [
      {
        img: product1,
        brand: 'nike',
        name: 'Nike Air Max 2021',
        description: 'Мужская обувь',
        price: 1000
      },
      {
        img: product2,
        brand: 'nike',
        name: 'Nike Air Max 90 Premium',
        description: 'Мужская обувь',
        price: 750
      },
      {
        img: product3,
        brand: 'Adidas',
        name: 'Adidas Alphabounce RC',
        description: 'Мужская обувь',
        price: 1200
      },
      {
        img: product4,
        brand: 'H&M',
        name: 'Худи H&M',
        description: 'Мужская одежда',
        price: 1000
      },
      {
        img: product5,
        brand: 'nike',
        name: 'Nike Air Force 1 Low',
        description: 'Мужская обувь',
        price: 2100
      },
    ]
  }
}

export default state;