import Main from "./Pages/Main/Main";
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="max-w-[1440px] mx-auto" >
      <Main />
      <Toaster />
    </div>
  );
}

export default App;
