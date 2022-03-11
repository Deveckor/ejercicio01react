
import Card from './components/card'
import './App.scss';
import Img from './t-shirt.jpg'
import Img1 from './T-shirt.webp'
import  CardTwo  from "./components/cardTwo";
import FormPassword from "./components/form"




function App() {
  
  return (
    <Layout>

    <div className="App">
      <header className="App-header">
        {/* <Card 
        img = {Img}
        alt='t-shirt'
        titulo= 'PLAYERA BÁSICA CON ALGODÓN ORGÁNICO'
        precio={<small>$1,0199.15</small>}
        btnNom='Women´s clothing'
        />
        <Card 
        img = {Img1}
        alt='t-shirt'
        titulo= 'PLAYERA BÁSICA '
        precio={<small>$1,564.51</small>}
        btnNom='Women´s clothing'
        /> */}
        <CardTwo
        img = {Img1}
        alt='t-shirt'
        titulo= 'PLAYERA BÁSICA CON ALGODÓN ORGÁNICO'
        precio={<small>$1,0199.15</small>}
        btnNom='Women´s clothing'
        />
        <FormPassword/>
     </header>
    </div>
    
    </Layout>
  );
}

function Layout({children}) {
 
  return (
  <div>
    {children}
  </div>
  )
}
export default App;
