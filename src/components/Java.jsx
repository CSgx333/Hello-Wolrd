import { useState } from 'react'

function Java() {

 return (
  <div className="flex items-center justify-center space-x-4 text-[#e4bb68] glitch">
    <h1 className="glitch" data-glitch="System">System<span className="glitch text-white" data-glitch=".">.</span><span className="glitch text-red-400" data-glitch="out">out</span>
    <span className="glitch text-white" data-glitch=".">.</span><span className="glitch text-blue-400" data-glitch="println">println</span>(</h1>
    <div className="flex flex-col text-center string">
      <h1 className="glitch greeting relative top-[8.6vmin] text-[#8ab070]" data-glitch="&quot;Hello World&quot;">"Hello World"</h1>
      <h1 className="glitch greeting text-white" data-glitch="&quot;Ciao Mondo&quot;">"Ciao Mondo"</h1>
      <h1 className="glitch greeting text-[#c678dd]" data-glitch="&quot;สวัสดีชาวโลก&quot;">"สวัสดีชาวโลก"</h1>
      <h1 className="glitch greeting text-[#d9564b]" data-glitch="&quot;Привет, мир&quot;">"Привет, мир"</h1> 
    </div>
    <div className="closure"><h1 className="glitch" data-glitch=");">);</h1></div>
  </div>
 )
}

export default Java