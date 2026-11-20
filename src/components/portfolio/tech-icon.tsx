import gradioIcon from "@iconify-icons/logos/gradio-icon";
import pydanticIcon from "@iconify-icons/logos/pydantic-icon";
import langchainIcon from "@iconify-icons/thesvg-color/langchain-corporate";
import langgraphIcon from "@iconify-icons/thesvg-color/langgraph";
import llamaindexIcon from "@iconify-icons/thesvg/llamaindex";
import chromaIcon from "@iconify-icons/thesvg-color/chroma";
import pineconeIcon from "@iconify-icons/thesvg/pinecone";
import vllmIcon from "@iconify-icons/thesvg-color/vllm";
import zapierIcon from "@iconify-icons/thesvg-color/zapier";
import hubspotIcon from "@iconify-icons/thesvg-color/hubspot";
import { Icon, type IconifyIcon } from "@iconify/react";
import icon0 from "@iconify-icons/devicon/python";
import icon1 from "@iconify-icons/devicon/typescript";
import icon2 from "@iconify-icons/devicon/rust";
import icon3 from "@iconify-icons/devicon/bash";
import icon4 from "@iconify-icons/devicon/kotlin";
import icon5 from "@iconify-icons/devicon/react";
import icon6 from "@iconify-icons/devicon/tanstack";
import icon7 from "@iconify-icons/devicon/streamlit";
import icon8 from "@iconify-icons/devicon/fastapi";
import icon9 from "@iconify-icons/devicon/nodejs";
import icon10 from "@iconify-icons/devicon/pytorch";
import icon11 from "@iconify-icons/devicon/huggingface";
import icon12 from "@iconify-icons/devicon/ollama";
import icon13 from "@iconify-icons/devicon/postgresql";
import icon14 from "@iconify-icons/devicon/redis";
import icon15 from "@iconify-icons/devicon/sqlite";
import icon16 from "@iconify-icons/devicon/docker";
import icon17 from "@iconify-icons/devicon/googlecloud";
import icon18 from "@iconify-icons/devicon/cloudflare";
import icon19 from "@iconify-icons/devicon/githubactions";
import icon20 from "@iconify-icons/devicon/linux";
import icon21 from "@iconify-icons/devicon/git";
import icon22 from "@iconify-icons/devicon/github";
import icon23 from "@iconify-icons/devicon/neovim";
import icon24 from "@iconify-icons/devicon/zed";
import icon25 from "@iconify-icons/devicon/jupyter";
import icon26 from "@iconify-icons/devicon/n8n";
import icon27 from "@iconify-icons/devicon/salesforce";
import icon28 from "@iconify-icons/devicon/apify";

const icons: Record<string, IconifyIcon> = {
  "gradio": gradioIcon,
  "pydantic": pydanticIcon,
  "langchain": langchainIcon,
  "langgraph": langgraphIcon,
  "llamaindex": llamaindexIcon,
  "chroma": chromaIcon,
  "pinecone": pineconeIcon,
  "vllm": vllmIcon,
  "zapier": zapierIcon,
  "hubspot": hubspotIcon,

  "python": icon0,
  "typescript": icon1,
  "rust": icon2,
  "bash": icon3,
  "kotlin": icon4,
  "react": icon5,
  "tanstack": icon6,
  "streamlit": icon7,
  "fastapi": icon8,
  "nodejs": icon9,
  "pytorch": icon10,
  "huggingface": icon11,
  "ollama": icon12,
  "postgresql": icon13,
  "redis": icon14,
  "sqlite": icon15,
  "docker": icon16,
  "googlecloud": icon17,
  "cloudflare": icon18,
  "githubactions": icon19,
  "linux": icon20,
  "git": icon21,
  "github": icon22,
  "neovim": icon23,
  "zed": icon24,
  "jupyter": icon25,
  "n8n": icon26,
  "salesforce": icon27,
  "apify": icon28,
};
export function TechIcon({
  name,
  icon,
  className,
  showNativeTooltip = true,
}: {
  name: string;
  icon: string;
  className?: string;
  showNativeTooltip?: boolean;
}) {
  const data = icons[icon];
  return (
    <span
      className={className ?? "tech-icon"}
      role="img"
      aria-label={name}
      title={showNativeTooltip ? name : undefined}
    >
      {data ? (
        <Icon icon={data} aria-hidden="true" />
      ) : (
        <span aria-hidden="true">{name.slice(0, 1)}</span>
      )}
    </span>
  );
}
