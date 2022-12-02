import { useContext } from "react";
import CrmContext from "../context/CrmProvider";

const useCrm = () => {
  return useContext(CrmContext)
}
//hook para el provider
export default useCrm