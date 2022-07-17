interface ChildProps {
  color: string;
  onClick: () => void
}

export const Child = ({color, onClick}: ChildProps) => {
  return (
    <div><h2>This is a child in parent component. Color: {color}</h2>
    <button onClick={onClick}>Click me</button>
    </div>
  )
}

// another way to define TS
export const Childv2: React.FC<ChildProps> = ({color, onClick}) => {
  return (
    <div><h2>This is a child V2 in parent component. Color: {color}</h2>
        <button onClick={onClick}>Click me</button>
    </div>
  )
}
