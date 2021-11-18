import './App.css';
import FullName from "./component/profile/FullName";
import Adress from "./component/profile/Adress";
import ProfilePhoto from "./component/profile/ProfilePhoto";
import{Col,Row} from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProfilePhoto/>
        <div id="textt">
          <FullName/>
          <Adress/>
        </div>
      </header>
  </div>
  );
}

export default App;
