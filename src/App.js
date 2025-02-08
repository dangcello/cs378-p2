import './App.css';
import MenuItem from './components/MenuItem';
import Logo from './components/Logo';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const menuItems = [
  {
    id: 1,
    title: 'HONEY SOY WOO BEASEL',
    description: 'Beef belly with a sweet and savory sauce',
    imageName: 'woo_beasal.jpg',
    price: 15.00,
  },
  {
    id: 2,
    title: 'GARLIC SAMGYUBSAL',
    description: 'Garlic Marinated Porkbelly',
    imageName: 'porkbelly.jpg',
    price: 20.00,
  },
  {
    id: 3,
    title: 'GALBI',
    description: 'Marinated Beef Short Ribs',
    imageName: 'yangyum_galbi_raw.jpg',
    price: 25.00,
  },
  {
    id: 4,
    title: 'GEN PREMIUM STEAK',
    description: 'Premium Ribeye Steak',
    imageName: 'gen_steak_raw.jpg',
    price: 35.00,
  }
];

const logo = [
  {
    title:'Fresh and Delicious Korean Meats!',
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
