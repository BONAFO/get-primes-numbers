const get_primes_numbers = ({ min, max }) => {
    // FINAL NUMBERS
    const numbers = [];
    // PREVENTING THE USER FROM PLACING A MIN GREATER THAN THE MAX
    if (min > max) {
      let aux = min;
      min = max;
      max = aux;
    }
  
    let numbers_aux = [];
    for (let i = 2; i <= max; i++) {
      let prime = true;
      //I USE A FOR LOOP INSTEAD OF A MAP LOOP BECAUSE TO USE BREAK AND MAKE IT FASTER
      for (let j = 0; j < numbers_aux.length; j++) {
        if (i % numbers_aux[j] == 0) {
          prime = false;
          break;
        }
      }
      if (prime) {
        numbers_aux.push(i);
      }
    }
  
    //FILTERING THE NUMBERS SMALLER THAN THE SELECTED AS MIN
    numbers_aux.map((num) => (num > min ? numbers.push(num) : ""));
  
    console.log(numbers);
  
    return numbers;
  };

