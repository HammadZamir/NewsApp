
import './App.css';
import React from 'react';
import Navbar from "./components/Navbar";
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';


const App = () => {

  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress , setProgress] = useState(0)
  
  const settProgress = (progress) => {
    setProgress(progress);
  }


    return (
      <div>
        <Router>

        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
          <Navbar/>
          <Routes>

            <Route exact path="/" element={<News setProgress={settProgress}   title="Headlines" key="general" pageSize="9"  apiKey={apiKey}  country="us" category="general"/>}/>

            <Route exact path="/business" element={<News setProgress={settProgress}   title="Business" key="business" apiKey={apiKey}  pageSize="9"  country="us" category="business"/>}/>
            
            <Route exact path="/entertainment" element={<News setProgress={settProgress}   title="Entertainment" key="entertainment" pageSize="9"  apiKey={apiKey}  country="us" category="entertainment"/>}/>
            
            <Route exact path="/health" element={<News setProgress={settProgress}   title="Health" key="health" pageSize="9"  apiKey={apiKey}  country="us" category="health"/>}/>
            
            <Route exact path="/science" element={<News setProgress={settProgress}   title="Science" key="science" pageSize="9"  apiKey={apiKey}  country="us" category="science"/>}/>
            
            <Route exact path="/sports" element={<News setProgress={settProgress}   title="Sports" key="sports" pageSize="9"  apiKey={apiKey}  country="us" category="sports"/>}/>
            
            <Route exact path="/technology" element={<News setProgress={settProgress}   title="Technology" key="technology" pageSize="9"  apiKey={apiKey}  country="us" category="technology"/>}/>

          </Routes>

        </Router>
      </div>
    )

}

export default App
