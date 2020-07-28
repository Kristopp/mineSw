import React from 'react';
import DisplayNumber from '../DisplayNumber.tsx'

import './App.scss';

const App: React.FC = () => {
    return <div className="App">
          <div className="Header">
              <DisplayNumber value={0} />
              {/* aria-lable="face" */}
              <div className="Face"><span role="img">But doom guy here</span></div>
              <DisplayNumber value={23} />
          </div>
          <div className="Body">body</div>
    </div>

}

export default App;