const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  // Create a dummy node and set its next pointer to the head of the list
  let dummy = new ListNode(null);
  dummy.next = l;
  let current = dummy;

  // Iterate through the list
  while (current.next) {
    // If the next node's value is equal to k, update the next pointer to skip that node
    if (current.next.value === k) {
      current.next = current.next.next;
    } else {
      // Otherwise, move to the next node
      current = current.next;
    }
  }

  // Return the modified list, starting from the dummy.next
  return dummy.next;
}


module.exports = {
  removeKFromList
};
