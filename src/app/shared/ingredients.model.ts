/**
 *  Regarding ingredients model
 */
// export class Ingredients {
//   public name: string;
//   public amount: number;
//
//   constructor(name: string, amount: number) {
//     this.name = name;
//     this.amount = amount;
//   }
// }
/**
 * Using shortcut provided for above code
 */

export class Ingredient {
  constructor(public name: string, public amount: number) {}
}
