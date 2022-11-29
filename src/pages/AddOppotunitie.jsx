import { useNavigate } from "react-router-dom"

const AddOppotunitie = () => {

    const navigate = useNavigate()

  const handleAddOpportunitie = () => {
    console.log("hola")
    navigate('/home')
  }

  return (
    <>
        <form
            onSubmit={handleAddOpportunitie}
        >
            <div>
                <label htmlFor="name">
                    Name
                </label>
                <input 
                    type="text" 
                    id='name'
                    placeholder='Name'
                    /* value={name}
                    onChange={ e => setName(e.target.value)} */
                />
            </div>

            <div>
                <label htmlFor="lastname">
                    Lastname
                </label>
                <input 
                    type="text" 
                    id='lastname'
                    placeholder='Lastname'
                    /* value={lastname}
                    onChange={ e => setLastname(e.target.value)} */
                />
            </div>

            <div>
                <label htmlFor="email">
                  Email
                </label>
                <input 
                    type="email" 
                    id='email'
                    placeholder='Email'
                    /* value={email}
                    onChange={ e => setEmail(e.target.value)} */
                />
            </div>

            <div>
                <label htmlFor="phone">
                  Celphone
                </label>
                <input 
                    type="tel" 
                    id='phone'
                    placeholder='Celphone'
                    /* value={num}
                    onChange={ e => setNum(e.target.value)} */
                />
            </div>

            <input
                type="submit"
                value="Add Opportunitie"
            />

        </form>
    </>
  )
}

export default AddOppotunitie