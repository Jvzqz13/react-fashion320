import styled from 'styled-components'

export const Container = styled.div`
width: 70%;
margin: auto;
/* border: 3px solid lightgray; */
padding: 20px;
`

export const Title = styled.h1`
font-size: 4rem;
text-align: left;
color: red;
font-weight: 100;
Letter-spacing: 1px;
margin-left: 2rem;
margin-bottom: 0;
`
export const SubTitle = styled.h2`
text-align: left;
color: gray;
font-weight: 300;
Letter-spacing: 1px;
margin-left: 2rem;
margin-top: 0;
`
export const Navi = styled.nav`
    ul {
        display: flex;
        justify-content: space-between;
        width: 90%;
        list-style-type: none;
        text-decoration: none;
    }
            a {
                color: lightgray;
            }
`

export const ArticleCont = styled.article`
    h3 {
        font-size: 1.5rem;
        color: gray;
        font-weight: 200;
        padding: 0;
        margin-bottom: 0;
        margin-top: 4rem;
    }
    h2 {
        font-weight: 400;
        font-size: 2rem;
        padding: 0;
        margin-top: 0%;
        margin-bottom: 1rem;
    }
    P {
        width: 90%;
    }
    p::first-letter {
    color: lightgray;
    font-size: 4rem;
    float: left;
    padding-right: 10px;
    }

    a {
        display: flex;
        justify-content: end;
        color: tomato;
        text-decoration: none;
        font-weight: 700;
        margin-bottom: 2rem;
    }
`

export const FootNav = styled.nav`
    ul {
        margin-top: 3rem;
        display: flex;
        justify-content: space-between;
        list-style-type: none;
        
    }
        a {
            color: lightgray;
            color: tomato;
            text-decoration: none;
            }
`

export const FooterCopyright = styled.p`
color: lightgray;
`