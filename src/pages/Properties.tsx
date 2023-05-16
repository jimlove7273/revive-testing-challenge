import type { NextPage } from "next"
import homes from "../../data/homes.json"
import Property from "./Property"

const Properties: NextPage = () => {
  const logout = () => {
    localStorage.removeItem("user")
    window.location.reload()
  }

  return (
    <>
      <div className="container mx-auto bg-slate-100 p-5">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold py-10">List of Homes</h1>
          <div
            className="bg-zinc-300 px-4 py-2 rounded-lg cursor-pointer"
            onClick={logout}
          >
            Logout
          </div>
        </div>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {homes.map((home) => (
            <div key={home.id}>
              <Property
                address={home.address}
                bedrooms={home.bedrooms}
                bathrooms={home.bathrooms}
                yearBuilt={home.yearBuilt}
                sqft={home.sqft}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Properties
