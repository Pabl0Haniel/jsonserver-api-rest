import React, { useState, useEffect } from "react" // Importa hooks do React
import { httpHelper } from "../helpers/httpHelper" // Importa o helper de requisições HTTP


const DropCompanies = ({ companiesId, handleValue }) => {

	// Estado para armazenar a lista de empresas
	const [companies, setCompanies] = useState(null)
	// Estado para armazenar a empresa selecionada
	const [company, setCompany] = useState(companiesId)

	// URL da API para buscar as empresas
	const url = "http://localhost:5000/companies"
	// Inicializa a API HTTP helper
	const api = httpHelper()

	useEffect(() => {

		// Faz a requisição GET para buscar as empresas
		api
			.get(url)
			.then(res => {
				// Atualiza o estado com as empresas retornadas da API
				setCompanies([{ id: 0, name: "Select Company" }, ...res])
			})
			.catch(err => console.log(err)) // Em caso de erro, exibe no console
	}, [])

	// Se as empresas ainda não foram carregadas, retorna null
	if (!companies) return null

	return (
		<select
		// Nome do select que será passado ao formulário
			name='companiesId'
		// Valor do select é o estado da empresa selecionada
			value={company}
			onChange={e => {
			// Atualiza o estado da empresa selecionada ao alterar o select
				setCompany(e.target.value)
			// Passa o evento para a função handleValue 
				handleValue(e)
			}}
		>
			{companies.map(c => (
			//Mapeia as empresas para criar os options do select
				<option value={c.id} key={c.id}>
					{c.name}
				</option>
			))}
		</select>
	)
}

export default DropCompanies
