
import Navbar from "./components/Navbar";
import Header from "./components/Header";
function App() {
  return (
    <>
      <main className= "  w-full">
        <div className="bg-img h-[60vh] lg:hidden">
        <Navbar></Navbar>
        <Header></Header>
        </div>
  
      </main>
    </>
  );
}

export default App;
