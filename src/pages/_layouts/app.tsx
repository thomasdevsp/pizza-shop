import { Outlet } from "react-router-dom"

import { Header } from "@/components/header"

export function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col antialiased" >
      <Header />

      <div className="flex flex-1 flex-col gap-04 p-8 pt-6">
        <Outlet />
        </div>
    </div>
  )
}