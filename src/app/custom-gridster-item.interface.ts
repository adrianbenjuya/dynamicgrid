import { GridsterItem } from "angular-gridster2";
import { Type } from "@angular/core";
import { IItem } from "./item.interface";

export interface CustomGridsterItem extends GridsterItem {
    data: {
        component: Type<IItem>
    }
}