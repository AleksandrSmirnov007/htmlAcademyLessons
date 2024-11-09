console.log('hello');

const arrayGen = ['AA', 'BB', 'CC'];

const arrayChild = [];

console.log(arrayGen[0][0]);

const breeding = function (array) {

  for (let i = 0; i < array.length; i++) {

    for (let j = 0; j < array.length; j++) {

      if (i !== j) {
        console.log('i= ' + i);
        console.log('j= ' + j);

        console.log('родитель-1 ' + array[i]);
        console.log('родитель-2 ' + array[j]);

        for (let x = 0; x < array[i].length; x++) {

          for (let y = 0; y < array[j].length; y++) {
            // console.log('x= ' + x);
            // console.log('y= ' + y);

            const newchild = array[i][x] + array[j][y];
            console.log('ребенок  ' + newchild);

            arrayChild.push(newchild);
          }
        }
      }
    }
  }
};

breeding(arrayGen);

console.log(arrayChild);

