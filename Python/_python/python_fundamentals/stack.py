# class Node:
#     def __init__(self,val):
#         self.value = val
#         self.next = None
# class Stack():
#     def __init__(self):
#         self.head = Node("head")
#         self.size = 0
#     def __str__(self):
#         cur = self.head.next
#         out = ""
#         while cur:
#             out += str(cur.value) + "->"
#             cur = cur.next
#         return out[:-3]   
#     def push(self,val):
#         node = Node(val)
#         node.next = self.head.next
#         self.head.next = node
#         self.size += 1
#     def getSize(self):
#         return self.size
#     def isEmpty(self):
#         return self.size == 0
#     def peek(self):
#         if self.isEmpty():
#             raise Exception("Peeking from an empty stack")
#         return self.head.next.value
#     def pop(self):
#         if self.isEmpty():
#             raise Exception("Popping from an empty stack")
#         remove = self.head.next
#         self.head.next = self.head.next.next
#         self.size -= 1
#         return remove.value


# if __name__ == "__main__":
#     stack = Stack()
#     for i in range(1, 11):
#         stack.push(i)
#     print(f"Stack: {stack}")
    
#     for _ in range(0):
#         remove = stack.pop()
#         print(f"Pop: {remove}")
#     print(f"Stack: {stack}")

# new_stack = Stack()
# new_stack.push(1)


# data = []



class Stack():
    def __init__(self):
        self.items = []
    def display(self):
        print(self.items)
    def push(self,items = ''):
        if self.items == []:
            self.items.append(items)
        else:
            self.items.append("<-")
            self.items.append(items)
    def pop(self):
        self.items.pop()
        pass
    def peek(self):
        if self.items:
            return self.items[-1]
        else:
            return None
    def size(self):
        if self.items:
            return len(self.items)
        else:
            return None
    def isempty(self):
        if self.items == []:
            return True
        else:
            return False
if __name__ == "__main__":
    stack = Stack()
    stack.push('1')
    stack.push('2')
    stack.push('3')
    stack.pop()
    stack.pop()
    print(stack.display())



# Add to top of stack
# Remove from top of stack
# Return value at top of stack
# Return size of stack
# Return if a particular value is contained in the stack
# Return if stack is empty

# Stack with SLL first 6 methods:

# Add to top of stack
# Remove from top of stack
# Return value at top of stack
# Return size of stack
# Return if a particular value is contained in the stack
# Return if stack is empty

class Arrstack:
    def __init__(self):
        self.list = []
    def add(self, val):
        self.list.append(val)
    def remove(self):
        self.list.pop()
    def top(self):
        print(self.list[-1])
        return self.list[-1]
    def size(self):
        print(len(self.list))
        return len(self.list)
    def contain(self,val):
        for i in self.list:
            if i == val:
                print("Found it")
                return True
        print("Didn't find it")
        return False
    def is_empty(self):
        if len(self.list) == 0:
            print("List is empty")
            return True
        else:
            print("List is Not Empty")
            return False
    def print_list(self):
        print(self.list)

arr =Arrstack()
arr.add(1)
arr.add(2)
arr.add(3)
arr.print_list()


class Node:
    def __init__(self,val):
        self.value = val
        self.next = None

class SLLStack:
    def __init__(self):
        self.top =None
    def add(self,val):
        if self.top == None:
            self.top = Node(val)
        else:
            new_node = Node(val)
            new_node.next = self.top
            self.top = new_node
    def remove(self):
        if self.top == None:
            print("Nothing to remove")
            return False
        else:
            self.top = self.top.next
    def return_top(self):
        print(self.top.value)
        return self.top.value
    def size(self):
        if self.top == None:
            print("No list to count.")
            return 0
        else:
            count = 0
            runner = self.top
            while runner != None:
                count += 1
                runner = runner.next
            print(count)
            return count
    def container(self,val):
        if self.top == None:
            print("no values in list")
            return False
        else:
            runner = self.top
            while runner != None:
                if runner.value == val:
                    print("Fount it")
                    return True
            print("Never found it")
            return False
    def is_empty(self):
        if self.top == None:
            print("List is empty")
            return True
        else:
            print("The list is not empty")
            return False
    def display(self):
        if self.top == None:
            print("No list")
        else:
            result = ""
            runner = self.top
            while runner.next != None:
                result += f"{runner.value} -> "
                runner =runner.next
            result += f"{runner.value}"
            print(result)

slist= SLLStack()
slist.add(1)
slist.add(2)
slist.add(3)
slist.return_top()
slist.display()


class TSQ:
    def __init__(self):
        self.stack1 = SLLStack()
        self.stack2 = SLLStack()
   
    def enqueue(self,val):
        #add value to first stack
        self.stack1.add(1)
        self.stack1.add(2)
        self.stack1.add(3)
        self.stack1.add(4)
        self.stack1.display()
    def dequeue(self):
        pass
    #pull vals from stack 1 
    #remove top
    #put values back?

stack1 = TSQ()
stack1.enqueue(1)
