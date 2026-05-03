import './App.css'

import { Navbar, Welcome, Dock } from '#components';
import { Safari, Terminal } from '#windows';

import gsap from 'gsap';


function App() {

  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
    </main>
  )
}

export default App
