import useCrm from "../hooks/useCrm"

const ClientInfo = () => {

  const { client } = useCrm() 

  return (
    <>
      <h2>Client Info</h2>
      
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
            {client?.map(cli => {
                  return (
            <tbody
              key={cli.id}
            >
                      {cli.contacts?.map(contac =>(
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

      <button
        className="button"
      >Calendar</button>
    </>
  )
}

export default ClientInfo