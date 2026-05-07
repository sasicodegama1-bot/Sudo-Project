import React, { useState } from 'react'

const Sudo = () => {
  const [disable, SetDisable] = useState(false)
  const [syin,SetSyIn] = useState("")
  const GetIndicator = (value: string) => {
    const syIn = value;
    SetSyIn(syIn)
    console.log(value)
    if (syIn) {
      SetDisable(true)
    }
  }
const PlaceIndicator = () => {
  // const sy = syIn;

  if (syin === "X") {
    return "X";
  } else {
    return "O";
  }
};
  return (
    <div className="h-screen grid place-items-center">
      <div>
        <div className="mb-4">
          Select the indicator ?
          <div className="grid grid-cols-2 gap-2 mt-3">
            <div className={`${disable ? "pointer-events-none cursor-none" : "cursor-pointer"} p-1 rounded bg-amber-100 text-center`} onClick={() => GetIndicator("O")}>
              o
            </div>
            <div className="p-1 rounded bg-amber-200 text-center" onClick={() => GetIndicator("X")}>
              X
            </div>
          </div>
        </div>
        <div className="w-60 grid grid-cols-3 gap-1  ">
          {
            [...Array(9)].map(() => (
              <div className="size-20 bg-gray-100  cursor-pointer  grid place-items-center font-black  text-4xl" onClick={() => PlaceIndicator()}>
                    {syin}
              </div>
            ))
          }
        </div>
        <div className="grid grid-cols-2 gap-2 mt-3">
          <div>
            Player 1 : <span className="text-black font-semibold">01</span>
          </div>
          <div>
            Player 2 : <span className="text-black font-semibold">01</span>
          </div>
        </div>
        <div className="mt-3">
          <div className="text-center bg-green-100 text-center p-1 rounded">Refresh</div>
        </div>
      </div>
    </div>
  )
}

export default Sudo