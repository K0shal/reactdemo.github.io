import ContactFrom from './Components/ContactForm'
import Navbar from "./Components/Navbar";
import Card from "./Components/Card"
import MapLocator from './Components/MapLocator'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import './ContactUs.css'
import "./Home.css";

let card = [
    {
      key: 1,
      img: "./1.jpg",
      description: {
        title:
          "Complex geometric shapes made of triangles using multiple colors.",
        about:
          "Neque poppo quisquam est qui dolorem ipsum quia dolor sit amt,cosectetur,adipisci velit.Loreum Ispum dolor ist buin duo smark",
      },
    },
    {
      key: 2,
      img: "./2.jpg",
      description: {
        title:
          "Complex geometric shapes made of triangles using multiple colors.",
        about:
          "Neque poppo quisquam est qui dolorem ipsum quia dolor sit amt,cosectetur,adipisci velit.Loreum Ispum dolor ist buin duo smark",
      },
    },
    {
      key: 3,
      img: "./3.jpg",
      description: {
        title:
          "Complex geometric shapes made of triangles using multiple colors.",
        about:
          "Neque poppo quisquam est qui dolorem ipsum quia dolor sit amt,cosectetur,adipisci velit.Loreum Ispum dolor ist buin duo smark",
      },
    },
  ];

  const nav = {
    logo: "./LOGO.png",
    profileIcon: "./profile.jpg",
    fireIcon: "./fire.svg",
  };

function App() {
 
  return (
    <BrowserRouter>
     <Navbar
        logo={nav.logo}
        profileIcon={nav.profileIcon}
        fireIcon={nav.fireIcon}
      />
      <Routes>
        <Route path="/" element={<Home/>}/>  
        <Route path="/Home" element={<Home />}/>  
        <Route path="/NavTextTwo" element={<NavTextTwo/>} />
        <Route path="/NavTextThree" element={<NavTextThree/>} />
        <Route path="/Contact" element={<ContactUs/>}/>
      </Routes>
    </BrowserRouter>
  );
}

function Home(props) {
  
  return (
    <>
      <div className="cardContainer">
        {card.map((el) => {
          return (
            <Card img={el.img} description={el.description} key={el.key} />
          );
        })}
      </div>
    </>
  );
}
function NavTextThree() {
  return (
    <>
      <h1>NavtextThree</h1>
    </>
  );
}
function NavTextTwo(){
  return <>
  <h1>NavtextTwo</h1>
  </>
}
function ContactUs(){
  return <>

  <ContactFrom/>
  <MapLocator/>
  </>;
}

export default App;
