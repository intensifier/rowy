import { lazy } from "react";
import { IFieldConfig, FieldType } from "@src/components/fields/types";
import withHeavyCell from "@src/components/fields/_withTableCell/withHeavyCell";

import { Id as IdIcon } from "@src/assets/icons";
import BasicCell from "@src/components/fields/_BasicCell/BasicCellValue";
import withSideDrawerEditor from "@src/components/Table/editors/withSideDrawerEditor";

const TableCell = lazy(
  () => import("./TableCell" /* webpackChunkName: "TableCell-Id" */)
);
const SideDrawerField = lazy(
  () => import("./SideDrawerField" /* webpackChunkName: "SideDrawerField-Id" */)
);

export const config: IFieldConfig = {
  type: FieldType.id,
  name: "ID",
  group: "Metadata",
  dataType: "string",
  initialValue: "",
  icon: <IdIcon />,
  description: "Displays the row’s ID. Read-only. Cannot be sorted.",
  TableCell: withHeavyCell(BasicCell, TableCell),
  TableEditor: withSideDrawerEditor(TableCell),
  SideDrawerField,
};
export default config;
