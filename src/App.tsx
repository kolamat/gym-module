import Navbar from "./scenes/navbar/Navbar";

function App() {
  return <div className="app bg-gray-20">
    <Navbar 
    selectedPage={selectedPage}
                         setSelectedPage={setSelectedPage} 
    />  
  </div>;
}

export default App;
