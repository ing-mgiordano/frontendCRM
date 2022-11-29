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
                    <th scope="col">Name</th>
                    <th scope="col">Lastname</th>
                    <th scope="col">Email</th>
                    <th scope="col">Cel</th>
                    <th scope="col">Tax Code</th>
                    <th scope="col"> </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row"><Link to='/client-info'>1</Link></th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>1234</td>
                    <td>fnsjin32fi427hfw</td>
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