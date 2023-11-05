import { useEffect, useRef, useState } from "react"


export const useDraw = (onDraw: ({ctx, value}:Draw) => void)=>{

    const canvasRef = useRef<HTMLTextAreaElement>(null);

    useEffect(()=>{

        

    },[onDraw]);

    return {canvasRef};
}