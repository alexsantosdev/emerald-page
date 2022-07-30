import React from 'react'
import { PlatformNavigation } from '../../components/PlatformNavigation'
import { Container } from './styles'

export function Overview() {
    return(
        <Container>
            <PlatformNavigation />
            <div className="dash">
                
            </div>
        </Container>
    )
}