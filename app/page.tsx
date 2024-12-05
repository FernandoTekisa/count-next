/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { useState } from "react"

export default function page() {

  const [count, setCount] = useState(0)

  return (
    <main>
      <div className="container h-screen w-screen mx-auto flex justify-center items-center">
        <div className="mx-auto flex flex-col justify-center items-center bg-gray-700 shadow-xl shadow-gray-900 py-10 px-20 rounded-md" >
          <div>
            <h1 className="text-3xl text-gray-300 font-mono">Contador Next.js</h1>
          </div>
          <div>
            <h2 className="text-gray-200 text-5xl mt-10"><span>{count}</span></h2>
          </div>
          <div className="flex items-center justify-center gap-20 mt-10">
            <button onClick={() => setCount(count - 1)} className="bg-slate-500 text-3xl hover:bg-gray-400 transition-all py-5 px-5 rounded-md shadow shadow-gray-600">-</button>
            <button onClick={() => setCount(0)} className="bg-slate-500 text-3xl hover:bg-gray-400 transition-all py-5 px-5 rounded-md shadow shadow-gray-600">0</button>
            <button onClick={() => setCount(count + 1)} className="bg-slate-500 text-3xl hover:bg-gray-400 transition-all py-5 px-5 rounded-md shadow shadow-gray-600">+</button>
          </div>
        </div>
      </div>
    </main>
  )
}
