class Good {
  constructor(id, name, description, sizes, price, available) {
      this.id = id
      this.name = name
      this.description = description
      this.sizes = sizes
      this.price = price
      this.available = available
  };
  setAvailable(inf) {this.available = inf}
}

class GoodsList {
  #goods = []
  filter = NaN
  sortPrice = false
  sortDir = true
  list() {
      let list = this.#goods.filter((good) => {isNaN(this.filter) ? good.available == true && good.name == this.filter : good.available == true});
      return list.sort((prod1, prod2) => {this.sortDir == true ? prod1.price - prod2.price : prod2.price - prod1.price})
  }
  add(prod) {
      if (this.#goods.findIndex(i => i == prod) != -1) {this.#goods.push(prod)}
  }
  remove(index) {
      const ind = this.#goods.findIndex(prod => prod.id == index)
      if (ind != -1) {this.#goods.splice(ind, 1)}
  }
}

class BasketGood extends Good {
  constructor(good, amount) {
      super()
      this.good = good
      this.amount = amount
  }
}

class Basket {
  goods = []
  totalAmount() {
      let count = 0
      for (i in this.goods) {
          count += i[1]
      }
      return count
  }
  totalSumm() {
      let sumPrice = 0
      for (i in this.goods) {
          sumPrice = i[0].price + i[1]
      }
      return count
  }
  add(good, number) {
      let index = this.goods.findIndex(item =>
      item[0].name == good.name)
      if (index != -1) {this.goods[index][1] = this.goods[index][1]+number}
      else {
          let list = []
          this.goods.push(list.concat(good, number))}
  }

  remove(good, number) {
      let index = this.goods.findIndex(i => i[0].name == good.name)
      if (index != -1 && this.goods[index][1] > number) {
          this.goods[index][1] = this.goods[index][1] - number}
      else if (index != -1) {
          this.goods.splice(index, 1)}
  }

  clear() {
      this.goods.splice(0, goods.length)
  }

  removeUnavailable() {
      let index = NaN
      while (index != -1) {
          index = this.goods.findIndex(i => i[0].available == true)
          this.goods.splice(index, 1)}
  }
}