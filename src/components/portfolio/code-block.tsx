import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";
import css from "highlight.js/lib/languages/css";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import markdown from "highlight.js/lib/languages/markdown";
import python from "highlight.js/lib/languages/python";
import rust from "highlight.js/lib/languages/rust";
import sql from "highlight.js/lib/languages/sql";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";
import { Check, Copy } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { copyText } from "@/lib/copy-text";

hljs.registerLanguage("bash",bash);hljs.registerLanguage("shell",bash);hljs.registerLanguage("css",css);hljs.registerLanguage("javascript",javascript);hljs.registerLanguage("js",javascript);hljs.registerLanguage("jsx",javascript);hljs.registerLanguage("json",json);hljs.registerLanguage("markdown",markdown);hljs.registerLanguage("md",markdown);hljs.registerLanguage("python",python);hljs.registerLanguage("py",python);hljs.registerLanguage("rust",rust);hljs.registerLanguage("sql",sql);hljs.registerLanguage("typescript",typescript);hljs.registerLanguage("ts",typescript);hljs.registerLanguage("tsx",typescript);hljs.registerLanguage("html",xml);hljs.registerLanguage("xml",xml);

export function CodeBlock({code,language="text"}:{code:string;language?:string | undefined}){const [copied,setCopied]=useState(false),timer=useRef<ReturnType<typeof setTimeout> | undefined>(undefined);useEffect(()=>()=>{if(timer.current)clearTimeout(timer.current)},[]);const html=useMemo(()=>{try{return hljs.getLanguage(language)?hljs.highlight(code,{language}).value:hljs.highlightAuto(code).value}catch{return code}},[code,language]);const copy=async()=>{if(await copyText(code)){setCopied(true);if(timer.current)clearTimeout(timer.current);timer.current=setTimeout(()=>setCopied(false),1800)}};return <div className="code-block"><div className="code-toolbar"><span>{language}</span><button type="button" onClick={copy} aria-label={copied?"Code copied to clipboard":"Copy code"}>{copied?<Check/>:<Copy/>}{copied?"Copied!":"Copy"}</button></div><pre><code dangerouslySetInnerHTML={{__html:html}}/></pre></div>}