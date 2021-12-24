import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
function Home() {
    return (

        <div className="homeBackground">
        <div className="homeContainer">
          
          
          <div className="footer">
          <Link to="/Image"><button>
              Show Image
            </button></Link>
            <Link to="/Register"><button>
              Register
            </button></Link>
            
          </div>
        </div>
      </div>

    )
}

export default Home
