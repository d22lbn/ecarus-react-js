import React from "react";
import style from "./EcoMarket.module.css"
import Product from "./Product";
import it1 from "./res/it1.png"
import it2 from "./res/it2.png"
import it3 from "./res/it3.png"
import it4 from "./res/it4.png"
import it5 from "./res/it5.png"


const EcoMarket = () => {
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
          <Product img={it1} brand={'nike'} name={'Nike Air Max 2021'} description={'Мужская обувь'} price={1000}/>
          <Product img={it2} brand={'nike'} name={'Nike Air Max 90 Premium'} description={'Мужская обувь'} price={750}/>
          <Product img={it3} brand={'Adidas'} name={'Adidas Alphabounce RC'} description={'Мужская обувь'} price={1200}/>
          <Product img={it4} brand={'H&M'} name={'Худи H&M'} description={'Мужская одежда'} price={1000}/>
          <Product img={it5} brand={'nike'} name={'Nike Air Force 1 Low'} description={'Мужская обувь'} price={2100}/>
        </div>
      </div>
    </main>
  )
}

export default EcoMarket;