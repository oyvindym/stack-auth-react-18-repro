import { StackClientApp } from '@stackframe/react'
import { useNavigate } from 'react-router-dom'

const config = {
  projectId: "edac4f63-c59b-479b-aef6-d1a9aafff160",
  publishableClientKey: "pck_swbxpy6cvs7ydkqrzpbpfb12jh0fxc867cvf3edte1v5r",
  jwksUrl: "https://api.stack-auth.com/api/v1/projects/edac4f63-c59b-479b-aef6-d1a9aafff160/.well-known/jwks.json",
}

export const stackClientApp = new StackClientApp({
  projectId: config.projectId,
  publishableClientKey: config.publishableClientKey,
  tokenStore: 'cookie',
  redirectMethod: {
    useNavigate
  }
})