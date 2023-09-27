
import { Routes, Route, BrowserRouter } from 'react-router-dom';


import ParameterContextProvider from './context/ParameterContext';

import { routes } from './utils/data'

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          {
            routes.map(item=>
              <Route path={item.path} 
                element={
                  item.isUseParamContext ? <ParameterContextProvider>{item.loader}</ParameterContextProvider> 
                  : item.loader
                } 
              />
            )
          }
        </Routes>
    </BrowserRouter>
  );
}


