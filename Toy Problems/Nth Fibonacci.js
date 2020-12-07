var nthFibonacci = function(n) {
    if (n < 0) {
        return 'Invalid Number';
    }
    if (n == 1 || n == 2) {
        return 1
    }
    if (n > 2) {
        
        let newArr = [0,1,1];
        let topValue = newArr[(newArr.length-1)];
        let prevValue = newArr[(newArr.length - 2)];
    
    for (i = 0; i < n; i++) {
        topValue = newArr[(newArr.length-1)];
        prevValue = newArr[(newArr.length - 2)];
        newArr.push(topValue + prevValue);
        
        
        
        

    }
    return topValue;
    }
  };

  console.log(nthFibonacci(7))