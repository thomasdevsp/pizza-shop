import { ArrowRight, Search, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { TableCell, TableRow } from "@/components/ui/table"

import { DialogDetails } from "./order-details"

export function OrderTableRow(){
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
      12312901094asdon2u1
      </TableCell>
      <TableCell className="text-muted-foreground">
    há 15 minutos
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span className="font-medium text-muted-foreground" >Pendente</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">
      Thomas Fernando
      </TableCell>
      <TableCell className="font-medium">
      R$149,90
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
