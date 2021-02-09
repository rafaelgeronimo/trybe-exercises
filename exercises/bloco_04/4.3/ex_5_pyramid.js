function pyramid(base) {
  if(base %2 > 0) {
    let newRow = '';
    let half = (base + 1) / 2;
    let spaceLeft = half;
    let spaceRight = half;
    for(let rowPyramid = 0; rowPyramid < half -1; rowPyramid += 1) {
      for(let columnPyramid = 0; columnPyramid <= base; columnPyramid += 1) {
        if(columnPyramid === spaceRight || columnPyramid === spaceLeft) {
          newRow += '*';
        } else {
          newRow += ' ';
        }
      }
      console.log(newRow);
      newRow = '';
      spaceLeft += 1;
      spaceRight -= 1;
    }
    newRow += ' ';
    for(let pyramidBase = 0; pyramidBase < base; pyramidBase += 1) {
      newRow += '*';
    }
    console.log(newRow);
  } else {
    console.log('Por favor, informe um número ímpar!');
  }
}

pyramid(7);