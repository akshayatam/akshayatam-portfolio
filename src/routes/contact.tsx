import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageIntro, SocialLinks } from "@/components/portfolio/core";
import { site } from "@/content/site";

export const Route=createFileRoute("/contact")({head:()=>({meta:[{title:"Contact — Akshay Atam"},{name:"description",content:"Get in touch with Akshay Atam about software engineering, AI systems, product work, or collaboration."},{property:"og:title",content:"Contact — Akshay Atam"},{property:"og:description",content:"Start a conversation about thoughtful software and AI work."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}],links:[{rel:"canonical",href:"/contact"}]}),component:Contact});

type Errors = Partial<Record<"name"|"email"|"subject"|"message", string>>;

function Contact(){
  const [state,setState]=useState<"idle"|"loading"|"success"|"error">("idle");
  const [errors,setErrors]=useState<Errors>({});

  const submit=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const data=new FormData(e.currentTarget);
    const name=String(data.get("name")??"").trim(),email=String(data.get("email")??"").trim(),subject=String(data.get("subject")??"").trim(),message=String(data.get("message")??"").trim();
    const next:Errors={};
    if(!name)next.name="Please enter your name.";
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))next.email="Please enter a valid email address.";
    if(!subject)next.subject="Please add a subject.";
    if(message.length<10)next.message="Please write at least a short message (10 characters).";
    setErrors(next);
    if(Object.keys(next).length){setState("idle");return}
    setState("loading");
    try{
      window.location.href=`mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${message}\n\nFrom ${name} (${email})`)}`;
      setState("success");
    }catch{
      setState("error");
    }
  };

  return <div className="site-container pb-20">
    <PageIntro eyebrow="Say hello / 06" title="Contact" description="Have an interesting idea, a project in mind, or just want to say hello? I'd love to hear from you."/>
    <div className="grid gap-14 py-16 md:grid-cols-[.8fr_1.2fr]">
      <aside>
        <p className="font-display text-2xl">Let’s start a conversation.</p>
        <a href={`mailto:${site.email}`} className="mt-4 block text-sm text-accent-mark underline underline-offset-4">{site.email}</a>
        <div className="mt-6"><SocialLinks showLabels/></div>
        <p className="mt-8 max-w-xs text-xs leading-5 text-muted-foreground">The form opens your email application, so your message stays with you until you choose to send it.</p>
      </aside>
      <form onSubmit={submit} noValidate className="space-y-5" aria-describedby="form-status">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Name" name="name" error={errors.name}/>
          <Field label="Email" name="email" type="email" error={errors.email}/>
        </div>
        <Field label="Subject" name="subject" error={errors.subject}/>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" rows={7} className="mt-2" required aria-invalid={errors.message?true:undefined} aria-describedby={errors.message?"message-error":undefined}/>
          {errors.message&&<p id="message-error" className="mt-2 text-xs text-destructive">{errors.message}</p>}
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button type="submit" disabled={state==="loading"}>{state==="loading"?"Preparing…":"Send message"}<Send/></Button>
          <p id="form-status" aria-live="polite" className={`max-w-sm text-sm ${state==="error"?"text-destructive":"text-muted-foreground"}`}>
            {state==="success"?"Message ready. I'll get back to you soon once you send it from your email app."
              :state==="error"?<>Something went wrong. Please try again or email me directly at <a href={`mailto:${site.email}`} className="underline underline-offset-4">{site.email}</a>.</>
              :Object.keys(errors).length?"Please correct the highlighted fields."
              :""}
          </p>
        </div>
      </form>
    </div>
  </div>;
}

function Field({label,name,type="text",error}:{label:string;name:string;type?:string;error?:string | undefined}){
  return <div>
    <Label htmlFor={name}>{label}</Label>
    <Input id={name} name={name} type={type} className="mt-2" required aria-invalid={error?true:undefined} aria-describedby={error?`${name}-error`:undefined}/>
    {error&&<p id={`${name}-error`} className="mt-2 text-xs text-destructive">{error}</p>}
  </div>;
}
