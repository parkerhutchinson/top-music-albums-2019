function romanize(num:number) {
  const lookup:object = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
  let roman = '';
  let i = 0;
  //@ts-ignore
  for ( i in lookup ) {
    //@ts-ignore
    while ( num >= lookup[i] ) {
      roman += i;
      //@ts-ignore
      num -= lookup[i];
    }
  }
  return roman;
}

export default romanize;