import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import { ArrowRight, Search, X } from "lucide-react"

import { OrderStatus } from "@/components/order-status"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { TableCell, TableRow } from "@/components/ui/table"

import { DialogDetails } from "./order-details"

interface OrderTableRowProps {
  order: {
    orderId: string;
    createdAt: string ;
    status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
    customerName: string;
    total: number;
  }
}

export function OrderTableRow({ order }: OrderTableRowProps){
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              <span className="sr-only" >Detalhes do pedido</span>
            </Button>
          </DialogTrigger>
          <DialogDetails />

        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        {order.orderId}
      </TableCell>
      <TableCell className="text-muted-foreground">
        {formatDistanceToNow(order.createdAt, {
          locale: ptBR,
          addSuffix: true,
        })}
      </TableCell>
      <TableCell>
        <OrderStatus status={order.status} />
      </TableCell>
      <TableCell className="font-medium">
        {order.customerName}
      </TableCell>
      <TableCell className="font-medium">
        {order.total.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </TableCell>
      <TableCell>
        <Button variant="outline" className="xs">
          <ArrowRight className="h-4 w-4 mr-2 " />
        Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" className="xs">
          <X className="h-4 w-4 mr-2 " />
        Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
