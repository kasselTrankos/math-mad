// http://www.tomharding.me/2016/10/29/peano-forte/
// https://es.wikipedia.org/wiki/Giuseppe_Peano
const Z = 0;
const S = x => x + 1;
// 1 notation
// Sum 1 by 1
const _1 = S(Z);
const _2 = S(S(Z));
const _3 = S(S(S(Z)));
const _4 = S(S(S(S(Z))));
// Sum with the previous
const __2 = S(_1);
const __3 = S(_2);
const __4 = S(_3);
console.log('1er notation of hardy:', _1, _2, '===', __2, _3,'===', __3, _4,'===', __4);


/// 2 notation
// test the equivalence 
const _eq = (S (S (Z))) === (S (S (S (Z))));
// S x === S y
// removes each S untill get Z 
// Se descompone según Peano, en quitar -1 hasta llegar a 0 ( números naturales)
// (S (S Z)) == (S (S (S Z)))
//   => (S Z) == (S (S Z)) -- By rule 4
//   => Z == (S Z)         -- By rule 4
//   => false              -- By rule 2
console.log('equivalence ', _eq);

