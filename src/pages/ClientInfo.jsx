import { useNavigate } from "react-router-dom"

const ClientInfo = () => {

  const navigate = useNavigate()

  const handleAddContact = () => {
    navigate('/client-info/new-contact')
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
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
            </tbody>
        </table>

        <button
          onClick={handleAddContact}
        >
          Add Contact
        </button>
      </div>

    </>
  )
}

export default ClientInfo