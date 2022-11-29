import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { CrmProvider } from './context/CrmProvider';
import Header from './components/Header';
import Login from './pages/Login';
import Home from './pages/Home';
import OpportunitieInfo from './pages/OpportunitieInfo';
import ClientInfo from './pages/ClientInfo';
import AddOppotunitie from './pages/AddOppotunitie';
import NewContact from './pages/NewContact';
import NewContactClient from './pages/NewContactClient';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <CrmProvider>
        <Routes>
          <Route index element={ <Login /> }/>
          <Route path='home' element={ <Home /> }/>
          <Route path='opportunitie-info' element={ <OpportunitieInfo /> }/>
          <Route path='add-opportunitie' element={ <AddOppotunitie /> }/>
          <Route path='opportunitie-info/add-contact' element={ <NewContact /> }/>
          <Route path='client-info' element={ <ClientInfo /> }/>
          <Route path='client-info/new-contact' element={ <NewContactClient /> }/>
        </Routes>
      </CrmProvider>
    </BrowserRouter>
  );
}

export default App;
