# Singly Linked List Queue

# Write the first 6 methods common in a SLL Queue:

# Add a value to the "back" of the queue
# Remove a value from the "front" of the queue
# Top (return the value at the front of the queue)
# Contains (return true if a value is inside a queue)
# IsEmpty (return true if a queue is empty)
# Size (return the size of a queue)



class Queue():
    def __init__(self):
        self.head = None
        self.tail = None
        self.temp_list = []

    def newBack(self, node): 
        if self.head == None:
            self.head = node
            self.tail= node
        else: 
            self.tail.next = node
            self.tail = node
        self.temp_list.append(self.tail.value)
        print(self.temp_list)
        return self
    def is_palindrome(self):
        for i in range(0,len(self.temp_list) // 2, 1):

            if self.temp_list[i] != self.temp_list[len(self.temp_list)-(i+1)]:
                print(False)
                return False

        print(True)
        return True

    def display(self):
        runner = self.head
        while runner.next != None:
            print(runner.value)
            runner=runner.next
        print(runner.value)
        return self

class Node():
    def __init__(self, val):
        self.value = val
        self.next = None

Qlist = Queue()
node1 = Node(5)
node2 = Node(2)
node3 = Node(3)
node4 = Node(2)
node5 = Node(5)

    
Qlist.newBack(node1).newBack(node2).newBack(node3).newBack(node4).newBack(node5).is_palindrome()
Qlist.display()



class Queue():
    def __init__(self):
        self.head = None
        self.tail = None

    def newBack(self, node): 
        if self.head == None:
            self.head = node
            self.tail= node
        else: 
            self.tail.next = node
            self.tail = node
        return self
    def is_palindrome(self):
        runner = self.head
        back = self.tail
        temp1 = None
        temp2 = None
        while runner != None:
            if temp1 == temp2:
                temp1 = runner.value
                temp2 = self.tail.value
                runner = runner.next
                back = self.tail
        print(True)    
        return True

    def display(self):
        runner = self.head
        while runner.next != None:
            print(runner.value)
            runner=runner.next
        print(runner.value)
        return self

class Node():
    def __init__(self, val):
        self.value = val
        self.next = None



Qlist = Queue()


node1 = Node(5)
node2 = Node(2)
node3 = Node(3)
node4 = Node(2)
node5 = Node(5)

    
Qlist.newBack(node1).newBack(node2).newBack(node3).newBack(node4).newBack(node5).is_palindrome()
Qlist.display()


class Queue():
    def __init__(self):
        self.head = None
        self.tail = None
        self.temp_list = []

    def newBack(self, node): 
        if self.head == None:
            self.head = node
            self.tail= node
        else: 
            self.tail.next = node
            self.tail = node
        self.temp_list.append(self.tail.value)
        print(self.temp_list)
        return self
        
    def is_palindrome(self):
        for i in range(0,len(self.temp_list) // 2, 1):
            if self.temp_list[i] != self.temp_list[len(self.temp_list)-(i+1)]:
                print(False)
                return False
        print(True)
        return True

    def display(self):
        runner = self.head
        while runner.next != None:
            print(runner.value)
            runner=runner.next
        print(runner.value)
        return self

class Node():
    def __init__(self, val):
        self.value = val
        self.next = None

Qlist = Queue()
node1 = Node(5)
node2 = Node(2)
node3 = Node(3)
node4 = Node(2)
node5 = Node(5)

    
Qlist.newBack(node1).newBack(node2).newBack(node3).newBack(node4).newBack(node5).is_palindrome()
Qlist.display()
