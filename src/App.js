import AddedList from "./modules/AddedList/components/AddedList";
import Bushboard from "./modules/Bushboard/components/Bushboard";

function App() {
  return (
    <div>
      <Bushboard child={<AddedList/>} />
    </div>
  );
}

export default App;
