import React from 'react'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import InputMask from 'react-input-mask'

import './form.css'
import { useNavigate } from 'react-router-dom'

const schema = yup
  .object({
    nome: yup.string().required('O nome é obrigatório'),
    cpf: yup.string().required('O CEP é obrigatório'),
    cep: yup.string().required('O CEP é obrigatório'),
    datanascimento: yup.string().required('O data de nasimento é obrigatório'),
    rua: yup.string().required('O rua é obrigatório'),
    numero: yup.string().required('O numero é obrigatório'),
    bairro: yup.string().required('O bairro é obrigatório')
  })
  .required()

export default function Formulario() {
  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  let users = JSON.parse(localStorage.getItem('users')) || []

  let navigate = useNavigate()

  const onSubmit = e => {
    let user = e
    if (user) users.push(user)
    console.log(user)
    localStorage.setItem('users', JSON.stringify(users))

    return navigate('/')
  }

  const checkCEP = e => {
    if (!e.target.value) return

    const cep = e.target.value.replace(/\D/g, '')
    console.log(cep)

    //consultando o cep na api viacep
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => res.json())
      .then(data => {
        setValue('rua', data.logradouro)
        setValue('bairro', data.bairro)
        setValue('cidade', data.localidade)
        setValue('estado', data.uf)

        setFocus('numero')
      })
      .catch(err => console.log(err))
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <label>
        Nome:
        <input type="text" {...register('nome', { required: true })} />
        <span>{errors.nome?.message}</span>
      </label>
      <label>
        Data de Nascimento:
        <InputMask
          mask="99/99/9999"
          type="text"
          {...register('datanascimento', { required: true })}
        />
        <span>{errors.datanascimento?.message}</span>
      </label>
      <label>
        CPF:
        <InputMask
          mask="999.999.999-99"
          type="text"
          {...register('cpf', { required: true })}
        />
        <span>{errors.cpf?.message}</span>
      </label>

      <label>
        CEP:
        <InputMask
          mask="99999-999"
          type="text"
          {...register('cep', { required: true })}
          onBlur={checkCEP}
        />
        <span>{errors.cep?.message}</span>
      </label>

      <label>
        Rua
        <input type="text" {...register('rua')} />
        <span>{errors.rua?.message}</span>
      </label>

      <label>
        Nº:
        <input type="number" {...register('numero')} />
        <span>{errors.numero?.message}</span>
      </label>

      <label>
        Bairro:
        <input type="text" {...register('bairro')} />
        <span>{errors.bairro?.message}</span>
      </label>

      <label>
        Cidade:
        <input type="text" {...register('cidade')} />
        <span>{errors.cidade?.message}</span>
      </label>

      <label>
        Estado:
        <input type="text" {...register('estado')} />
        <span>{errors.estado?.message}</span>
      </label>
      <button type="submit">Enviar</button>
    </form>
  )
}
