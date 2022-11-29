import { Link, useNavigate } from "react-router-dom"

const OpportunitiesList = () => {

    const navigate = useNavigate()

    const handleAddOpportunitie = () => {
        navigate('/add-opportunitie')
        //setiar cliente en true
    }

    const addClient = () => {
        console.log("nuevo cliente");
    }

  return (
    <div>
        <h2>Opportunities</h2>
        <table>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row"><Link to='/opportunitie-info'>1</Link></th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                        <button
                            onClick={addClient}
                        >Add Client</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <button
            onClick={handleAddOpportunitie}
        >
            Add Opportunitie
        </button>
    </div>
  )
}

export default OpportunitiesList