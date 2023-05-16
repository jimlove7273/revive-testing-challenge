import type { NextPage } from "next"
import { useEffect, useState } from "react"

import Login from "./Login"
import Properties from "./Properties"

const Home: NextPage = () => {
  const [user, setUser] = useState<string>("")

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const storedUser = localStorage.getItem("user")
      setUser(storedUser || "")
    }
  }, [])
  return <>{user == "" ? <Login /> : <Properties />}</>
}

export default Home
