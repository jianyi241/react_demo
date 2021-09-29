import ReactDOM from 'react-dom'

function Clack(props) {
  const elements = (
    <div className="clack">
      { props.time }
    </div>
  )
  return elements
}

setInterval(() => {
  console.log('重新渲染~')
  ReactDOM.render(<Clack time={new Date().toLocaleTimeString()}/>, document.getElementById('clack'))
}, 1000)

export default Clack
