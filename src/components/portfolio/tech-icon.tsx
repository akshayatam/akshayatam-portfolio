import { Icon, type IconifyIcon } from "@iconify/react";
import python from "@iconify-icons/logos/python";
import typescriptIcon from "@iconify-icons/logos/typescript-icon";
import rust from "@iconify-icons/logos/rust";
import react from "@iconify-icons/logos/react";
import nodejsIcon from "@iconify-icons/logos/nodejs-icon";
import fastapi from "@iconify-icons/logos/fastapi";
import pytorch from "@iconify-icons/logos/pytorch";
import huggingFace from "@iconify-icons/logos/hugging-face";
import postgresql from "@iconify-icons/logos/postgresql";
import redis from "@iconify-icons/logos/redis";
import cloudflare from "@iconify-icons/logos/cloudflare";
import dockerIcon from "@iconify-icons/logos/docker-icon";
import githubActions from "@iconify-icons/logos/github-actions";
import neovim from "@iconify-icons/logos/neovim";
import tanstack from "@iconify-icons/simple-icons/tanstack";

const icons: Record<string,IconifyIcon>={python,typescript:typescriptIcon,rust,react,tanstack,nodejs:nodejsIcon,fastapi,pytorch,"hugging-face":huggingFace,postgresql,redis,cloudflare,docker:dockerIcon,"github-actions":githubActions,neovim};
export function TechIcon({name,icon,className}:{name:string;icon:string;className?:string}){const data=icons[icon];return <span className={className??"tech-icon"} role="img" aria-label={name} title={name}>{data?<Icon icon={data} aria-hidden="true"/>:<span aria-hidden="true">{name.slice(0,1)}</span>}</span>}