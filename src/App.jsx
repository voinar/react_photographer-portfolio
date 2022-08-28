import "./styles/style.css";

import navLogo from './img/logo.png'
import img1 from './img/DSC_0090.jpg'
import img2 from './img/IMG_01922.jpg'
import img3 from './img/PUT_cz1_513.jpg'
import img4 from './img/IMG_0053.jpg'

//add routes + links
// imgdata for image mapping

// class Fastfood {
//   constructor() {
//     this.type = 'kebab';
//     this.hasMeat = true;
//     this.sauce = 'ketchup';
//     this.pita = 'true';
//     this.healty = false
//   }

//   printFoodAttrs() {
//     return `The type of this fastfood is ${this.type}`
//   }
// }

// const kebab = new Fastfood;

// class Burger extends Fastfood {
//   constructor() {
//     super()
//     this.caloriesAmount = 600;
//     this.hasLettuce = true;
//     this.hasPickle = true;

//   }

//   printCalories() {
//     return this.caloriesAmount
//   }
// }

// const burger = new Burger;
// burger.type = 'burger';

// const userName = function() {
//   return 'joe'
// }

// function getUsers(userName) {
//   console.log(userName)
// }

// getUsers(userName)

let num = 1
// console.log(typeof(num))

function numIncrement(num){
  num += 1
return num
}

function autoIncrement() {
  console.log(numIncrement(num))
}

autoIncrement()

function App() {

  return (
    <div className="App">
      <nav className="navbar">
      <div className="navbar__logo">
        <img src={navLogo} alt="logo" />
      </div>
        <ul className="navbar__content">
          <li className="navbar__section-link">sport</li>
          <li className="navbar__section-link">chwile</li>
          <li className="navbar__section-link">pejzaż</li>
          <li className="navbar__section-link">dron</li>
          <li className="navbar__section-link">o mnie</li>
          <li className="navbar__section-link">kontakt</li>
          <li className="navbar__section-link">sklep</li>
        </ul>
      </nav>

      <img className="cover-photo" src={img1} alt="photo"/>

      <div className="section__container">
        <main>
        <div style={{color: 'black', fontSize: '20px'}}>

        {/* {kebab.printFoodAttrs()}
        <br></br>
        {burger.printFoodAttrs()}
        {burger.printCalories()} */}
        </div>
          <ul className="section__photos">
            <li className="section__photos__images">
              <img src={img2} alt="photo"/>
              <img src={img3} alt="photo"/>
              <img src={img4} alt="photo"/>
            </li>
          </ul>
        </main>
      </div>
      <footer className="footer">footer</footer>
    </div>
  );

}

export default App;
