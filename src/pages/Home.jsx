import ClientList from "../components/ClientList"
import OpportunitiesList from "../components/OpportunitiesList"


const Home = () => {
  return (
    <div className="home">
        <OpportunitiesList />
        <ClientList />
    </div>
  )
}

export default Home