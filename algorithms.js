///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
//  _____                          _               ////////////////////
// |  __ \                        (_)              ////////////////////
// | |__) |___  ___ _   _ _ __ ___ _  ___  _ __    ////////////////////
// |  _  // _ \/ __| | | | '__/ __| |/ _ \| '_ \   ////////////////////
// | | \ \  __/ (__| |_| | |  \__ \ | (_) | | | |  ////////////////////
// |_|  \_\___|\___|\__,_|_|  |___/_|\___/|_| |_|  ////////////////////
//                                                 ////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////
// NOTE: modify the parameter list of each function as needed       ///
///////////////////////////////////////////////////////////////////////

// Problem #1

// Write a recursive method called countVowels that returns the number of vowels in a given String
// countVowels('abcedfg') ->2

var countVowels = function(str, count){
  // Simple Regex Solution
  // return str.match(/[aeiou]/ig).length;

  // Recursive Solution
  count = count || 0;

  if ( str.length === 0 ) {
    return count
  }

  var char = str.charAt(0);

  count = /[aeiou]/.test(char) === true ? count + 1 : count;

  return countVowels(str.slice(1), count);

};

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #2
// Given a non-negative int n, return the sum of its digits recursively (no loops)
// sumDigits(126) → 9
// sumDigits(49) → 13
// sumDigits(12) → 3

var recursiveSum = function(n){
  // console.log(n)

  return n === '' ? 0 : Number( n.toString().charAt(0) ) + Number( recursiveSum( n.toString().slice(1) ) )

};
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #3
// Check if a given number is a power of 2
// PowerOfTwo(8) -> true
// PowerOfTwo(9) -> false

var isPowerOfTwo = function(n){

  if ( n % 2 === 1 ) {
    return false;
  }
  if ( n === 2 ) {
    return true;
  }
  return isPowerOfTwo( n / 2 )

};

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #4

// Write a recursive method that takes as parameters an initial investment amount,
// an annual interest rate, and a number of years.
// The method should return the value of the investment after the given number of years,
// assuming that the interest is compounded annually.
// (For example, if the initial investment is 1000 and the interest rate is 10 percent,
// then after one year the investment will be worth 1100, after two years 1210, after three years 1331, etc.)

var invest = function(amount, interest, years ){

  return years === 1 ?  amount + ( amount * interest ) : invest(amount + ( amount * interest ), interest, years - 1);

};

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #5

// given a min and a max, both integers, use recursion to console.log all of the
// integers from the min to the max, and then console.log the numbers from the max
// to the min. Do not use loops! Use recursion.

// ex:
//    printRangeUpDown(4, 10);
//    console.logs: 4,5,6,7,8,9,10,9,8,7,6,5,4
var printRangeUpDown = function(min, max){
  if (min >= max) {
    console.log(max);
    return
  }
  console.log(min)
  printRangeUpDown(min + 1, max)
  console.log(min)


};

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #6

// given a binary tree where each node has a
// value, a left and a right, return the sum of all of the values.
// remember, binary tree's are different from binary search trees!
// you'll need to create a binary tree constructor!

function BinaryTree(val, left, right) {
  this.value = val;
  this.left = left;
  this.right = right;
}

var binaryTreeSum = function(tree){
  sum = tree.value;;
  if ( tree.left !== undefined ) {
    sum += binaryTreeSum(tree.left)
  }
  if ( tree.right !== undefined ) {
    sum += binaryTreeSum(tree.right)
  }
  return sum;
};

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #7

// Given an array of integers which is sorted in increasing order
// build a binary search tree of minimal height. Height of a tree
// is the max number of edges from a node to the tree's root node.
// e.g. this tree has height 3.
//                   10
//                  /  \
//                3     30
//               / \
//              1   7
//                   \
//                    8

// you'll need to create a binary search tree constructor!
var arrayToBinarySearchTree = function(array){

};