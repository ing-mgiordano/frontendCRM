import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import useCrm from "../hooks/useCrm"

const OpportunitiesList = () => {

    const { opportunities } = useCrm()

    const navigate = useNavigate()

    const handleAddOpportunitie = () => {
        navigate('/add-opportunitie')
        
    }

    const addClient = () => {
        //setiar cliente en true y agregar clave fiscal
        console.log("nuevo cliente");
        const taxCode = prompt("Enter customer tax code")
    }

    useEffect(()=>{
        console.log(opportunities)
    }, [])

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
                            <td><Link to='/opportunitie-info'>{op.id}</Link></td>
                            <td>{op.name}</td>
                            <td>{op.surname}</td>
                            <td>{op.email}</td>
                            <td>{op.num}</td>
                            <td>
                                <button
                                    onClick={addClient}
                                >Add To Client</button>
                                <button
                                    /* onClick={deleteClient} */
                                >Delete</button>
                                <button
                                    /* onClick={modifyClient} */
                                >Modify</button>
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