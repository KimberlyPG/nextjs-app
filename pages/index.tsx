import type { NextPage } from 'next'
import Sidebar from "../components/Sidebar";

const Home: NextPage = () => {
  return (
    <div className="">
      <h1>This is a DOPE spotify 2.0 build</h1>

      <main>
        <Sidebar />
        {/* Center */}
      </main>

      <div>
        {/* Player */}
      </div>
    </div>
  )
}

export default Home
