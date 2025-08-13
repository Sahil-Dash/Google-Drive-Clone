import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import UnauthorizedLayout from './layouts/UnauthorizedLayout';
// import AuthorizedLayout from './path/to/AuthorizedLayout';

function App() {
  return (
    <>
    {/* <div className='form-title'>
      Text
    </div> */}
    <BrowserRouter>
      <Routes>
        <Route path="/auth/*" element={<UnauthorizedLayout />} />
        {/* <Route path="/layout/*" element={<AuthorizedRoute><AuthorizedLayout /></AuthorizedRoute>} /> */}
        <Route path="/" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;