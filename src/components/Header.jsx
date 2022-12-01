import { Link, useLocation, useNavigate } from "react-router-dom"

const Header = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const idOpp = location.pathname.split("/opportunitie-info/")[1]
  const idCli = location.pathname.split("/client-info/")[1]
  
  const handleSingOut = () => {
    navigate("/")
  }

  const handleAddContact = () => {
    if(location.pathname === `/opportunitie-info/${idOpp}`){
      navigate(`/add-new-contact/${idOpp}`)
    }
    if(location.pathname === `/client-info/${idCli}`){
      navigate(`/add-new-contact/${idCli}`)
    }

  }
  
  /* useEffect(() => {
    console.log(location)
  }, []) */

  return (
    <header>
        <div>
            <Link
              to='/home'
            >
              <h2>CRM App</h2>
            </Link>
            
           {location.pathname !== "/" &&
            <div>
              {location.pathname !== "/add-new-contact" && location.pathname !== "/home" &&
              <button
                onClick={handleAddContact}
              >
                Add New Contact
              </button>}
              
              <button
                onClick={handleSingOut}
              >
                Sing Out
              </button>
            </div>}
        </div>
    </header>
  )
}

export default Header