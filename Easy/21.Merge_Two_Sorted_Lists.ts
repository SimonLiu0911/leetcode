/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    // 指向下一個的值
    this.next = (next === undefined ? null : next)
  }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const dummyHead = new ListNode();
  
  let currentNode = dummyHead;
  
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      currentNode.next = list1;
      list1 = list1.next;
    } else {
      currentNode.next = list2;
      list2 = list2.next;
    }
    currentNode = currentNode.next;
  }
  
  currentNode.next = list1 !== null ? list1 : list2;
  
  return dummyHead.next;
};

// 創建列表 1 -> 2 -> 4
const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);

// 創建列表 2 -> 2 -> 4
const list2 = new ListNode(2);
list2.next = new ListNode(2);
list2.next.next = new ListNode(4);

const mergedList = mergeTwoLists(list1, list2);

// 合併後列表的值
let currentNode = mergedList;
while (currentNode !== null) {
  currentNode = currentNode.next;
}
