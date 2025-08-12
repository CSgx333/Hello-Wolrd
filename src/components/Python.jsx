import { useState } from 'react'

function Python() {

 return (
  <div className="flex items-center justify-center space-x-4 text-[#e0655f] glitch">
    <h1 className="glitch" data-glitch="Print">Print<span className="glitch text-[#e4bb68]" data-glitch="( ">( </span></h1>
    <div className="flex flex-col text-center string">
      <h1 className="glitch greeting relative top-[8.6vmin] animate-[white-out_5s_infinite] text-[#65fd6c]" data-glitch="&quot;안녕하세요, 세계&quot;">"안녕하세요, 세계"</h1>
      <h1 className="glitch greeting text-[#8cf5ff]" data-glitch="&quot;Xin chào,thế giới&quot;">"Xin chào,thế giới"</h1>
      <h1 className="glitch greeting text-[#808ed9]" data-glitch="&quot;Bonjour,le monde&quot;">"Bonjour,le monde"</h1>
      <h1 className="glitch greeting text-[#fd8cff]" data-glitch="&quot;Merhaba, dünya&quot;">"Merhaba, dünya"</h1> 
    </div>
    <div className="closure text-[#e4bb68]"><h1 className="glitch" data-glitch=" )"> )</h1></div>
  </div>
 )
}

export default Python