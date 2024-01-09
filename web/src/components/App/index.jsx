import { BrowserRouter } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Router from "../../Router";

function App() {
 return(
  <BrowserRouter>
   <Toaster 
      position="top-right"
      toastOptions={{
        duration: 3000,
        success: {
          style: {
            background: '#0ab12e',
            color: '#fff',
          }
        },
        error: {
          style: {
            background: '#df3535',
            color: '#fff',
          }
        },
      }}
    />
    <Router />
  </BrowserRouter>
 )
}

export default App
