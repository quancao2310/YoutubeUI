import Header from './components/Header/Header';
import YoutubeList from './components/YoutubeList/YoutubeList';
import { data } from "./data.js"

function App() {
  return (
    <div className="App">
      <Header />
      <YoutubeList data={data} />
    </div>
  );
}

export default App;
