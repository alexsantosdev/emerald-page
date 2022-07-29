import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;

    width: 100%;

    display: flex;
    flex-direction: row;

    padding: 20px;
    justify-content: space-between;

    height: 80px;

    div {
        display: flex;
        flex-direction: row;

        align-items: center;

        gap: 16px;

        a {
            text-decoration: none;
            color: #fff;

            padding: 7px;

            // &:last-child {
            //     border: 1px solid #fff;
            //     border-radius: 8px;

            //     padding: 7px 12px;

            //     &:hover {
            //         border-color: #08bd62;
            //     }
            // }

            &:hover {
                transition: 0.2s;
                color: #08bd62;
            }
        }
    }

    img {
        width: 100px;
    }
`