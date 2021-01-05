import React from 'react'
import RouteConfig from './routes/RouteConfig'
import { MenuProvider } from './context/MenuProvider'

function App() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <MenuProvider>
      <RouteConfig/>
    </MenuProvider>
  );
}

export default App;
