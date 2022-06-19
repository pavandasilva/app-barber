import styled, { createGlobalStyle } from 'styled-components'
import { lighten } from 'polished'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

     /* width */
    ::-webkit-scrollbar {
      width: 10px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
      background: ${props => props.theme.colors.backgroundLight};
      border-radius: 4px;
      margin-top: 3px;
      margin-bottom: 50px;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${props => props.theme.colors.borderLight};
      border-radius: 4px;
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${props => props.theme.colors.border};
    }
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primaryText};
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
  }

  button {
    cursor: pointer;
    border: none;
  }

  h2 {
    color: ${props => props.theme.colors.primaryText};
    font-size: 16px;
    letter-spacing: 0.075em;
    font-weight: bold;
  }

  .swal2-popup {
    display: none;
    position: relative;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    width: 32em;
    max-width: 100%;
    padding: 1.25em;
    border: none;
    border-radius: 4px;
    background: ${props => props.theme.colors.backgroundLight};
    font-family: inherit;
    font-size: 14px;
  }

  .swal2-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1.8em;
  }

  .swal2-title {
    position: relative;
    max-width: 100%;
    margin: 0 0 .4em;
    padding: 0;
    color: ${props => props.theme.colors.primaryText};
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    text-transform: none;
    word-wrap: break-word;
  }

  .swal2-styled.swal2-confirm {
    border: 0;
    border-radius: 4px;
    background: initial;
    background-color: ${props => props.theme.colors.primary};
    color: #fff;
    font-size: 14px;
  }


  .swal2-styled.swal2-cancel {
    border: 0;
    border-radius: 4px;
    background: initial;
    background-color: ${props => props.theme.colors.backgroundLight};
    color: ${props => props.theme.colors.primaryText};
    font-size: 14px;
    border: none;
  }

  .swal2-icon.swal2-error {
    border-color: ${props => lighten(0.2, props.theme.colors.danger)};
    color: ${props => lighten(0.1, props.theme.colors.danger)};
  }

  .swal2-icon.swal2-error [class^=swal2-x-mark-line] {
    background-color: ${props => lighten(0.1, props.theme.colors.danger)};
  }

  .swal2-icon.swal2-question {
    border-color: ${props => lighten(0.4, props.theme.colors.info)};
    color: ${props => lighten(0.2, props.theme.colors.info)}
  }

  .swal2-icon.swal2-warning {
    border-color: ${props => lighten(0.08, props.theme.colors.warning)};
    color: ${props => lighten(0.04, props.theme.colors.warning)};
  }

  .swal2-close{
    transition: all 0.3s;
  }

  .swal2-close:hover {
    transform: none;
    background: 0 0;
    color: ${props => props.theme.colors.primaryText};
  }

  .swal2-input {
    height: 2.625em;
    padding: 0 .75em;
}

  .swal2-input {
    box-sizing: border-box;
    width: 100%;
    transition: all .3s;
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: 4px;
    background: ${props => props.theme.colors.backgroundLight};
    box-shadow: none;
    color: inherit;
    font-size: 1.125em;
    height: 36px !important;
  }

  .swal2-input.percentage {
    width: 100px;
  }

  .swal2-input.danger {
    color: ${props => props.theme.colors.danger};
  }

  .swal2-popup.swal2-toast.swal2-show {
    animation: swal2-show .3s;
  }

  .swal2-popup.swal2-toast {
    flex-direction: row;
    align-items: center;
    width: auto;
    padding: 15px !important;
    overflow-y: hidden;
    border: solid 1px ${props => props.theme.colors.border} !important;
    box-shadow: 0px 0px 4px 4px rgba(0,0,0,0.05);
  }
`
interface FormRowProps {
  width?: string
}

export const FormRow = styled.div<FormRowProps>`
  display: flex;
  flex-direction: row;
  width: ${props => props.width ? props.width : '100%'};
  height: 60px;
  flex-wrap: wrap;
  align-items: flex-end;

  & > div {
    & + div {
      margin-left: 7px;
    }
  }

`
interface TextStatusProps {
  status?: 'ativo' | 'inativo' | 'sim' | 'nao'
}

export const TextStatus = styled.div<TextStatusProps>`
  width: 100%;
  text-align: center;
  color: ${props => {
    let color
    if (props.status === 'ativo' || props.status === 'sim') {
      color = props.theme.colors.sucess
    } else if (props.status === 'inativo' || props.status === 'nao') {
      color = props.theme.colors.danger
    } else {
      color = props.theme.colors.primaryText
    }

    return color
  }};

  font-weight: ${props => {
    let weight
    if (props.status === 'ativo' || props.status === 'sim' || props.status === 'inativo' || props.status === 'nao') {
      weight = '600'
    } else {
      weight = 'normal'
    }

    return weight
  }}


`
