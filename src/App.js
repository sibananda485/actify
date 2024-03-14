import RightSection from "./components/RightSection";
import LeftBar from "./components/shared/LeftBar";

function App() {
  return (
    <>
      <div className="flex">
        <LeftBar></LeftBar>
        <RightSection></RightSection>
      </div>
    </>
  );
}

export default App;
