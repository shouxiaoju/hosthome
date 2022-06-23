import { useEffect } from "react";

export default function useObserverHook(ele:any,callback:any,watch=[]){
    let observer: any
    useEffect(()=>{
        observer=new IntersectionObserver(entries=>{
            callback&&callback(entries)
        })
        observer.observe(document.querySelector(ele))
        return ()=>{
            if(observer){
                observer.unobserve(document.querySelector(ele));
                observer.disconnect();
            }
        }
    },watch)
}