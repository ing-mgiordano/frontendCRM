import { useNavigate } from "react-router-dom"

const AddNewContact = () => {

    const navigate = useNavigate()

    const handleAddContact = () => {

        navigate('/home')
    }

  return (
    <>
        <h2>New Contact</h2>

        <form
            onSubmit={handleAddContact}
        >   
            <div>
                <label htmlFor="id">
                    ID
                </label>
                <input 
                    type="text" 
                    id='id'
                   placeholder='ID'
                />
            </div>
            <div>
                <label htmlFor="way">
                    Way to contact
                </label>
                <select name="ways" id="way">
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
                    type="tel" 
                    id='phone'
                   placeholder='Cellphone'
                />
            </div>

            <div>
                <label htmlFor="date">
                    Date
                </label>
                <input 
                    type="date" 
                    id='date'
                    placeholder='Date'
                />
            </div>

            <div>
                <label htmlFor="summary">
                    Summary
                </label>
                <textarea 
                    rows="5" 
                    cols="15" 
                    placeholder="Summary"></textarea>
            </div>

            <input
                type="submit"
                value="Add"
            />

        </form>
    </>
  )
}

export default AddNewContact