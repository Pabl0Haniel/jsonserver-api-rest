import React, { useState, useEffect } from "react" // Importa o React e os hooks useState e useEffect
import Form from "./Form" // Importa o componente Form
import Table from "./Table" // Importa o componente Table

import { httpHelper } from "../helpers/httpHelper" // Importa o helper para realizar requisições HTTP

// Componente CrudUser que gerencia as operações de CRUD de usuários
const CrudUser = () => {
	const [users, setUsers] = useState(null) // Estado para armazenar a lista de usuários

	const url = "http://localhost:5000/users" // URL da API para o recurso de usuários
	const api = httpHelper() // Instancia o helper para requisições HTTP

	// Hook useEffect que roda uma única vez ao carregar o componente para buscar os usuários
	useEffect(() => {
		getUsers() // Chama a função para buscar os usuários
	}, [])

	// Função para adicionar um novo usuário (POST)
	const postUser = user => {
		api
			.post(`${url}`, { body: user }) // Faz a requisição POST para adicionar um novo usuário
			.then(res => getUsers()) // Após sucesso, busca os usuários atualizados
			.catch(err => console.log(err)) // Loga erros no console em caso de falha
	}

	// Função para atualizar um usuário existente (PUT)
	const updateUser = (id, user) => {
		api
			.put(`${url}/${id}`, { body: user }) // Faz a requisição PUT para atualizar um usuário específico
			.then(res => getUsers()) // Após sucesso, busca os usuários atualizados
			.catch(err => console.log(err)) // printa o erro no console
	}

	// Função para deletar um usuário (DELETE)
	const deleteUser = id => {
		api
			.del(`${url}/${id}`, {}) // Faz a requisição DELETE para remover um usuário específico
			.then(res => getUsers()) // Após sucesso, busca os usuários atualizados
			.catch(err => console.log(err)) // printa o erro no console
	}

	// Função para buscar todos os usuários com os dados da empresa associada
	const getUsers = () => {
		api
			.get(`${url}?_expand=companies`) // Faz a requisição GET com a relação expandida para trazer dados das empresas
			.then(res => {
				setUsers(res) // Atualiza o useState com a lista de usuários
			})
			.catch(err => console.log(err)) // printa o erro no console
	}

	// Se a lista de usuários ainda não foi carregada retorna null
	if (!users) return null

	// Renderiza o formulário para adicionar novo usuário e a tabela com os usuários existentes
	return (
		<>
			<h3>New user</h3>
			<Form postUser={postUser} /> {/* Passa a função postUser para o Form */}

			{/* Tabela com todos os usuários */}
			<div className='all-users'>
				<h3>All users</h3>
				<Table
					users={users} // Passa a lista de usuários para a tabela
					setUsers={setUsers} // Passa o setter para atualizar o estado de usuários
					postUser={postUser} // Passa a função postUser para adicionar novos usuários
					updateUser={updateUser} // Passa a função updateUser para atualizar usuários
					deleteUser={deleteUser} // Passa a função deleteUser para remover usuários
				/>
			</div>
		</>
	)
}

export default CrudUser