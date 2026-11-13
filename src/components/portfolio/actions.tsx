import { Check, Clipboard, Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";
import { copyText } from "@/lib/copy-text";

export function ResumeButton() {
  return <Button variant="outline" asChild><a href="/resume.pdf" download="Akshay-Atam-Resume.pdf"><Download/>Download Resume</a></Button>;
}

export function CopyEmailButton() {
  const [state,setState]=useState<"idle"|"copied"|"failed">("idle"),timer=useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(()=>()=>{if(timer.current)clearTimeout(timer.current)},[]);
  const copy=async()=>{const ok=await copyText(site.email);setState(ok?"copied":"failed");if(timer.current)clearTimeout(timer.current);timer.current=setTimeout(()=>setState("idle"),2400)};
  const label=state==="copied"?"Copied!":state==="failed"?"Copy failed":"Copy Email";
  return <div className="flex flex-wrap items-center gap-3">
    <Button variant="outline" onClick={copy} className={state==="copied"?"copy-success":undefined}>{state==="copied"?<Check/>:<Clipboard/>}{label}</Button>
    <span aria-live="polite" className="sr-only">{state==="copied"?`${site.email} copied to clipboard`:state==="failed"?"Copying failed":""}</span>
    {state==="failed"&&<a href={`mailto:${site.email}`} className="text-sm text-accent-mark underline underline-offset-4">{site.email}</a>}
  </div>;
}

export function AboutActions(){return <div className="mt-7 flex flex-wrap items-center gap-3"><ResumeButton/><CopyEmailButton/></div>}
