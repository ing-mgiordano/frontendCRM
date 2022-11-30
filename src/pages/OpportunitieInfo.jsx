import { useNavigate } from "react-router-dom"

const OpportunitieInfo = () => {

  const navigate = useNavigate()

  const handleAddContact = () => {
    navigate('/opportunitie-info/add-contact')
  }

  return ( 
    <>
      <h2>Opportunitie Info</h2>
      
      <div>
        <h3>Contacts</h3>
        <table>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Way to Contact</th>
                    <th scope="col">Cel</th>
                    <th scope="col">Date</th>
                    <th scope="col">Summary</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Email</td>
                    <td>64646464</td>
                    <td>11/11/22</td>
                    <td>gfdgfdgdf</td>
                </tr>
            </tbody>
        </table>
      </div>

      <button>Calendar</button>
    </>
  )
}

export default OpportunitieInfo