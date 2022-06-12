import React from "react";
import style from "./EcoMarket.module.css"
import Product from "./product/Product";

const EcoMarket = (props) => {

  let products = props.state.products
    .map((product) =>
      <Product img={product.img}
               brand={product.brand}
               name={product.name}
               description={product.description}
               price={product.price}
               icons={props.icons}
      />);

  return (
    <main className={style.ecomarket}>
      <h1>ЭкоМаркет</h1>
      <div className={style.ecomarket__inner}>

        <button className={style.filters__btn}>Фильтры</button>
        <div className={style.ecomarket__filter}>

          <div className={style.ecomarket__filter__categories}>
            <div className={style.filter__item}>
              <span className={style.filter__item__title}>Пол</span>
              <div className={style.filter__item__choice}>
                <div>
                  <input type={"checkbox"}/>
                  <span>Мужской</span>
                </div>
                <div>
                  <input type={"checkbox"}/>
                  <span>Женский</span>
                </div>
              </div>
            </div>
            <div className={style.filter__item}>
              <span className={style.filter__item__title}>Тип товара</span>
              <div className={style.filter__item__choice}>
                <div>
                  <input type={"checkbox"}/>
                  <span>Выбрать все</span>
                </div>
                <div>
                  <input type={"checkbox"}/>
                  <span>Одежда</span>
                </div>
                <div>
                  <input type={"checkbox"}/>
                  <span>Обувь</span>
                </div>
                <div>
                  <input type={"checkbox"}/>
                  <span>Аксессуары</span>
                </div>
              </div>
            </div>
            <div className={style.filter__item}>
              <span className={style.filter__item__title}>Брэнд</span>
              <div className={style.filter__item__choice}>
                <div>
                  <input type={"checkbox"}/>
                  <span>Выбрать все</span>
                </div>
                <div>
                  <input type={"checkbox"}/>
                  <span>P&B</span>
                </div>
                <div>
                  <input type={"checkbox"}/>
                  <span>Nike</span>
                </div>
                <div>
                  <input type={"checkbox"}/>
                  <span>Adidas</span>
                </div>
              </div>
            </div>
          </div>

          <button>Сбросить фильтры</button>
        </div>

        <div className={style.products}>
          {products}
        </div>
      </div>
    </main>
  )
}

export default EcoMarket;