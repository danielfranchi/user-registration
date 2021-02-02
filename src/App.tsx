import axios from 'axios'
import React from 'react'

const App = () => {

  let inputName = React.useRef<HTMLInputElement>(null)
  let inputAge = React.useRef<HTMLInputElement>(null)
  let inputCompany = React.useRef<HTMLInputElement>(null)
  let inputPhone = React.useRef<HTMLInputElement>(null)

  const cadastrar = () =>{
    const name = inputName.current?.value
    const age = inputAge.current?.value
    const company = inputCompany.current?.value
    const phone = inputPhone.current?.value

    axios.post('http://localhost:4000/usuarios', {
      name: name,
      age: age,
      company:company,
      phone: phone
    })

  }


  return (
    <div>
      <label>Nome:</label><br/>
      <input type="text" placeholder='digite eu nome' ref={inputName} /> <br/><br/>

      <label>Idade:</label><br/>
      <input type="text" placeholder='digite sua idade' ref={inputAge} /> <br/><br/>

      <label>Empresa</label><br/>
      <input type="text" placeholder='digite o nome da sua empresa' ref={inputCompany} /> <br/><br/>

      <label>Telefone:</label><br/>
      <input type="text" placeholder='digite seu telefone' ref={inputPhone} /> <br/><br/>

      <button onClick={cadastrar}>Cadastrar</button>
    </div>
  )
}

export default App
