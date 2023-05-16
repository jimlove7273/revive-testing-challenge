import Image from "next/image"
import { useEffect, useState } from "react"
import users from "../../data/users.json"

type messageType = {
  msgtype: string
  message: string
}

const Login = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [loginBtn, setLoginBtn] = useState<boolean>(false)
  const [message, setMessage] = useState<messageType>({
    msgtype: "",
    message: "",
  })
  const [user, setUser] = useState<string>("")

  useEffect(() => {
    setUser(localStorage.getItem("user") || "")
  }, [])

  useEffect(() => {
    if (email.length > 0 && password.length > 0) {
      setLoginBtn(true)
    } else {
      setLoginBtn(false)
    }
  }, [email, password])

  const checkLogin = () => {
    if (loginBtn) {
      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      )
      if (foundUser) {
        setMessage({
          msgtype: "success",
          message: "Log in Successfully, page will refresh in 10 seconds.",
        })
        const saveUser = {
          firstname: foundUser.firstname,
          lastname: foundUser.lastname,
          email,
          password,
        }
        localStorage.setItem("user", JSON.stringify(saveUser))
        setTimeout(() => {
          window.location.reload()
        }, 10000)
      } else {
        setMessage({
          msgtype: "error",
          message: "incorrect login information entered",
        })
      }
    }
  }

  return (
    <div className="container mx-auto p-5 md:p-40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div>
            <Image
              src="/images/revive_logo.png"
              alt="Revive Real Estate"
              width={100}
              height={30}
            />
          </div>

          {user !== "" && (
            <div className="flex justify-end">
              <div className="bg-slate-300 p-2 rounded-lg cursor-pointer">
                Properties
              </div>
            </div>
          )}
          <div className="mt-20 w-[50%] mx-auto flex flex-col justify-center">
            <div className="mb-2">Sign in</div>
            <br />
            <input
              className="w-full mb-2 p-1 border border-zinc-200 text-sm"
              type="text"
              name="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-full p-1 border border-zinc-200 text-sm"
              type="password"
              name="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className={`mt-2 w-full p-2
            ${
              loginBtn
                ? "bg-cyan-800 text-gray-200"
                : "bg-zinc-200 text-zinc-100"
            }`}
              onClick={checkLogin}
            >
              Login
            </button>
            <div className="text-right text-sm text-zinc-400">
              Forgot Password
            </div>
            {message.msgtype === "success" && (
              <div className="bg-blue-200 text-slate-700 p-2 mt-10 text-sm">
                {message.message}
              </div>
            )}
            {message.msgtype === "error" && (
              <div className="bg-red-900 text-slate-200 p-2 mt-10 text-sm">
                {message.message}
              </div>
            )}
          </div>
        </div>
        <div>
          <img
            src="/images/login-house.jpeg"
            alt="Login House"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  )
}

export default Login
