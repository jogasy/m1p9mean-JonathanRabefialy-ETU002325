import { Dish } from "src/app/home/types/dish";
import { Order } from "src/app/home/types/order";

export namespace Orders {
  export class setBasket {
    static readonly type = '[basket] set basket';
    constructor(public order: Dish[]){}
  }

  export class UpdateBasket {
    static readonly type = '[basket] Update basket';
    constructor(public id: string, public patchData: Partial<Dish>) { }
  }

  export class CreateBasket {
    static readonly type = '[basket] Create basket';
    constructor(public dish: Dish) { }
  }

  export class RemoveBasket {
    static readonly type = '[basket] Remove dish in basket';
    constructor(public id: string) { }
  }

  export class setOrder {
    static readonly type = '[order] set order';
    constructor(public order: Order){}
  }

  export class ResetBasket {
    static readonly type = '[basket] reset basket';
  }

  export class ResetOrder {
    static readonly type = '[order] reset order';
  }
}
