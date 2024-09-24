// Função responsável por criar os métodos de requisições HTTP
export const httpHelper = () => {

	// Função interna para fazer a requisição HTTP customizada
	const customFetch = async (url, options = {}) => {
		// Define o método padrão como "GET"
		const defaultMethod = "GET"
		// Define os cabeçalhos padrão para requisições de conteúdo JSON
		const defaultHeaders = {
			"Content-Type": "application/json",
			Accept: "application/json",
		}

		const controller = new AbortController()
		// Associa o sinal do controlador à requisição
		options.signal = controller.signal

		// Usa o método fornecido em options ou o método padrão "GET"
		options.method = options.method || defaultMethod

		// Mescla os cabeçalhos fornecidos em options com os cabeçalhos padrão
		options.headers = options.headers
			? { ...defaultHeaders, ...options.headers }
			: defaultHeaders

		// Converte o body da requisição para uma string JSON, ou remove o body se for falso
		options.body = JSON.stringify(options.body) || false
		if (!options.body) delete options.body

		setTimeout(() => {
			controller.abort()
		}, 3000)

		// Tenta fazer a requisição e retorna a resposta convertida em JSON
		try {
			const response = await fetch(url, options)
			return await response.json()
		} catch (err) {
			return err
		}
	}

	// Função para fazer uma requisição GET
	const get = (url, options = {}) => customFetch(url, options)

	// Função para fazer uma requisição POST
	const post = (url, options) => {
		options.method = "POST"
		return customFetch(url, options)
	}

	// Função para fazer uma requisição PUT
	const put = (url, options) => {
		options.method = "PUT"
		return customFetch(url, options)
	}

	// Função para fazer uma requisição DELETE
	const del = (url, options) => {
		options.method = "DELETE"
		return customFetch(url, options)
	}
	
	// Retorna os metodos para serem exportados
	return {
		get,
		post,
		put,
		del,
	}
}
