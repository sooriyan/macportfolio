import './App.css'

import { Navbar, Welcome, Dock, Home } from '#components';
import { Finder, Resume, Safari, Terminal, Text, Image, Contact, LockScreen } from '#windows';

import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import useLockStore from '#store/lock';
gsap.registerPlugin(Draggable);

function App() {
  const { isLocked } = useLockStore();

  if (isLocked) {
    return <LockScreen />
  }

  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />

      <Home />
    </main>
  )
}

export default App
