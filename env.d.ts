/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PLATEFORM: string;
  // add other env variables here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}