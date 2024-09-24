import React, { useState } from "react" // Importa o React e o hook useState
import DropComapies from "./DropCompanies" // Importa o componente DropCompanies

// Componente Form que exibe o formulário
const Form = ({ userData = {}, postUser, updateUser }) => {
	// Estado 'user' que guarda os valores dos campos do formulário
	const [user, setUser] = useState({
		name: userData.name ?? "", // Se userData.name existir, usa-o, caso contrário, usa uma string vazia
		username: userData.username ?? "",
		email: userData.email ?? "",
		phone: userData.phone ?? "",
		companiesId: userData.companiesId ?? "0",
	})

	// Função para lidar com mudanças nos campos do formulário
	const handleValue = e => {
		// Atualiza o estado 'user' com o novo valor do campo que foi alterado
		setUser({ ...user, [e.target.name]: e.target.value })
	}

	// Função para enviar o formulário
	const submitUser = e => {
		e.preventDefault() // Evita que a página seja recarregada ao enviar o formulário

		// Se a empresa selecionada for "0", a função é interrompida
		if (user.companiesId === "0") return

		// Se já houver um ID de usuário (usuário existente), atualiza o usuário
		if (userData.id) {
			updateUser(userData.id, user)
		} else {
			// Caso contrário, cria um novo usuário
			postUser(user)
		}
	}

	// Renderiza o formulário
	return (
		<form onSubmit={submitUser} className='row'>
			<input
			/* Input para o nome */
				type='text'
				name='name'
				value={user.name}
				placeholder='Name'
				onChange={e => handleValue(e)}
			/>
			<input
			/* Input para o email */
				type='email'
				name='email'
				value={user.email}
				placeholder='Email'
				onChange={e => handleValue(e)}
			/>
			<input
			/* Input para o telefone, com validação para 10 dígitos */
				type='tel'
				name='phone'
				value={user.phone}
				placeholder='Phone (10)'
				pattern='[0-9]{10}'
				onChange={e => handleValue(e)}
			/>
			<DropComapies companiesId={user.companiesId} handleValue={handleValue} />
			<input
			/* Botão de submit, que muda o texto dependendo se estamos adicionando ou atualizando um usuário */
				className='btn-submit'
				type='submit'
				value={`${!userData.id ? "Add new user" : "Save user"}`}
			/>
		</form>
	)
}

export default Form
