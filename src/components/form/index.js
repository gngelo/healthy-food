import React from 'react'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import './form.css'

const schema = yup
  .object({
    nome: yup.string().required('O nome é obrigatório'),
    cpf: yup
      .string()
      .min(11, 'Digite no minimo 8 números!')
      .max(11)
      .required('O CEP é obrigatório'),
    cep: yup
      .string()
      .min(8, 'Digite no minimo 8 números!')
      .max(8)
      .required('O CEP é obrigatório'),
    datanascimento: yup
      .string('O data de nasimento é obrigatório')
      .required()
      .max(8)
      .min(8),
    cpf: yup.string().required('O cpf é obrigatório').max(11).min(11),
    rua: yup.string().required('O rua é obrigatório'),
    numero: yup.string().required('O numero é obrigatório'),
    bairro: yup.string().required('O bairro é obrigatório'),
    cidade: yup.string().required('O cidade é obrigatório'),
    estado: yup.string().required('O estado é obrigatório')
  })
  .required()

export default function Formulario() {
  //para usar useForm, instalamos via npm install react-hook-form
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

  const onSubmit = e => {
    let user = e
    if (user) users.push(user)
    console.log(user)
    localStorage.setItem('users', JSON.stringify(users))
  }

  const checkCEP = e => {
    if (!e.target.value) return

    //removendo espaço, pontos, traços do campo usando regex
    const cep = e.target.value.replace(/\D/g, '')
    console.log(cep)

    //consultando o cep na api viacep
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => res.json())
      .then(data => {
        // console.log(data)

        //setando dados no formulario
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
        <input type="text" {...register('datanascimento')} />
        <span>{errors.datanascimento?.message}</span>
      </label>
      <label>
        CPF:
        <input type="text" {...register('cpf', { required: true })} />
        <span>{errors.cpf?.message}</span>
      </label>

      <label>
        CEP:
        <input
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
        <input type="text" {...register('numero')} />
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
