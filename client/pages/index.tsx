import { useDraw } from "@/hooks/useDraw"
import { drawLine } from "@/utils/drawLine";
import { useEffect, useState } from "react";
import { ChromePicker } from 'react-color';
import { io } from "socket.io-client";

const socket = io('http://192.168.1.16:3001');

type DrawLineProps = {
  value: string;
}

export default function Home() {

  // const {canvasRef, onMouseDown, clear} = useDraw(createLine);
  const [textValue, setTextValue] = useState('');

  useEffect(()=>{

    socket.on('change-value',({value}:DrawLineProps)=>{
      setTextValue(value);
    })

  },[]);

  function createLine(value:string) {
    setTextValue(value);
    socket.emit('change-value', {value});
  }

  return (
    <div className="min-w-screen min-h-screen p-5 justify-center flex items-center">
      <textarea
        className="min-w-full min-h-[95vh] border-green-200 border-4 outline-none"
        value={textValue}
        onChange={(v)=>{createLine(v.target.value)}}
      />
    </div>
  )
}
