"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

// This type is used to define the shape of our data.
export enum ServiceStatus {
    UP = "UP",
    DOWN = "DOWN",
}

export type IncidentList = {
    id: string;
    title: string;
    createdAt: Date;
    lastUpdatedAt: Date;
};

export const columns: ColumnDef<IncidentList>[] = [
    {
        accessorKey: "id",
        header: "Incident ID",
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
];
