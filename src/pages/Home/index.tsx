import React  from 'react'
import { Navigation } from '../../components/Navigation'

import VscodeIcon from '../../assets/icons/vscode-icon.svg'
import WindowsIcon from '../../assets/icons/windows-icon.svg'
import WebIcon from '../../assets/icons/web-icon.svg'

import LogoWhiteImage from '../../assets/images/logo-white.svg'
import LandingImage1 from '../../assets/images/landing-1.svg'
import LandingImage2 from '../../assets/images/landing-2.svg'
import LandingImage3 from '../../assets/images/landing-3.svg'
import LandingImage4 from '../../assets/images/landing-4.svg'
import LandingImage5 from '../../assets/images/landing-5.svg'

import { Container } from './styles'

export function Home() {
    return (
        <Container>
            <div className="header">
                <Navigation />
                <div className="columns">
                    <div className="column">
                        <img src={LandingImage1} alt='Landing-1' />
                    </div>
                    <div className="column">
                        <h2>Uma ferramenta para todas as fontes de dados</h2>
                        <p>
                            Os recursos mais avançados para explorar, processar e administrar
                            todas as fontes de dados. Transforme sua jornada de gerenciamento de 
                            banco de dados.
                        </p>
                        <div className="row">
                            <button>
                                <img src={VscodeIcon} alt='Visual Studio Code Icon' />
                                <span>Extensão para vscode</span>
                            </button>
                            <button>
                                <img src={WindowsIcon} alt='Windows Icon' />
                                Windows .exe
                            </button>
                            <button>
                                <img src={WebIcon} alt='Web Icon' />
                                Web app
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="secund-section">
                <div className="supported-databases">
                    <span>Suporte para os principais banco de dados</span>
                    <img src={LandingImage2} alt='Landing-2' />
                </div>
                <div className="columns">
                    <div className="column">
                        <h2>Gerencie em poucos passos com nossa API</h2>
                        <p>
                            Se você busca praticidade, experimente a nossa Collection com todas 
                            as funcionalidades da API para fazer sua modelagem de dados.
                        </p>
                        <div className="row">
                            <button>Experimente agora</button>
                            <a href="!#">Ver documentação</a>
                        </div>
                    </div>
                    <div className="column">
                        <img src={LandingImage3} alt='Landing-3' />
                    </div>
                </div>
            </div>
            <div className="third-section">
                <div className="columns">
                    <div className="column">
                        <img src={LandingImage4} alt='Landing-4' />
                    </div>
                    <div className="column">
                        <h2>Plataforma moderna para times modernos</h2>
                        <p>
                            A nossa plataforma une minimalismo e modernidade em uma 
                            única interface totalmente dinâmica, construa dados de forma totalmente eficiente.
                        </p>
                        <div className="row">
                            <button>Experimente online</button>
                            <button>Baixar plataforma</button>
                        </div>
                        <span>Totalmente gratuito.</span>
                    </div>
                </div>
                <div className="pricing-section">
                    <h2>Bem-vindo ao novo mundo <br />de análise de dados</h2>
                    <div className="pricing-table">
                        <div className="column">
                            <span>Iniciante</span>
                            <span className="price">R$ 0/mês</span>
                            <p>Para DBAs, desenvolvedores e entusiastas.</p>
                            <hr />
                            <ul>
                                <li>Conecte qualquer banco de dados.</li>
                                <li>Execute suas queries.</li>
                                <li>Exporte seus dados.</li>
                                <li>Interface sedutora.</li>
                            </ul>
                            <hr />
                            <button>Experimente agora</button>
                        </div>
                        <div className="column">
                            <span>Profissional</span>
                            <span className="price">Let's talk!</span>
                            <p>Para grandes times e corporações</p>
                            <hr />
                            <ul>
                                <li>Tudo o que tem no iniciante :)</li>
                            </ul>
                            <hr />
                            <button className="disabled" disabled>Não comercializável</button>
                        </div>
                    </div>
                </div>
                <div className="support-section">
                    <div className="columns">
                        <div className="column">
                            <h2>Apoie esse projeto :)</h2>
                            <p>
                                Se você curtiu o projeto e a ideia, me dê uma estrelinha no 
                                GitHub, sua contribuição será muito apreciada.
                            </p>
                            <a href="https://github.com/alexsantosdev/olivia-vscode-extension">Apoiar esse carinha \o/</a>
                        </div>
                        <div className="column">
                            <img src={LandingImage5} alt='Landing-5' />
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <hr />
                <div>
                    <img src={LogoWhiteImage} alt='Olivia white' />
                    <span>® 2022 Olivia Platform.</span>
                </div>
            </footer>
        </Container>
    )
}