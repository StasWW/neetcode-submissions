/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let slow = head, fast = head, prev = null;
        
        for (let i = 0; i < n - 1; i++) fast = fast.next;
        
        while (fast.next) {
            prev = slow;
            slow = slow.next;
            fast = fast.next;
        }
        if (!prev) return slow.next;
        prev.next = slow.next;
        
        return head;
    }
}
