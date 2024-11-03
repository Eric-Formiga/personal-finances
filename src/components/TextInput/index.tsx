import { ChangeEvent, useId } from "react"
import { Container, Input, Label } from "./styles"

type Props = {
  value: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  label?: string,
  placeholder: string,
  borderRadius?: 'sm' | 'md'
}

const TextInput = ({value, onChange, label, placeholder, borderRadius = 'md'}:Props)=> {
  const refernceId = useId() 

  return(
    <Container>
      {label && <Label htmlFor={refernceId}>{label}</Label>}

      <Input
        id={refernceId}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        $borderRadius={borderRadius}
      />
    </Container>
  )
}

export default TextInput;