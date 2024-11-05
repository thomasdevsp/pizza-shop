import { api } from "@/lib/axios"

export interface SignInBody {
  email: string
}

function delay(ms: number){
  return new Promise(resolve => setTimeout(resolve, ms))
}

export async function signIn({ email }: SignInBody) {
  await delay(2000)
  await api.post("/authenticate", { email })
}
