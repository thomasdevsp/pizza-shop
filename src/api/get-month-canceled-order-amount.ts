import { api } from "@/lib/axios"

export interface getCanceledOrdersAmountResponse {
  amount: number
  diffFromLastMonth: number
}

export async function getCanceledOrdersAmount() {
  const response = await api.get<getCanceledOrdersAmountResponse>("/metrics/month-canceled-orders-amount")

  return response.data
}
