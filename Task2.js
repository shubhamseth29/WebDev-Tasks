class Node
{
    constructor(data,next=null)
    {
        this.data = data;
        this.next = next;
    }
  }
  
class SinglyLinkedList
{
    constructor() 
    {
        this.head = null;
        this.size = 0;
    }

    insertData(data) 
    {
        let currentNode;
        for (var i in data)
        {
            var newNode = new Node(data[i]);
            if(this.head==null)
            {
                this.head = newNode;
            }
            else 
            {
                currentNode = this.head;
                while(currentNode.next)
                {
                    currentNode = currentNode.next;
                }
                currentNode.next = newNode;

            }
                this.size++;
        }
        return this.head;
  }
  printList()
  {
      let currentNode=this.head;
      if(currentNode==null)
      {
          return null
      }
      while(currentNode)
      {
        console.log(currentNode.data+"=>")
        currentNode=currentNode.next;  
      }
  }
}
  
function arrayToLinkedlist (arr)
{
    if (arr == null) {
      return [];
    }
    var singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList.insertData(arr);
    singlyLinkedList.printList();
    console.log(singlyLinkedList); 
}
  
const arr=[0,1,2,3,4,5];
arrayToLinkedlist(arr);

