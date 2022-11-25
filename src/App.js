
import WriteBoard from './Component/WriteBoard';
import DataBoard from './Component/DataBoard';
import ListBoard from './Component/ListBoard';
import { Route, Routes } from 'react-router-dom';
import BoardUpdate from './Component/BoardUpdate';
import BoardPage from './Component/BoardPage';

function App() {
  return (
    <Routes>
      {/* <DataBoard /> */}
      {/* <WriteBoard /> */}
      <Route exact path="/" element={<BoardPage />} />
      <Route exact path="/writeboard" element={<WriteBoard />} />
      <Route exact path="/boarddata/:id" element={<DataBoard />} />
      <Route exact path="/update/:id" element={<BoardUpdate />} />

    </Routes>
  );
}

export default App;
