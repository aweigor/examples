class Vehicle {
  public make: string;
  // видно только в этом кдассе, недоступно в расширяющим и инстансе
  private damages: string[];
  // видно только в этом кдассе, недоступно в расширяющим и инстансе
  private _model: string;
  // не видно в интансе
  protected run: number;
  // ES2021 private
  #price: number;

  set model(m: string) {
    this._model = m;
  }

  get model() {
    return this._model;
  }

  isPriceEqual(v: Vehicle) {
    // эквивалентность двух свойств можно проверить
    return this.#price === v.#price;
  }

  addDamage(damage: string) {
    this.damages.push(damage);
  }
}

class EuroTruck extends Vehicle {
  setRun(km: number) {
    this.run = km / 0.48;

  }
}

new Vehicle();