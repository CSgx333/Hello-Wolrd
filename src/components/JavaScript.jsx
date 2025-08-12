import { useState } from 'react'

function JavaScript() {

 return (
  <div className="flex items-center justify-center space-x-4 text-[#ba2a66] glitch">
    <h1 className="glitch" data-glitch="console">console<span className="glitch text-white" data-glitch=".">.</span><span className="glitch text-[#bf2532]" data-glitch="log">log</span><span className="glitch text-white" data-glitch="(">(</span></h1>
    <div className="flex flex-col text-center string">
      <h1 className="glitch greeting relative top-[8.6vmin] animate-[white-out_5s_infinite] text-[#009c76]" data-glitch="&quot;Γειά σου, κόσμε&quot;">"Γειά σου, κόσμε"</h1>
      <h1 className="glitch greeting text-[#2b8cc6]" data-glitch="&quot;こんにち は世&quot;">"こんにち は世"</h1>
      <h1 className="glitch greeting text-[#c37d0c]" data-glitch="&quot;Kamusta, Mundo&quot;">"Kamusta, Mundo"</h1>
      <h1 className="glitch greeting text-[#c678dd]" data-glitch="&quot;안녕하세요, 세계&quot;">"안녕하세요, 세계"</h1> 
    </div>
    <div className="closure text-white"><h1 className="glitch" data-glitch=");">);</h1></div>
  </div>
 )
}

export default JavaScript
