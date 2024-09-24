import React from "react" // Importa o React
import Form from "./Form" // Importa o componente Form

// Componente Table que exibe a lista de usuários com opções para atualizar e deletar
const Table = ({ users, postUser, updateUser, deleteUser }) => {
	// Função que alterna a exibição do formulário para atualizar o usuário
	const showUpdateUser = id => {
		// Seleciona o formulário de atualização associado ao ID do usuário
		const form = document.getElementsByClassName(`show-form-${id}`)
		// Alterna a classe 'hide-form' para mostrar ou esconder o formulário
		form[0].classList.toggle("hide-form")
	}

	// Componente Row
	const Row = ({ user }) => {
		return (
			<>
				<div className='row'>
					{/* Exibe os dados do usuário */}
					<div>{user.name}</div>
					<div>{user.email}</div>
					<div>{user.phone}</div>
					<div>{user.companies.name}</div>
					<div className='buttons'>
						{/* Botão para mostrar o formulário de atualização */}
						<button onClick={() => showUpdateUser(user.id)}>Update</button>
						{/* Botão para deletar o usuário */}
						<button onClick={() => deleteUser(user.id)}>Delete</button>
					</div>
				</div>
				{/* Formulário de atualização do usuário*/}
				<div className={`hide-form show-form-${user.id}`}>
					{/* Componente Form, que permite atualizar os dados do usuário */}
					<Form userData={user} postUser={postUser} updateUser={updateUser} />
				</div>
			</>
		)
	}

	// Renderiza a tabela de usuários
	return (
		<div className='table'>
			/* Cabeçalho da tabela */
			<div className='titles'>
				<div>Name</div>
				<div>Email</div>
				<div>Phone</div>
				<div>Company</div>
				<div>Actions</div>
			</div>
			/* Corpo da tabela com as linhas dos usuários */
			<div className='rows'>
				{/* Mapeia cada usuário para uma Row */}
				{users && users.map(u => <Row user={u} key={u.id} />)}
			</div>
		</div>
	)
}

export default Table
