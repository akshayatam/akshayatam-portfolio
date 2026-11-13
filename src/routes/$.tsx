import { createFileRoute } from "@tanstack/react-router";
import { NotFoundPage } from "@/components/portfolio/not-found";

export const Route=createFileRoute("/$")({head:()=>({meta:[{title:"Page not found — Akshay Atam"},{name:"description",content:"The requested page could not be found."},{name:"robots",content:"noindex"},{property:"og:title",content:"Page not found — Akshay Atam"},{property:"og:description",content:"The requested page could not be found."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"}]}),component:NotFoundPage});