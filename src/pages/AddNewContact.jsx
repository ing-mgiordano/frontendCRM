import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import useCrm from "../hooks/useCrm";

const AddNewContact = () => {

    const { addContac, clientBody, setClientBody } = useCrm()
    
    const params = useParams()
    const navigate = useNavigate()
    
    const {id} = params;

    const [id2, setId2] = useState()
    const [wayContact, setWayContact] = useState('')
    const [phone, setPhone] = useState('')
    const [date, setDate] = useState('')
    const [summary, setSummary] = useState('')
    
    const handleAddContact = () => {
        setClientBody({
            wayContac: wayContact,
            num: phone,
            date: date,
            summary: summary
          })
        /* addContac(id, clientBody) */
        console.log(id);
        console.log(clientBody);
    }


  return (
    <>
        <div
            className="wraper"
        >
            <h2>New Contact</h2>

            <form
                onSubmit={handleAddContact}
                action={`/add-new-contac/${id}`}
            >

                    <div>
                        <label 
                            htmlFor="id"
                        >
                            ID
                        </label>
                        <input
                            className="input"
                            type="text" 
                            id='id'
                            placeholder='ID'
                            value={id}
                            onChange={e => setId2(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="way">
                            Way to contact
                        </label>
                        <select 
                            name="ways" 
                            id="way" 
                            className="input" 
                            value={wayContact}
                            onChange={e => setWayContact(e.target.value)}
                        >
                            <option value="">-- Select --</option>
                            <option value="email">Email</option>
                            <option value="call">Call</option>
                            <option value="meeting">Meeting</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="phone">
                            CellPhone
                        </label>
                        <input
                            className="input"
                            type="tel" 
                            id='phone'
                            placeholder='Cellphone' 
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="date">
                            Date
                        </label>
                        <input 
                            className="input"
                            type="datetime-local" 
                            id='date'
                            placeholder='Date'
                            value={date}
                            onChange={e => setDate(e.target.value)}
                        />
                    </div>

                    <div>
                        <label 
                            htmlFor="summary"
                        >
                            <span>Summary</span>
                        </label>
                            <textarea
                                className="input"
                                rows="5" 
                                cols="15" 
                                value={summary}
                                onChange={e => setSummary(e.target.value)}
                            ></textarea>
                    </div>
                    <div>
                        <input
                            className="button"
                            type="submit"
                            value="Add"
                        />
                    </div>
            </form>
        </div>
    </>
  )
}

export default AddNewContact