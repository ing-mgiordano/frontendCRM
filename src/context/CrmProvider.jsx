import { createContext, useEffect, useState } from "react";
import clientAxios from "../config/clientAxios";


const CrmContext = createContext();

const CrmProvider = ({ children }) => {

  const [opportunities, setOpportunities] = useState()
  const [client, setClient] = useState()

  useEffect(() => {
    const getOpportunities = async() => {
      try {
        const { data } = await clientAxios('/opportunities')
        setOpportunities(data)
      } catch (error) {
        console.log(error)
      }
    }

    const getClients = async() => {
      try {
        const { data } = await clientAxios('/clients')
        setClient(data)
      } catch (error) {
        console.log(error)
      }
    }

    getOpportunities()
    getClients()
  }, [])

  return (
    <CrmContext.Provider
        value={{
          opportunities,
          client
      }}
    >
        { children }
    </CrmContext.Provider>
  )
}

export {
    CrmProvider
}

export default CrmContext