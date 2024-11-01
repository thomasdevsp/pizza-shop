import { api } from "@/lib/axios";

export interface GetManagedRestaurantResponse {
  id: string;
  name: string;
  updatedAt: Date | null;
  description: string | null;
  managerId: string | null
  createdAt: Date | null;
}

export async function getManagedRestaurant() {
  const response = await api.get<GetManagedRestaurantResponse>("/managed-restaurant")

  return response.data
}
