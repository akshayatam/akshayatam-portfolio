import { Link } from "@tanstack/react-router";
import { ArrowLeft, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NotFoundPage() {
  return <section className="site-container grid min-h-[70vh] place-items-center py-16"><div className="max-w-xl text-center"><p className="eyebrow">route_not_found</p><h1 className="font-display text-7xl font-semibold sm:text-8xl">404</h1><h2 className="mt-5 font-display text-2xl font-semibold sm:text-3xl">Looks like this page wandered off.</h2><p className="mx-auto mt-3 max-w-md leading-7 text-muted-foreground">The page you’re looking for doesn’t exist or may have moved.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Button size="lg" asChild><Link to="/"><ArrowLeft/>Back Home</Link></Button><Button size="lg" variant="outline" asChild><Link to="/projects" search={{page:1,q:"",tag:""}}><FolderOpen/>View Projects</Link></Button></div></div></section>;
}