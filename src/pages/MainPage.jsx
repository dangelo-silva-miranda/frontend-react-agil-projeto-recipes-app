import React, { useContext } from 'react';
import MainCards from '../components/MainCards';
import RecipesContext from '../contexts/RecipesContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import logo from '../images/mustachef.svg';

export default function MainPage() {
  const { data, isFetching, type } = useContext(RecipesContext);
  let title;
  let thumbnail;
  let strTitle;
  let typeId;

  if (type === 'meals') {
    title = 'Comidas';
    strTitle = 'strMeal';
    thumbnail = 'strMealThumb';
    typeId = 'idMeal';
  } else {
    title = 'Bebidas';
    strTitle = 'strDrink';
    thumbnail = 'strDrinkThumb';
    typeId = 'idDrink';
  }

  return isFetching ? (
    <div className="loading transparent">
      <img src={ logo } alt="Loading" />
    </div>
  ) : (
    <>
      <Header title={ title } hasSearchBar />
      <div className="transparent">
        <MainCards
          data={ data }
          thumbnail={ thumbnail }
          title={ strTitle }
          typeId={ typeId }
        />
      </div>
      <Footer />
    </>
  );
}
