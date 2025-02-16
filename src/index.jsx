import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')).render(
  <main>
    <img src="src/assets/react.svg" alt="react logo" width="40px"/>
    <h1>Greetings</h1>
    <ul>
      <li>Hi, I'm Yingkai</li>
      <li>This is my first React project</li>
    </ul>
  </main>,
)