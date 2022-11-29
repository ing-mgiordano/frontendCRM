import { Link } from 'react-router-dom'

const ClientList = () => {

    const deleteClient = () => {
        console.log("eliminar")
        //setiar cliente en false
    }

  return (
    <div>
        <h2>Clients</h2>
        <table>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    <th scope="col"> </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row"><Link to='/client-info'>1</Link></th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                        <button
                            onClick={deleteClient}
                        >X</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ClientList