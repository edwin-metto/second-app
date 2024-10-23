import React from 'react'

function Form() {
    const [formData,setFormData]=(
        {
            name:'',
            email:'',
        });
        const handleChange =() =>{
            setFormData({
                ...formData,
            })
        }
    
    const handleSubmit=()=>{
        event.preventDefault();
        alert('successfully submitted')
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                />
            </label>
    <br/>
    <button type='submit'>submit</button>

        </form>
        

    </div>
  )
}

export default Submit