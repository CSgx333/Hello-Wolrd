import { useState } from 'react'

function CPlusPlus() {

    return (
    <div className="flex items-center justify-center space-x-4 text-[#7c5ea2] glitch">
        <h1 className="glitch" data-glitch="cout ">cout <span className="glitch text-white" data-glitch="&lt;&lt; ">&lt;&lt; </span></h1>
        <div className="flex flex-col text-center string">
        <h1 className="glitch greeting relative top-[8.6vmin] animate-[white-out_5s_infinite] text-[#f67d6c]" data-glitch="&quot;你好，世界&quot;">"你好，世界"</h1>
        <h1 className="glitch greeting text-[#448ea4]" data-glitch="&quot;Hej Värld&quot;">"Hej Värld"</h1>
        <h1 className="glitch greeting text-[#fff794]" data-glitch="&quot;Hallo Welt&quot;">"Hallo Welt"</h1>
        <h1 className="glitch greeting text-[#85ffa4]" data-glitch="&quot;¡Hola Mundo!&quot;">"¡Hola Mundo!"</h1> 
        </div>
        <span className="glitch text-white" data-glitch="&lt;&lt;&nbsp;">&lt;&lt;&nbsp;</span>
        <div className="closure"><h1 className="glitch" data-glitch="endl;">endl;</h1></div>
    </div>
    )
}

export default CPlusPlus
