import { Tables } from "@/interfaces/Database";
import { CellContext, ColumnDef } from "@tanstack/react-table";
import fp from "lodash/fp";
import { unwind } from "@/lib/fpUtils";
import { DataTable } from "./DataTable";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

type TableRow = Omit<Tables<"cartons">, "variants"> & {
  variants: Tables<"variants"> & { quantity: number };
};

type Props = {
  carton: Tables<"cartons">;
};

function Carton({ carton }: Props) {
  const allOptionNames = fp.flow(
    fp.property("variants"),
    fp.flatMap("selected_options"),
    fp.map("name"),
    fp.uniq
  )(carton);

  const columns: ColumnDef<TableRow>[] = [
    {
      accessorKey: "serial_number",
      header: "Serial No",
    },
    {
      accessorKey: "net_weight",
      header: "N.W",
    },
    {
      accessorKey: "variants.sku",
      header: "SKU",
    },
    ...allOptionNames.map((optionName) => ({
      header: optionName,
      cell({ row }: CellContext<TableRow, unknown>) {
        const optionValue = fp.flow(
          fp.find(fp.matchesProperty("name", optionName)),
          fp.property("value")
        )(row.original.variants.selected_options as any);

        return optionValue;
      },
    })),
    {
      accessorKey: "variants.quantity",
      header: "Quantity",
    },
  ];

  const variants = unwind("variants", [carton]) as TableRow[];

  return <DataTable columns={columns} data={variants} />;
}

export default Carton;
