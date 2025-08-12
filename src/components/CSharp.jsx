import { useState } from 'react'

function CSharp() {

 return (
  <div className="flex items-center justify-center space-x-4 text-[#48bd8f] glitch">
    <h1 className="glitch" data-glitch="Console">Console<span className="glitch text-white" data-glitch=".">.</span><span className="glitch text-[#d5dca0]" data-glitch="WriteLine">WriteLine</span><span className="glitch text-white" data-glitch="(">(</span></h1>
    <div className="flex flex-col text-center string">
      <h1 className="glitch greeting relative top-[8.6vmin] animate-[white-out_5s_infinite] text-[#a87d6c]" data-glitch="&quot;¡Hola Mundo!&quot;">"¡Hola Mundo!"</h1>
      <h1 className="glitch greeting text-[#6da7d4]" data-glitch="&quot;Hei Verden&quot;">"Hei Verden"</h1>
      <h1 className="glitch greeting text-[#91a881]" data-glitch="&quot;Hello World&quot;">"Hello World"</h1>
      <h1 className="glitch greeting text-[#487dad]" data-glitch="&quot;สวัสดีชาวโลก&quot;">"สวัสดีชาวโลก"</h1> 
    </div>
    <div className="closure text-white"><h1 className="glitch" data-glitch=");">);</h1></div>
  </div>
 )
}

export default CSharp
