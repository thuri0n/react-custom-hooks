import React from 'react'
import { ComponentForUseInput } from './components/ComponentForUseInput'
import { ComponentForUseHover } from './components/ComponentForUseHover'
import { List } from './components/List'

function App() {

  return (
    <div className="App" style={{
        display: 'flex',
        flexDirection: 'row'
    }}>
        <div>
            <ComponentForUseInput />
            <ComponentForUseHover />
        </div>
        <List />
    </div>
  );
}

export default App;
