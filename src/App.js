/*importa o componente LogoIcon*/
import { LogoIcon } from "./assets/icons"

/*importa o componente CrudUser*/
import CrudUser from "./components/CrudUser"

/*importa o arquivo de estilo css, que contem as regras de estilo*/
import "./styles/App.css"

/*Define o componente App como uma função*/
function App() {
	return (
		<>
			<header>
				<div className='header__content'>
					<div className='logo'>
						<LogoIcon />
						<strong>JSON SERVER API</strong>
					</div>
				</div>
			</header>
			<main>
				<CrudUser />
			</main>
		</>
	)
}

/*div className='header__content = Essa div agrupa o conteúdo do cabeçalho*/
/*div className='logo' = Envolve o logotipo e o título da aplicação. É onde o ícone e o nome são renderizados.*/
/*CrudUser = Renderiza o componente CrudUser, que é responsável por lidar com operações CRUD para os usuários.*/

export default App
