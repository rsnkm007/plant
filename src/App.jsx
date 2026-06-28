import './App.css'
import backgroundVideo from './assets/video1.mp4';
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
import person1 from './assets/person1.jpeg';
import person2 from './assets/person2.jpeg';
import person3 from './assets/person3.jpeg';

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
          <FaPlayCircle className="play-icon" size={26} />
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
            <p>The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming</p>
            <p>Rs. 399/-</p>
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

function MainHeadings({ title, className, mainClassName }) {
  return (
    <div className={mainClassName}>
      <h3 className={className}>{title}</h3>
    </div>
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
  const plantsDescriptions = [{
    id: '1', name: 'Aglaonema  plant', price: 'Rs. 300/-',
    description: 'The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care', key: '1'
  },
  {
    id: '2', name: 'Plantain Lilies', price: 'Rs. 380/-',
    description: 'Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes', key: '2'
  },
  {
    id: '3', name: 'Spathiphyllum', price: 'Rs. 259/-',
    description: 'The Spathiphyllum plant, also known as the Peace Lily, is a popular choice for indoor gardens due to its attractive foliage and easy care',
    key: '3'
  },
  {
    id: '4', name: 'Peace Lily', price: 'Rs. 400/-',
    description: 'It is a popular tropical houseplant known for its distinctive, perforated leaves', key: '4'
  },
  {
    id: '5', name: 'Fiddle Leaf Fig', price: 'Rs. 450/-',
    description: 'The Fiddle Leaf Fig plant, also known as the Ficus Lyrata, is a popular choice for indoor gardens due to its large, leafy foliage and easy care',
    key: '5'
  },
  {
    id: '6', name: 'Snake Plant', price: 'Rs. 359/-',
    description: 'The Snake Plant, also known as Sansevieria, is a popular choice for indoor gardens due to its low maintenance requirements and attractive foliage',
    key: '6'
  }];
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

function CustomerReviews({ id, name, review, image }) {
  return (
    <div className="customer-reviews-container">
      <div className='customer-details'>
        {id === 1 && <img src={image} alt="Customer Reviews" className='customer-image' />}
        {id === 2 && <img src={image} alt="Customer Reviews" className='customer-image' />}
        {id === 3 && <img src={image} alt="Customer Reviews" className='customer-image' />}
        {id === 1 && <span className='customer-name'>{name}</span>}
        {id === 2 && <span className='customer-name'>{name}</span>}
        {id === 3 && <span className='customer-name'>{name}</span>}
      </div>
      {id === 1 && <span className='customer-review'>{review}</span>}
      {id === 2 && <span className='customer-review'>{review}</span>}
      {id === 3 && <span className='customer-review'>{review}</span>}
    </div>
  );
}

function CustomerReviewsProperties() {
  const customerDescriptions = [{ id: 1, name: 'Harsha', review: 'Just got my hands on some absolutely awesome plants, and I couldn’t be happier!', image: person1, key: '1' },
  { id: 2, name: 'Sai', review: 'I love the variety of plants available here. They have a great selection and the prices are very reasonable.', image: person2, key: '2' },
  { id: 3, name: 'Kumar', review: 'It is like bringing a little piece of nature indoors. Definitely worth the investment my plant collection has never looked better!', image: person3, key: '3' }
  ]
  return (
    <div className='customer-descriptions'>
      {customerDescriptions.map((customerDescription) => {
        return (
          <CustomerReviews
            id={customerDescription.id}
            name={customerDescription.name}
            review={customerDescription.review}
            image={customerDescription.image}
            key={customerDescription.key}
          />
        );
      })}
    </div>
  );
}

function ScrollPlants() {
  return (
    <>
      <div className="scroll-plant-main">
        <div className="scroll-plant">
          <img src={plantImage1} alt="Plant" />
          <div className="scroll-plant-content">
            <p className='main-plant-description'>We Have Small And Best O2 Plants Collection’s</p>
            <p>Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.</p>
            <p>Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.</p>
            <div className="srcoll-plant-buttons">
              <button>Explore</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Footer() {
  return (
    <>
      <div className='footer-main-container'>
        <div className='footer-logo-company-description'>
          <div className='footer-logo-company'>
            <img src={treeLogo} alt="Tree Logo" />
            <span>FloraVision</span>
          </div>
          <p>"From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."</p>
        </div>

        <div className='quick-link'>
          <span>Quick Link’s</span>
          <span className='link'>Home</span>
          <span className='link'>Types of Plants</span>
          <span className='link'>Contact</span>
          <span className='link'>Privacy</span>
        </div>

        <div className='update'>
          <span>For Every Updates</span>
          <div className='update-input'>
            <input className='input' type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
}


function App() {
  return (
    <>

      <video autoPlay muted loop playsInline className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <Header />
      <EarthSingle />
      <MainHeadings title='Featured Plants' className='headings2' mainClassName='main-headings2' />
      <PlantBigLeft />
      <PlantBigRight />
      <MainHeadings title='Our Top Selling Plants' className='headings' mainClassName='main-headings' />
      <PlantsGroup />
      <MainHeadings title='Customer Reviews' className='headings' mainClassName='main-headings' />
      <CustomerReviewsProperties />
      <MainHeadings title='Our Best o2' className='headings' mainClassName='main-headings' />
      <ScrollPlants />
      <Footer />
    </>
  );
}

export default App
