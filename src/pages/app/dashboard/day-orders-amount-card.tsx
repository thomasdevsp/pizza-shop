import { useQuery } from "@tanstack/react-query"
import { Utensils } from "lucide-react"

import { getDayOrderAmount } from "@/api/get-day-orders-amount"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DayOrdersAmountCard(){
  const { data: dayOrdersAmount } = useQuery({
    queryFn: getDayOrderAmount,
    queryKey: ["metrics", "day-orders-amount"],
  })

  return (
    <Card>
      <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold">Receita total (mês)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {dayOrdersAmount && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {dayOrdersAmount.amount.toLocaleString("pt-BR")}
            </span>
            <p className="text-xs text-muted-foreground">
              {dayOrdersAmount.diffFromYesterday >= 0 ?
                (
                  <>
                    <span className="text-emerald-500 dark:text-emerald-400">
                      + {dayOrdersAmount.diffFromYesterday}%
                    </span>{" "} em relação a ontem
                  </>
                )
                : (
                  <>
                    <span className="text-rose-500 dark:text-rose-400">
                      {dayOrdersAmount.diffFromYesterday}%
                    </span>{" "} em relação a ontem
                  </>
                )}
            </p>
          </>
        )}

      </CardContent>
    </Card>
  )
}
