import { useEffect } from "react"
import { Link } from "react-router-dom"
import useCrm from "../hooks/useCrm"



const OpportunitiesList = () => {


    const { opportunities, deleteOpportunity, addClient } = useCrm()

  return (
    <div className="list">
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
                {opportunities?.map((op) => (
                        <tr
                            key={op.id}
                        >
                            <td><Link to={`/opportunitie-info/${op.id}`}><button className='button'>{op.id}</button></Link></td>
                            <td>{op.name}</td>
                            <td>{op.surname}</td>
                            <td>{op.email}</td>
                            <td>{op.num}</td>
                            <td>
                                <button
                                    className="button"
                                    onClick={() => addClient(op.id)}
                                >Add As Client</button>
                                <button
                                    className="button-delete"
                                    onClick={() => deleteOpportunity(op.id)}
                                >Delete</button>
                            </td>
                        </tr>
                    ))  
                }
            </tbody>
        </table>
    </div>
  )
}

export default OpportunitiesList