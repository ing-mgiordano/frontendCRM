import { useNavigate } from "react-router-dom"
import useCrm from "../hooks/useCrm"

const OpportunitieInfo = () => {

  const { opportunities } = useCrm() 

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
            {opportunities?.map(op => {
                  return (
            <tbody
              key={op.id}
            >
                      {op.contacts?.map(contac =>(
                        <tr
                          key={contac.id}
                        >
                            <td>{contac.id}</td>
                            <td>{contac.wayContac}</td>
                            <td>{contac.num}</td>
                            <td>{contac.date}</td>
                            <td>{contac.summary}</td>
                        </tr>
                      ))}
            </tbody>
                  )})}
        </table>
      </div>

      <button>Calendar</button>
    </>
  )
}

export default OpportunitieInfo