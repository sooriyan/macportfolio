import './App.css'

import { Navbar, Welcome, Dock } from '#components';
import { Terminal } from '#windows';

import gsap from 'gsap';


function App() {

  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
    </main>
  )
}

export default App
