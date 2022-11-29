import { Link, useNavigate } from "react-router-dom"

const OpportunitiesList = () => {

    const navigate = useNavigate()

    const handleAddOpportunitie = () => {
        navigate('/add-opportunitie')
        
    }

    const addClient = () => {
        //setiar cliente en true y agregar clave fiscal
        console.log("nuevo cliente");
        const taxCode = prompt("Enter customer tax code")
    }

  return (
    <div>
        <h2>Opportunities</h2>
        <table>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Lastname</th>
                    <th scope="col">Email</th>
                    <th scope="col">Cel</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row"><Link to='/opportunitie-info'>1</Link></th>
                    <td>Pepe</td>
                    <td>Pepito</td>
                    <td>1234@123.com</td>
                    <td>123456</td>
                    <td>
                        <button
                            onClick={addClient}
                        >Add Client</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default OpportunitiesList