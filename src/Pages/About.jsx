import react, { useState } from 'react'
import { useAuth } from '../Store/auth'


function About() {
  const [usernameData, setUsernameData] = useState(true);

  const {user} = useAuth();

  

  return (
    <>
    <h1 className="text-3xl font-bold underline">About</h1>
    Welcome, {user ? `${user.username}` : `to our website`}
  <h1 text-red-200 border-2 border-red-300> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum tempore perferendis inventore iste a, consequuntur quaerat deleniti aliquid recusandae provident. Ratione iusto molestias magni est aliquid molestiae modi aspernatur architecto accusantium incidunt aut alias illum quisquam quas consectetur quos, assumenda vitae ea! Doloribus illo magnam reprehenderit exercitationem minima ab eum.</h1>
    </>
  )
}

export default About
