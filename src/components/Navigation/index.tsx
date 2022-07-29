import LogoImage from '../../assets/images/logo.svg'

import { Container } from './styles'

export function Navigation() {
    return(
        <Container>
            <img src={LogoImage} alt='Olivia logo' />
            <div>
                <a href='!#'>API</a>
                <a href='!#'>Produto</a>
                <a href='!#'>Preços</a>
                {/* <a href='!#'>Login</a> */}
            </div>
        </Container>
    )
}