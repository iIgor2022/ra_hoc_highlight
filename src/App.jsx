import './App.css'
import List from './components/list'
import { videoList } from './data/videoList'

export default function App() {
  return (
    <List list={ videoList }/>
  );
}