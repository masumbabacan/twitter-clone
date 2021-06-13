import './App.css';
import SideBar from './SideBar';
import Feed from './Feed';
import Widgets from './Widgets';


function App() {
  return (
    <div className="app">

      {/* Sidebar */}
      <SideBar/>

      {/* Feed */}
      <Feed />

      {/* Widgets */}
      <Widgets />
    </div>
  );
}

export default App;
