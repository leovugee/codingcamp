

array = [4,5,9,6,2,5]


array.splice(1,0,0)

array = [4,0,5,9,6,2,5]


array.splice(1,0,123)

array = [4,123,0,5,9,6,2,5]

console.log(array.splice(1,0,123))