"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

// This type is used to define the shape of our data.
export enum ServiceStatus {
  UP = "UP",
  DOWN = "DOWN",
}

export type ServiceList = {
  id: string;
  service: string;
  description: string;
  status: ServiceStatus;
};

export const columns: ColumnDef<ServiceList>[] = [
  {
    accessorKey: "service",
    header: "Service",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Status
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const value: ServiceStatus = row.getValue("status");
      return (
        <Badge
          variant={value == ServiceStatus.DOWN ? "destructive" : "default"}
        >
          {value}
        </Badge>
      );
    },
  },
];
