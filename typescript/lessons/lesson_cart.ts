class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number
  ) {}
}

class Delivery {
  date: Date;
  address: string;

  constructor(date) {
    this.date = date;
  }
}

class HomeDelivery extends Delivery {
  constructor(date: Date, public address: string) {
    super(date);
  }
}

class ShopDelivery extends Delivery {
  constructor(public shopId: number) {
    super(new Date());
  }
}

class Cart {
  products: Product[] = [];
  delivery: HomeDelivery | ShopDelivery;

  addProduct(product: Product) {
    this.products.push(product);
  }

  removeProduct(productId) {
    this.products = this.products.filter((p: Product) => p.id !== productId);
  }

  countAverageCost() {
    return this.products.reduce((acc, el) => acc += el.price, 0);
  }

  setDeliveryParams(params) {
    this.delivery = new Delivery(params);
  }

  checkout() {
    if (this.products.length == 0) {
      throw new Error('Нет ни одного товара в корзине');
    }

    if (!this.delivery) {
      throw new Error('Не указан способ доставки');
    }

    return { success: true };
  }
}

const cart = new Cart();
cart.addProduct(new Product(1, 'Печенье', 10))
cart.addProduct(new Product(2, 'Торт', 30))
cart.addProduct(new Product(3, 'Шоколад', 20))
cart.removeProduct(1);
cart.setDeliveryParams(new HomeDelivery(new Date(), ''));

console.log(cart.countAverageCost())
console.log(cart.checkout())