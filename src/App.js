
import WriteBoard from './Component/WriteBoard';
import DataBoard from './Component/DataBoard';
import ListBoard from './Component/ListBoard';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Routes>
      {/* <DataBoard /> */}
      {/* <WriteBoard /> */}
      <Route exact path="/" element={<ListBoard />} />
      <Route exact path="/writeboard" element={<WriteBoard />} />
      <Route exact path="/boarddata/:id" element={<DataBoard />} />
    </Routes>
  );
}

export default App;
