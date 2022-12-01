import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { CrmProvider } from './context/CrmProvider';
import Header from './components/Header';
import Login from './pages/Login';
import Home from './pages/Home';
import OpportunitieInfo from './pages/OpportunitieInfo';
import ClientInfo from './pages/ClientInfo';
import AddNewContact from './pages/AddNewContact';


function App() {

  return (
    <BrowserRouter>
      <Header />
      <CrmProvider>
        <Routes>
          <Route index element={ <Login /> }/>
          <Route path='home' element={ <Home /> }/>
          <Route path='opportunitie-info/:id' element={ <OpportunitieInfo /> }/>
          <Route path='add-new-contact' element={<AddNewContact />} />
          <Route path='client-info/:id' element={ <ClientInfo /> }/>
        </Routes>
      </CrmProvider>
    </BrowserRouter>
  );
}

export default App;
