import { Link } from 'react-router-dom'
import useCrm from "../hooks/useCrm"

const ClientList = () => {

    const { client, deleteClient } = useCrm()

  return (
    <div className='list'>
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
                {client?.map((cl) => (
                        <tr
                            key={cl.id}
                        >
                            <td><Link to={`/client-info/${cl.id}`}><button className='button'>{cl.id}</button></Link></td>
                            <td>{cl.name}</td>
                            <td>{cl.surname}</td>
                            <td>{cl.email}</td>
                            <td>{cl.num}</td>
                            <td>{cl.taxCode}</td>
                            <td>
                                <button
                                className='button-delete'
                                    onClick={() => deleteClient(cl.id)}
                                >Delete as Client</button>
                            </td>
                        </tr>
                    ))  
                }
            </tbody>
        </table>
    </div>
  )
}

export default ClientList