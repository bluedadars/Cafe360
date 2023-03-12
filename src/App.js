
import Home from './Components/Home';
import { ThemeProvider } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';
import theme from './Components/styles'

function App() {
  return (
    <div className="App">
 <ThemeProvider theme={theme}>
      <Routes>
      <Route path='/' element={<Home/>}/>
 
        </Routes>
    </ThemeProvider>    </div>
  );
}

export default App;
