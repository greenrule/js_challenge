const sumOfTwo = (arr1, arr2, n) => { 
  return arr1.map(elem => {
    return arr2.map(elem2 => elem2 + elem);
  }).join(',')
  	.split(',')
  	.includes(n+'');
}
