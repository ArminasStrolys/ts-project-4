import { Child } from './Child'

export function Parent() {
  return (
    <div><h2 style={{color: 'DarkRed'}}>This is a parent in app component</h2>
    <Child color='blue'/>
    </div>
  )
}
