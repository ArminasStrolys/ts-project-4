interface ChildProps {
  color: string;
}

export function Child({color}: ChildProps) {
  return (
    <div><h2>This is a child in parent component. Color: {color}</h2></div>
  )
}
