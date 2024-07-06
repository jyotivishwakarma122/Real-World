import './App.css';

import React from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';

const App=()=> {
 const apiKey = process.env.REACT_APP_NEWS_API;
  
  const [progress, setProgress] = useState(0)

  
    console.log("API Key:",apiKey); 
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
        color='#f11946'
        progress={progress}
        
       
      />
          <Routes>
            <Route path="/" element={<News setProgress={setProgress}  apiKey={apiKey}   key="general" pageSize={6} country="in" category="general" />} />
            <Route path="/business" element={<News setProgress={setProgress}  apiKey={apiKey}   key="business" pageSize={6} country="in" category="business" />} />
            <Route path="/entertainment" element={<News setProgress={setProgress}  apiKey={apiKey}   key="entertainment" pageSize={6} country="in" category="entertainment" />} />
            <Route path="/health" element={<News setProgress={setProgress}  apiKey={apiKey}   key="health" pageSize={6} country="in" category="health" />} />
            <Route path="/sports" element={<News setProgress={setProgress}  apiKey={apiKey}   key="sports" pageSize={6} country="in" category="sports" />} />
            <Route path="/science" element={<News setProgress={setProgress}  apiKey={apiKey}   key="science" pageSize={6} country="in" category="science" />} />
            <Route path="/technology" element={<News setProgress={setProgress}  apiKey={apiKey}   key="technology" pageSize={6} country="in" category="technology" />} />
          </Routes>
        </Router>

        <footer>
         <div>
            <ul>
                <h3>News
                    <li><a href="/">All</a></li>
                    <li><a href="/">Home & Living</a></li>
                    <li><a href="/">Accessories</a></li>
                    <li><a href="/">Stationery</a></li>
                    <li><a href="/">sale</a></li>
                </h3>
            </ul>

        </div> 
        <div id="left">
            <ul>
                <h3>ABOUT
                    <li><a href="/">Contact us</a></li>
                    <li><a href="/">about us</a></li>
                    <li><a href="/">Careers</a></li>
                    <li><a href="/">Flipkart Stories</a></li>
                    <li><a href="/">Press</a></li>
                    <li><a href="/">Flipkart</a></li>
                    <li><a href="/">WholeSale</a></li>
                    <li><a href="/">cleartrip</a></li>
                </h3>
            </ul>
            <ul>
                <h3>HELP
                    <li><a href="/">Payments</a></li>
                    <li><a href="/">Shipping</a></li>
                    <li><a href="/">Cancellation</a></li>
                    <li><a href="/">return</a></li>
                    <li><a href="/">FAQ</a></li>
                </h3>
            </ul>
            <ul>
                <h3>CONSUMER POLICY
                    <li><a href="/">cancelation</a></li>
                    <li><a href="/">returns</a></li>
                    <li><a href="/">Terms of use</a></li>
                    <li><a href="/">Security</a></li>
                    <li><a href="/">Policy</a></li>
                    <li><a href="/">SiteMap</a></li>
                    <li><a href="/">redressal</a></li>
                </h3>
            </ul>
            <ul>
                <h3>SOCIAL
                    <li><a href="/">Facebook</a></li>
                    <li><a href="/">Twitter</a></li>
                    <li><a href="/">YouTube</a></li>
                </h3>
            </ul>
        </div>
        <div id="right">
            <ul>
                <h3>Mail us</h3>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quaerat molestias blanditiis ullam numquam commodi expedita hic, possimus laboriosam ut.</li>
    
            </ul>
            <ul>
                <h3>register office address</h3>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, illo et, reiciendis sit consequatur cupiditate repellat inventore ducimus vel facere labore aliquam commodi officia minus totam corrupti reprehenderit est facilis.</li>
            </ul>
        </div>
       
    </footer>

    
      </div>
      
    );
  
}
export default App;




