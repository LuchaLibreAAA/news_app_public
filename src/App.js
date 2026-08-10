import './App.css';
import Navbar from './components/navbar';
import News  from './components/news';
import Aboutpage from './components/aboutpage';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomPage from './components/custompage';
import LoadingBar from 'react-top-loading-bar';

// old api key
//const key=`4aa1293240154d4a846acae28a8bb3a4`




function App() {
  let [darkmode,setDarkMode]=useState(false)
  //default color
         document.body.style.backgroundColor ='rgb(0, 82, 170)';

  const togglemode=()=>{
  setDarkMode(!darkmode)
  if(!darkmode){
      document.body.style.backgroundColor = 'rgb(0, 82, 170)';

  }
  else{
   document.body.style.backgroundColor = 'rgb(255, 255, 255)';

  }
  console.log(darkmode)
}
const [progress,setProgress]=useState(0);
function changeprogress(change){
  setProgress(change)
}

  
  return (
    <>
     <BrowserRouter>
    <Navbar mode={darkmode} fn={togglemode} progress={0} />
    <LoadingBar  color="#f11946"  progress={progress}  onLoaderFinished={() =>setProgress(0)} height={7}  />
    <Routes>
    <Route exact path='/' element={<News prfn={changeprogress} mode={{darkmode}} togglemode={togglemode} category={`Top Headlines`} keyindex={0}/>} />
    <Route exact path='/sports' element={<News prfn={changeprogress} mode={{darkmode}} togglemode={togglemode} category={`Sports`}keyindex={1}/>} />
    <Route exact path='/technology' element={<News prfn={changeprogress} mode={{darkmode}} togglemode={togglemode} category={`Technology`}keyindex={2}/>} />
    <Route exact path='/business' element={<News prfn={changeprogress} mode={{darkmode}} togglemode={togglemode} category={`Business`}keyindex={3}/>} />
    <Route exact path='/politics' element={<News prfn={changeprogress} mode={{darkmode}} togglemode={togglemode} category={`Politics`}keyindex={2}/>} />
     <Route exact path='/about' element={ <Aboutpage mode={darkmode}/>} />
     <Route exact path="/search" element={<CustomPage mode={{darkmode}} />} />

    </Routes>
    </BrowserRouter>
       </>
  );
}

export default App;
