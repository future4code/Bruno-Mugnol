import axios from 'axios';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { baseUrl, contentTypeHeader } from '../constants/constants';
import useForm from '../hooks/useForm';

const UserApplicationPage = () => {
  const applicationForm = {
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: ""
  }

  const history = useHistory()
  const pathParams = useParams()
  const [form, onChange] = useForm(applicationForm)

  const goToTrips = () => {
    history.push("/trips")
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    onChange(name, value)
  }

  const submitForm = (event) => {
    event.preventDefault()

    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.description,
      profession: form.profession,
      country: form.country
    }

    axios.post(`${baseUrl}/trips/${pathParams.tripID}/apply`, body, contentTypeHeader)
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  return (
    <div>
      <p>UserApplicationPage</p>
      <button onClick={goToTrips}>Voltar</button>
      <br />
      <br />
      <form onSubmit={submitForm}>
        <label>Nome: </label>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={handleInputChange}
        />
        <br />

        <label>Idade: </label>
        <input
          name="age"
          type="number"
          min="1"
          placeholder="31"
          value={form.age}
          onChange={handleInputChange}
        />
        <br />

        <label>Qual a sua motivação? </label>
        <input
          name="applicationText"
          type="text"
          placeholder="Justifique-se aqui"
          value={form.applicationText}
          onChange={handleInputChange}
        />
        <br />

        <label>Profissão: </label>
        <input
          name="profession"
          type="text"
          placeholder="Sua profissão"
          value={form.profession}
          onChange={handleInputChange}
        />
        <br />

        <label>País de origem: </label>
        <input
          name="country"
          placeholder="País"
          value={form.country}
          onChange={handleInputChange}
        />
        <br />

        <button >Enviar</button>
      </form>
    </div>
  );
}

export default UserApplicationPage