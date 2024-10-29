import { ButtonElement } from "./styles"

type Props ={
  children: React.ReactNode,
  onClick?: () => void,
  size?: 'sm' | 'md',
  borderRadius?: 'sm' | 'md' | 'rounded',
  width?: string 
}

export const Button = ({children, onClick, size = 'sm', borderRadius = 'sm', width = '100%'}: Props)=>{
  return (
    <ButtonElement
    onClick={onClick}
    $size={size}
    $borderRadius={borderRadius}
    $width={width}
    >
      {children}
    </ButtonElement>
  )
} 
