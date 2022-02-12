import { ChangeEvent, FormEventHandler } from "react";
import { FilterValuesType } from "./filterValuesType";

export interface FilterType {
  onSortingChange: (
    event: ChangeEvent<HTMLInputElement>,
    value: string
  ) => void;
  onBrandChange: FormEventHandler<HTMLDivElement>;
  filterValues: FilterValuesType;
  onTagChange: FormEventHandler<HTMLDivElement>;
}
