import React from 'react'

const AddNewContact = () => {
  return (
    <>
        <h2>New Contact</h2>

        <form
            /* onSubmit= */
        >
            <div>
                <label htmlFor="tipo">
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
                    CelPhone
                </label>
                <input 
                    type="tel" 
                    id='phone'
                   placeholder='Celphone'
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