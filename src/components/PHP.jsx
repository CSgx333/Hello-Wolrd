import { useState } from 'react'

function PHP() {

 return (
  <div className="flex items-center justify-center space-x-4 text-[#5eb8e2] glitch">
    <span className="glitch" data-glitch="echo">echo</span>
    <div className="flex flex-col text-center string">
      <h1 className="glitch greeting relative top-[8.6vmin] animate-[white-out_5s_infinite] text-[#c892f1]" data-glitch="&quot;Xin chào,thế giới&quot;">"Xin chào,thế giới"</h1>
      <h1 className="glitch greeting text-[#7ecb98]" data-glitch="&quot;Здравей свят&quot;">"Здравей свят"</h1>
      <h1 className="glitch greeting text-[#cbb55f]" data-glitch="&quot;Сайн уу ертөнц&quot;">"Сайн уу ертөнц"</h1>
      <h1 className="glitch greeting text-[#e38068]" data-glitch="&quot;Kamusta, Mundo&quot;">"Kamusta, Mundo"</h1> 
    </div>
    <div className="closure text-white"><h1 className="glitch" data-glitch=";">;</h1></div>
  </div>
 )
}

export default PHP