import { createContext } from "react";


const CrmContext = createContext();

const CrmProvider = ({ children }) => {

  return (
    <CrmContext.Provider
        value={{
            
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