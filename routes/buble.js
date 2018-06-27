export function bubbleSort(elements) {
    var length = elements.length;
    for (var i = 0; i < length; i++) {
      for (var j = 0; j < (length - i - 1); j++) { 
        if(elements[j] > elements[j+1]) {
          //Swap the numbers
          var tmp = elements[j];  //Temporary variable to hold the current number
          elements[j] = elements[j+1]; //Replace current number with adjacent number
          elements[j+1] = tmp; 
        }
      }        
    }
    return elements
}