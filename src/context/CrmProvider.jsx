import { createContext, useEffect, useState } from "react";
import clientAxios from "../config/clientAxios";

const CrmContext = createContext();

const CrmProvider = ({ children }) => {

  const [opportunities, setOpportunities] = useState()
  const [client, setClient] = useState()
  const [deleteC, setDeleteC] = useState()
  const [addC, setAddC] = useState()
  const [clientBody, setClientBody] = useState({
    id: null,
    wayContac: '',
    num: '',
    date: '',
    summary: ''
  })
  

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
  }, [deleteC, addC])

  const addClient = async(id) => {
    try {
      const { data } = await clientAxios.post(`/opportunities/${id}`)
      setAddC(data)
    } catch (error) {
      console.log(error)
    }
  }

  const addContac = async(id) => {
    try {
      const { data } = await clientAxios.post(`/add-new-contac/${id}`, clientBody)
      setClientBody(data)
      console.log(clientBody);
    } catch (error) {
      console.log(error);
    }
  }

  const deleteOpportunity = async(id) => {
    try {
      const { data } = await clientAxios.post(`/delete-opportunitie/${id}`)
      setOpportunities(data)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteClient = async(id) => {
    try {
      const { data } = await clientAxios.post(`/clients/${id}`)
      setDeleteC(data)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <CrmContext.Provider
        value={{
          opportunities,
          client,
          deleteOpportunity,
          deleteClient,
          addClient
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