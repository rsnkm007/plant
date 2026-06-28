import './App.css'
import viteLogo from './assets/vite.svg';
import treeLogo from './assets/treelogo.png';
import { FaSearch } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaPlayCircle } from "react-icons/fa";
import plantImage1 from './assets/plant1.png';
import plantImage2 from './assets/plant2.png';
import plantImage3 from './assets/plant3.png';
import plantImage4 from './assets/plant4.png';
import plantImage5 from './assets/plant5.png';


function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img className="header-left-image" src={treeLogo} alt="Vite logo"></img>
        <span>Flora Vision</span>
      </div>

      <div className="header-middle">
        <span>Home</span>
        <span>Plant Type</span>
        <span>More</span>
        <span>Contact</span>
      </div>

      <div className="header-right">
        <FaSearch className="search-icon" />
        <FaShoppingBasket className="cart-icon" />
        <HiMenuAlt2 className="menu-icon" />
      </div>
    </div>
  );
}

function Body() {
  return (
    <>
      <div className="earth-exhale">
        <span className="heading">Earth’s Exhale</span>
        <p>Earth Exhale symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.</p>
        <div className="but-img-span">
          <button>Buy Now</button>
          <FaPlayCircle className="play-icon" size={26}/>
          <span>Live Demo</span>
        </div>
      </div>
    </>
  );
}

function SinglePlant() {
  return (
    <>
      <div className="single-plant">
        <img src={plantImage2} alt="Plant" />
        <div className="single-plant-content">
          <span className="single-plant-place">Indoor Plant</span>
          <span className="single-plant-name">Aglaonema  plant</span>
          <button>Buy Now</button>
        </div>
      </div>
    </>
  );
}

function EarthSingle() {
  return (
    <div className="earth-single-main">
      <div className="body">
        <Body />
      </div>
      <div className="singleplant">
        <SinglePlant />
      </div>
    </div>
  );
}

function PlantBigLeft() {
  return (
    <>
      <div className="plant-big-left-main">
        <div className="plant-big-left">
          <img src={plantImage1} alt="Plant" />
          <div className="plant-big-left-content">
            <span>For Your Desks Decorations</span>
            <p>I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!</p>
            <p>Rs. 599/-</p>
            <div className="plant-big-left-buttons">
              <button>Explore</button>
              <button>New</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function PlantBigRight() {
  return (
    <>
      <div className="plant-big-right-main">
        <div className="plant-big-right">
          <div className="plant-big-right-content">
            <span>For Your Desks Decorations</span>
            <p>I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!</p>
            <p>Rs. 599/-</p>
            <div className="plant-big-right-buttons">
              <button>Explore</button>
              <button>New</button>
            </div>
          </div>
          <img src={plantImage4} alt="Plant" />
        </div>
      </div>
    </>
  );
}

function MainHeadings() {
  return (
    <>
      <h2 className="headings">Our Top Selling Plants</h2>
    </>
  );
}

function Plants({ id, name, description, price }) {
  return (
    <>
      <div className="plant">
        {id === '1' && <img src={plantImage3} alt="Plant" />}
        {id === '2' && <img src={plantImage4} alt="Plant" />}
        {id === '3' && <img src={plantImage5} alt="Plant" />}
        {id === '4' && <img src={plantImage1} alt="Plant" />}
        {id === '5' && <img src={plantImage2} alt="Plant" />}
        {id === '6' && <img src={plantImage3} alt="Plant" />}
        <div className="plant-content">
          {id === '1' && <span className="plant-name">{name}</span>}
          {id === '2' && <span className="plant-name">{name}</span>}
          {id === '3' && <span className="plant-name">{name}</span>}
          {id === '4' && <span className="plant-name">{name}</span>}
          {id === '5' && <span className="plant-name">{name}</span>}
          {id === '6' && <span className="plant-name">{name}</span>}
          {id === '1' && <span className="plant-description">{description}</span>}
          {id === '2' && <span className="plant-description">{description}</span>}
          {id === '3' && <span className="plant-description">{description}</span>}
          {id === '4' && <span className="plant-description">{description}</span>}
          {id === '5' && <span className="plant-description">{description}</span>}
          {id === '6' && <span className="plant-description">{description}</span>}
          <div className="plant-price-description">
            {id === '1' && <span className="plant-price">{price}</span>}
            {id === '2' && <span className="plant-price">{price}</span>}
            {id === '3' && <span className="plant-price">{price}</span>}
            {id === '4' && <span className="plant-price">{price}</span>}
            {id === '5' && <span className="plant-price">{price}</span>}
            {id === '6' && <span className="plant-price">{price}</span>}
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

function PlantsGroup() {
  const plantsDescriptions = [{ id: '1', name: 'Aglaonema  plant', price: 'Rs. 300/-',
    description:'The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care', key: '1' }, 
    { id: '2', name: 'Plantain Lilies', price: 'Rs. 380/-',
    description:'Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes', key: '2'}, 
    { id: '3', name: 'Spathiphyllum', price: 'Rs. 259/-',
      description:'The Spathiphyllum plant, also known as the Peace Lily, is a popular choice for indoor gardens due to its attractive foliage and easy care',
       key: '3'}, 
    { id: '4', name: 'Peace Lily', price: 'Rs. 400/-',
      description: 'It is a popular tropical houseplant known for its distinctive, perforated leaves', key: '4'}, 
    { id: '5', name: 'Fiddle Leaf Fig', price: 'Rs. 450/-',
      description: 'The Fiddle Leaf Fig plant, also known as the Ficus Lyrata, is a popular choice for indoor gardens due to its large, leafy foliage and easy care',
       key: '5'}, 
    { id: '6', name: 'Snake Plant', price: 'Rs. 359/-',
      description: 'The Snake Plant, also known as Sansevieria, is a popular choice for indoor gardens due to its low maintenance requirements and attractive foliage',
      key: '6'}];
  return (

    <div className="plantsgroup">
      {plantsDescriptions.map((plantsDescription) => {
        return (
          <Plants
            id={plantsDescription.id}
            name={plantsDescription.name}
            description={plantsDescription.description}
            price={plantsDescription.price}
            key={plantsDescription.key}
          />
        );
      })}
    </div>
  );
}


function App() {
  return (
    <>
      <Header />
      <EarthSingle />
      <PlantBigLeft />
      <PlantBigRight />
      <MainHeadings />
      <PlantsGroup />
    </>
  );
}

export default App
