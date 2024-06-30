import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Content from "./components/Content";
import Testimonials from "./components/Testimonials";
import ImageContent from "./components/ImageContent";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <main className="  w-full">
        <div className="bg-img h-[60vh] lg:hidden">
          <Navbar></Navbar>
          <Header></Header>
        </div>
        <Content></Content>
        <Testimonials></Testimonials>
        <ImageContent></ImageContent>
        <Footer></Footer>
      </main>
    </>
  );
}

export default App;
