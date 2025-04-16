var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    "Розбити скло": "200 грн",
  
    parsePrice(priceString) {
      return parseFloat(priceString);
    },
  
    price() {
      let total = 0;
      for (let key in this) {
        if (typeof this[key] === "string") {
          total += this.parsePrice(this[key]);
        }
      }
      return total + " грн";
    },
  
    minPrice() {
      let min = null;
      for (let key in this) {
        if (typeof this[key] === "string") {
          let number = this.parsePrice(this[key]);
          if (min === null || number < min) {
            min = number;
          }
        }
      }
      return min + " грн";
    },
  
    maxPrice() {
      let max = null;
      for (let key in this) {
        if (typeof this[key] === "string") {
          let number = this.parsePrice(this[key]);
          if (max === null || number > max) {
            max = number;
          }
        }
      }
      return max + " грн";
    }
  };
  
  console.log("Загальна вартість:", services.price());
  console.log("Мінімальна ціна:", services.minPrice());
  console.log("Максимальна ціна:", services.maxPrice());