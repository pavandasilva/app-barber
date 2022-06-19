import React, {
  ChangeEvent,
  FocusEvent,
  InputHTMLAttributes,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'

import throttle from 'lodash.throttle'
import CurrencyInput from 'react-currency-input-field'
import { FaEye, FaInfoCircle } from 'react-icons/fa'
import InputMask from 'react-input-mask'
import { IconType } from 'react-icons'
import { Wrapper, Container, IconPassword, Label, IconError, Icon } from './styles'
import { getIEMask, IEType } from '../../helpers/getIEMask'
import { Modal, ModalMode } from '../Modal'
import { ToolTip } from '../ToolTip'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  startIcon?: IconType
  label?: string
  error?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onChangeDebounce?: boolean
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  width?: string
  type?: 'cnpj' | 'cpf' | 'text' | 'password' | 'email' | 'cep' | 'ddd' | 'telefone' | 'celular' | 'number' | 'currency' | IEType
  f2Title?: string
  f2Content?: React.ReactNode
  f2ModalMode?: ModalMode
  f2CallBack?: (value: any) => void
  ref?: any,
  onCurrencyTypeValueChange?: (value?: string) => void
}

const isIeType = (type: string): boolean => type?.includes('ie-')

export interface InputF2 {
  close?: () => void
  callBack?: (data: any) => void
}

export const Input = ({
  startIcon: StartIcon,
  label,
  error,
  onChange,
  onChangeDebounce = false,
  onBlur,
  width,
  disabled,
  f2Title,
  f2Content,
  f2CallBack,
  f2ModalMode,
  type: typeProp,
  ref,
  onCurrencyTypeValueChange,
  ...rest
}: InputProps) => {
  const [isActive, setIsActive] = useState(false)
  const [hasContent, setHasContent] = useState(false)
  const [type, setType] = useState('text')
  const [showPassword, setShowPassword] = useState(false)
  const [inputError, setInputError] = useState('')
  const [showToolTip, setShowToolTip] = useState(false)
  const [mask, setMask] = useState('')
  const [f2ModalIsvisible, setF2ModalIsvisible] = useState(false)
  const inputEl = useRef<any>({})
  const inputElCurrency = useRef<any>({})

  useEffect(() => {
    if (isIeType(typeProp as string)) {
      setMask(getIEMask(typeProp as IEType))
    } else {
      if (typeProp === 'cnpj') {
        setMask('99.999.999/9999-99')
      } else if (typeProp === 'cpf') {
        setMask('999.999.999-99')
      } else if (typeProp === 'cep') {
        setMask('99999-999')
      } else if (typeProp === 'ddd') {
        setMask('99')
      } else if (typeProp === 'telefone') {
        setMask('9999-9999')
      } else if (typeProp === 'celular') {
        setMask('99999-9999')
      } else if (typeProp === 'password') {
        setType('password')
      }
    }
  }, [typeProp])

  useEffect(() => {
    setInputError(error as string)
  }, [error])

  useEffect(() => {
    let value = inputEl?.current?.props?.value?.toString()

    if (typeProp !== 'currency' && value) {
      value = value.replace(/[^\w\s]/gi, '').replace(/_/g, '')
    }

    if (value && value.length > 0) {
      setHasContent(true)
    } else {
      setHasContent(false)
    }
  }, [inputEl.current.props, typeProp])

  useEffect(() => {
    let value = inputEl?.current?.props?.value?.toString()

    if (typeProp !== 'currency' && value) {
      value = value.replace(/[^\w\s]/gi, '').replace(/_/g, '')
    }

    if (value && value.length > 0) {
      setHasContent(true)
    } else {
      setHasContent(false)
    }
  }, [inputElCurrency.current.props, typeProp])

  useEffect(() => {
    if (typeProp === 'password') {
      setType(showPassword ? 'text' : 'password')
    } else if (typeProp === 'number') {
      setType('number')
    }
  }, [showPassword, typeProp])

  const onFocus = useCallback(() => {
    setIsActive(true)
  }, [])

  const inputOnBlur = useCallback((e: FocusEvent<HTMLInputElement>) => {
    setIsActive(false)

    if (onBlur) {
      onBlur(e)
    }
  }, [onBlur])

  const handleOnMouseOver = useCallback(() => {
    setShowToolTip(true)
  }, [])

  const handleOnMouseOut = useCallback(() => {
    setShowToolTip(false)
  }, [])

  const handleOnKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'F2') {
      setF2ModalIsvisible(true)
    }
  }, [])

  const F2Content = useCallback(() => {
    return React.cloneElement(f2Content as ReactElement, {
      close: () => setF2ModalIsvisible(false),
      callBack: f2CallBack
    })
  }, [f2CallBack, f2Content])

  const handleOnChangethrottle = useCallback(throttle((e) => {
    onChange && onChange(e)
  }, 1000), [])

  return (
    <Wrapper className="wrapper-input" width={width}>
      {(!!label || (hasContent && !!label)) && <Label isActive={isActive || (!isActive && hasContent)}>{label}</Label>}
      <Container
        isActive={isActive}
        error={inputError}
        hasStartIcon={!!StartIcon}
        disabled={disabled}
        hasf2={!!f2Content}
      >
        {StartIcon && <Icon isActive={isActive} error={inputError} hasStartIcon={!!StartIcon}><StartIcon /></Icon>}

        {typeProp === 'currency'
          ? <CurrencyInput
            ref={inputElCurrency}
            placeholder={rest.placeholder}
            onBlur={inputOnBlur}
            decimalsLimit={2}
            decimalSeparator=","
            groupSeparator="."
            onValueChange={onCurrencyTypeValueChange}
            onFocus={onFocus}
            value={rest.value}
          />
          : <InputMask
            ref={inputEl}
            {...rest}
            disabled={disabled}
            onFocus={onFocus}
            onKeyDown={handleOnKeyDown}
            onChange={onChangeDebounce ? handleOnChangethrottle : onChange}
            type={type}
            mask={mask}
            onBlur={inputOnBlur}
          />

        }

        {typeProp === 'password' && (
          <IconPassword
            showPassword={showPassword}
            onClick={() => setShowPassword(sp => !sp)}
          >
            <FaEye />
          </IconPassword>
        )}

        {!!inputError && (
          <IconError error={inputError}>
            <FaInfoCircle onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut} />
          </IconError>
        )}
        {showToolTip && !!error && <ToolTip>{error}</ToolTip>}
      </Container>

      {(!!f2Content && f2ModalIsvisible) &&
        <Modal mode={f2ModalMode} title={f2Title} close={() => setF2ModalIsvisible(false)} >{f2Content && <F2Content />} </Modal>}
    </Wrapper>
  )
}
