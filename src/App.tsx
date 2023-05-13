
function App() {
  
  return (
    <div className="flex w-screen h-screen justify-center bg-slate-100">
    <div className="flex flex-col w-screen h-screen font-semibold text-4xl lg:w-4/12 lg:shadow-2xl">
      <div className="bg-slate-800 flex flex-col text-slate-100 h-1/4 pt-11 pl-5 pr-5 text-right">
        <div className="prev-operand text-xl">previous</div>
        <div className="operand pt-5">operand</div>
      </div>
      <div className="flex h-1/4">
        <button className="bg-slate-700 flex-1 text-slate-100 p-3 ">AC</button>
        <button className="bg-rose-500 flex-1 text-slate-100" p-3>DEL</button>
        <button className="bg-slate-100 flex-1" p-3>÷</button>
      </div>
      <div className="flex bg-slate-100 p-1 h-1/4">
        <button className="p-3 flex-1">1</button>
        <button className="p-3 flex-1">2</button>
        <button className="p-3 flex-1">3</button>
        <button className="p-3 flex-1">*</button>
      </div>
      <div className="flex bg-slate-100 p-1 h-1/4">
        <button className="p-3 flex-1">4</button>
        <button className="p-3 flex-1">5</button>
        <button className="p-3 flex-1">6</button>
        <button className="p-3 flex-1">+</button>
      </div>
      <div className="flex bg-slate-100 p-1 h-1/4">
        <button className="p-3 flex-1">7</button>
        <button className="p-3 flex-1">8</button>
        <button className="p-3 flex-1">9</button>
        <button className="p-3 flex-1">-</button>
      </div>
        
    </div>
    </div>
  )
}

export default App;