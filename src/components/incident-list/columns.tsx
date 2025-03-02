"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "../ui/badge";

// This type is used to define the shape of our data.
export enum IncidentStatus {
    OPEN = "OPEN",
    CLOSED = "CLOSED",
}

export type IncidentList = {
    id: string;
    title: string;
    createdAt: Date;
    lastUpdatedAt: Date;
    status: IncidentStatus;
};

export const columns: ColumnDef<IncidentList>[] = [
    {
        accessorKey: "id",
        header: "Incident",
    },
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "createdAt",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() =>
                    column.toggleSorting(column.getIsSorted() === "desc")
                }
            >
                Created At
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
    },
    {
        accessorKey: "lastUpdatedAt",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() =>
                    column.toggleSorting(column.getIsSorted() === "desc")
                }
            >
                Last Updated At
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
    },
    {
        accessorKey: "status",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() =>
                    column.toggleSorting(column.getIsSorted() === "asc")
                }
            >
                Status
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => {
            const value: IncidentStatus = row.getValue("status");
            return (
                <Badge
                    variant={
                        value == IncidentStatus.OPEN ? "destructive" : "default"
                    }
                >
                    {value}
                </Badge>
            );
        },
    },
];
