import { useState } from "react"

const Form = ({addColor}) => {
    const [color,setColor]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        addColor(color)
    }
  return (
    <section className="container">
        <h4>Code Generator</h4>
        <form className="color-form" onSubmit={handleSubmit}>
            <input type="color" value={color} onChange={(e)=>setColor(e.target.value)}/>
            <input type="text" value={color} onChange={(e)=>setColor(e.target.value)} placeholder="enter color value"/>
            <button className="btn" type="submit">Generate</button>
        </form>
    </section>
  )
}
export default Form