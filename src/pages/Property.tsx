type PropertyType = {
  address: string
  bedrooms: number
  bathrooms: number
  yearBuilt: number
  sqft: number
}

const Property = ({
  address,
  bedrooms,
  bathrooms,
  yearBuilt,
  sqft,
}: PropertyType) => {
  return (
    <div className="rounded-lg">
      <img
        src="/images/single-house.jpeg"
        className="rounded-tl-lg rounded-tr-lg w-full"
        alt="House"
      />
      <div className="p-3 bg-white rounded-lg">
        <div className="text-xl font-bold text-slate-900">{address}</div>
        <div className="text-slate-600">Irvine, CA 92665</div>
        <br />
        <div className="flex justify-between items-center">
          <div className="flex">
            <img
              src="/images/bed.png"
              className="mr-2"
              width={20}
              height={20}
              alt="bedrooms"
            />
            <span className="text-sm">{bedrooms}</span>
          </div>
          <div className="flex">
            <img
              src="/images/floor.png"
              className="mr-2"
              width={20}
              height={20}
              alt="floor plan"
            />
            <span className="text-sm">{yearBuilt}</span>
          </div>
          <div className="flex">
            <img
              src="/images/bath.png"
              className="mr-2"
              width={20}
              height={20}
              alt="bath"
            />{" "}
            <span className="text-sm">{bathrooms}</span>
          </div>
          <div className="flex">
            <img
              src="/images/house.png"
              className="mr-2"
              width={20}
              height={20}
              alt="house"
            />{" "}
            <span className="text-sm">{sqft} sq ft</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Property
