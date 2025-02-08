import './App.css';
import MenuItem from './components/MenuItem';
import Logo from './components/Logo';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];

const logo = [
  {
    title:'Authentic Korean/Japanese Fusion',
    subtitle:'Fresh and Delicious Asian Foods!',
    imageName: 'Logo.jpg',
  }
];

function App() {
  return (
    <div className="test">
        {logo.map(item => (
        <div className="logo-wrapper">
          <Logo 
            title={item.title} 
            subtitle={item.subtitle}
            imageName={item.imageName} 
          />
        </div>
        ))}      

      <div className="menu">
        {menuItems.map(item => (
          <MenuItem 
            key={item.id}
            title={item.title} 
            description={item.description}
            imageName={item.imageName} 
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
