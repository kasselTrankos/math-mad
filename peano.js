const {taggedSum, tagged} = require('daggy');
// http://www.tomharding.me/2016/10/29/peano-forte/
// https://es.wikipedia.org/wiki/Giuseppe_Peano
// https://francisrstokes.github.io/blog/blog/2019/01/12/exploring-the-peano-axioms-with-algebraic-data-types/
// 0 is a natural number.
// The next four axioms describe the equality relation. 
// Since they are logically valid in first-order logic with equality, they are not considered to be part of "the Peano axioms" in modern treatments.[5]

// For every natural number x, x = x. That is, equality is reflexive.
// For all natural numbers x and y, if x = y, then y = x. That is, equality is symmetric.
// For all natural numbers x, y and z, if x = y and y = z, then x = z. That is, equality is transitive.
// For all a and b, if b is a natural number and a = b, then a is also a natural number. 
// That is, the natural numbers are closed under equality.
// The remaining axioms define the arithmetical properties of the natural numbers. The naturals are assumed to be closed under a single-valued "successor" function S.

// RULES (must):
// 0 is a natural number
// For every natural number x, x = x (reflexivity)
// For all natural numbers x and y, if x = y, then y = x (symmetry)
// For all natural numbers x, y and z, if x = y and y = z, then x = z (transitivity)
// (habla de Sets( conjuntos)) For all a and b, if b is a natural number and a = b, then a is also a natural number (closure under equality)
// For every natural number n, S(n) is a natural number
// For all natural numbers m and n, m = n if and only if S(m) = S(n) (injection)
// For every natural number n, S(n) = 0 is false. That is, there is no natural number whose successor is 0


// For every natural number n, S(n) is a natural number. That is, the natural numbers are closed under S.
// For all natural numbers m and n, m = n if and only if S(m) = S(n). That is, S is an injection.
// For every natural number n, S(n) = 0 is false. That is, there is no natural number whose successor is 0.
// natural number Z
// 0 = ∅
// 1 = {∅} => S(Z)
// 2 = {∅,{∅}}  => S(S(Z))
// 3 = {∅,{∅},{∅,{∅}}}  => S(S(S(Z)))
// ...
const Z = 0;
// succesor S
const S = x => x + 1;
// 1 notation
// Sum 1 by 1
const _1 = S(Z);
const _2 = S(S(Z));
const _3 = S(S(S(Z)));
const _4 = S(S(S(S(Z))));
// ...

console.log(_1, _2,_3,_4);



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

// 3er anotation
// Sum with the previous
// gives the induction -> matematicas usa la induccion para validar una teoria
const __2 = S(_1);
const __3 = S(_2);
const __4 = S(_3);
console.log('1er notation of hardy:', _1, _2, '===', __2, _3,'===', __3, _4,'===', __4);

// conclusión
// recursivity and induction
// recursion is obvious
// Peao axioms
// The first axiom states that the constant 0 is a natural number:


// ADT peano, using an array
const {createUnionType, variable, recursiveVariable} = require('algebraic-types');
const Peano = createUnionType('Peano', {
  _0: [],
  _S: [recursiveVariable('x')]
});
Peano.prototype.eq = function (y) {
  const x = this;

  return x.match({
    _0: () => y.match({
      _0: () => true,
      _S: () => false
    }),
    _S: innerX => y.match({
      _0: () => false,
      _S: innerY => innerX.eq(innerY)
    })
  });
}
const {_S, _0} = Peano;
const zero = _0();
const one = _S(zero);
const two = _S(one);
const three = _S(two);
console.log(three.eq(three), ' equality')



