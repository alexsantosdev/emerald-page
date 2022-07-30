import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;

    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: column;

    div.header {
        width: 100%;
        height: 100vh;

        background: #0b0d1f;

        div.columns {
            display: flex;
            flex-direction: row;

            width: 100%;
            height: 100%;

            align-items: center;
            justify-content: center;

            gap: 12px;

            .column {
                display: flex;
                flex-direction: column;

                width: 48%;

                img {
                    width: 480px;
                    align-self: center;
                }

                h2 {
                    color: #fff;
                    font-size: 42px;

                    font-weight: 500;

                    margin-bottom: 2rem;
                }

                p {
                    color: #fff;
                    font-size: 18px;

                    margin-bottom: 2rem;
                }

                .row {
                    display: flex;
                    flex-direction: row;

                    gap: 12px;

                    button {
                        display: flex;
                        flex-direction: row;

                        align-items: center;

                        gap: 12px;

                        background: none;
                        border: none;

                        border: 1px solid #fff;

                        border-radius: 5px;
                        cursor: pointer;

                        padding: 7px 12px;

                        color: #fff;

                        img {
                            width: 32px;
                        }

                        &:hover {
                            transition: 0.2s;
                            opacity: 0.6;
                        }
                    }
                }
            }
        }
    }

    div.secund-section {
        margin-bottom: 4rem;

        div.supported-databases {
            display: flex;
            flex-direction: column;
    
            align-items: center;
    
            gap: 24px;
    
            width: 100%;
            padding: 40px;
            
            span {
                color: #67686d;
            }
    
            img {
                width: 500px;
            }
        }

        .columns {
            display: flex;
            flex-direction: row;

            align-items: center;
            justify-content: center;

            width: 100%;

            gap: 12px;

            .column {
                display: flex;
                flex-direction: column;

                width: 48%;

                padding: 22px;

                h2 {
                    color: #29292e;
                    font-size: 38px;

                    font-weight: 600;

                    margin-bottom: 1rem;
                }

                p {
                    color: #29292e;
                    font-size: 18px;

                    margin-bottom: 1rem;
                }

                img {
                    width: 540px;
                    align-self: center;
                }

                .row {
                    display: flex;
                    flex-direction: row;

                    gap: 12px;

                    align-items: center;

                    button {
                        background: none;
                        border: none;

                        background: #08bd62;
                        padding: 12px 16px;

                        border-radius: 5px;

                        color: #fff;

                        cursor: pointer;

                        &:hover {
                            transition: 0.2s;
                            opacity: 0.7;
                        }
                    }

                    a {
                        text-decoration: none;

                        color: #29292e;

                        &:hover {
                            transition: 0.2s;
                            color: #08bd62;
                        }
                    }
                }
            }
        }
    }

    div.third-section {
        background: #0b0d1f;

        padding: 20px;

        display: flex;
        flex-direction: column;

        div.columns {
            display: flex;
            flex-direction: row;

            align-items: center;
            justify-content: center;

            width: 100%;

            gap: 12px;

            margin-top: 4rem;

            .column {
                display: flex;
                flex-direction: column;

                width: 48%;

                h2 {
                    color: #fff;
                    font-size: 38px;

                    font-weight: 600;

                    margin-bottom: 1rem;
                }

                p {
                    color: #fff;
                    font-size: 18px;

                    margin-bottom: 1rem;
                }

                img {
                    width: 580px;
                    align-self: center;
                }

                .row {
                    display: flex;
                    flex-direction: row;

                    gap: 12px;

                    margin-bottom: 2rem;

                    button {
                        background: none;
                        border: none;

                        background: #08bd62;
                        padding: 12px 16px;

                        color: #fff;
                        border-radius: 5px;

                        cursor: pointer;

                        & + button {
                            background: #171c3d;
                        }

                        &:hover {
                            transition: 0.2s;
                            opacity: 0.6;
                        }
                    }
                }

                span {
                    color: #5c637f;
                }
            }
        }

        .pricing-section {
            display: flex;
            flex-direction: column;

            margin: 4rem 0;

            h2 {
                text-align: center;
                color: #fff;

                font-weight: 600;
                font-size: 38px;
            }

            div.pricing-table {
                display: flex;
                flex-direction: row;

                align-items: center;
                justify-content: center;

                margin-top: 2rem;
                
                .column {
                    font-family: 'Comfortaa', cursive;

                    display: flex;
                    flex-direction: column;

                    width: 400px;
                    height: max-content;

                    background: #fff;
                    padding: 80px 40px;

                    -webkit-box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.2); 
                    box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.2);

                    span {
                        font-weight: 500;
                        font-size: 20px;

                        & + span {
                            margin-top: 8px;

                            font-size: 16px;
                        }
                    }

                    p {
                        margin-top: 2rem;

                        color: #636368;
                        font-size: 12px;
                        font-weight: 500;
                    }

                    hr {
                        border: none;
                        border-bottom: 1px solid #636368;

                        opacity: 0.4;
                        margin: 2rem 0;
                    }

                    ul li {
                        font-size: 12px;
                        line-height: 22px;

                        font-weight: 500;
                    }

                    button {
                        background: none;
                        border: none;

                        background: #08bd62;
                        color: #fff;

                        cursor: pointer;
                        padding: 8px 16px;
                        border-radius: 3px;

                        width: max-content;
                    }

                    & + .column {
                        background: #fafafa;

                        box-shadow: none;

                        button {
                            border: 1px solid #29292e;
                            background: transparent;

                            opacity: 0.4;
                            color: #29292e;
                        }
                    }
                }
            }
        }

        .support-section {
            margin-bottom: 4rem;

            a {
                text-decoration: none;

                background: #08bd62;
                padding: 12px 16px;

                border-radius: 3px;

                width: max-content;
                color: #fff;

                cursor: pointer;

                &:hover {
                    transition: 0.2s;
                    opacity: 0.6;
                }
            }

            div.columns .column img:hover {
                -webkit-animation: shake 1s;
                animation: shake 1s;
            }
        }
    }

    footer {
        display: flex;
        flex-direction: column;

        align-items: center;

        background: #0b0d1f;

        padding: 20px;

        hr {
            border: none;

            border-bottom: 1px solid #171c3d;
            width: 40%;

            margin: 2rem 0;
        }

        div {
            width: 100%;

            display: flex;
            flex-direction: row;

            align-items: flex-end;

            gap: 26px;

            img {
                width: 120px;
            }

            span {
                color: #595999;
            }
        }
    }
`