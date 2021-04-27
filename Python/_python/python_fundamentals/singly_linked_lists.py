#singly linked lists


#Function to add to front
#Function to add to back
#Function to display list
#Function to see if a value is in 



class SSL():
    def __init__(self):
        self.head = None
    def remove_front(self):
        runner = self.head.next
        self.head = runner
        return self
    def add_to_front(self,val):
        new_node = Node(val) #creates a new instance of a node
        current_head = self.head
        new_node.next = current_head
        self.head = new_node
        return self
    def add_to_back(self,val):
        if self.head == None:	# if the list is empty
            self.add_to_front(val)	# run the add_to_front method
            return self
        new_node = Node(val)
        runner = self.head
        while (runner.next != None):
            runner = runner.next
        runner.next = new_node
        return self
    def print_values(self):
        runner = self.head
        while (runner != None):
            print(runner.value)
            runner = runner.next
        return self
    def minToFront(self):
        if self.head == None:
            return False
        minnode = self.head
        runner = self.head
        prev = self.head
        while runner.next != None:
            if minnode.value > runner.next.value:
                prev = runner
                minnode = runner.next
            runner = runner.next
        prev.next = minnode.next
        minnode.next = self.head
        self.head = minnode
    def maxToBack(self):
        if self.head == None:
            return False
        maxnode = self.head
        runner = self.head
        prev = self.head
        while runner.next != None:
            if maxnode.value < runner.next.value:
                prev = runner
                maxnode = runner.next
            runner = runner.next
        prev.next = maxnode.next
        runner.next = maxnode
        maxnode.next = None
    # def prepend(self, inPlaceVal, prePenVal):
    #     if self.head == None:
    #         return False
    #     checker = inPlaceVal
    #     new_node = Node(prePenVal)
    #     prev = self.head
    #     runner = self.head
    #     while runner.next != None:
    #         print(f"This is runner {runner.value} ")
    #         if runner.next.value == checker:
    #             new_node = runner.next
    #             runner.next = new_node
    #             print(runner.value)
    #         runner = runner.next
    def remove_negative(self):
        #set a variable to move through the list
        runner = self.head
        #set a variable to move through the list, keeping track of the node before the runner
        prev = None
        #create a loop to move the runner and the previous node through the list
        while runner.next:
            #set a variable tat moves within the loop with the runner and keeps track of the node after
            nxt = runner.next
            #move the variable of (prev) into the position of runner
            prev = runner
            #move the runner to the position of the (nxt) variable
            runner = nxt
            # print(runner.value)
            if runner.value < 0:
                #if the value of the current node is less than zero
                # move the nxt variable to the position of the node after runner
                # positions become : Prev -> Runner -> Nxt
                nxt = runner.next 
                #set the direction of the 'next' attribute to point to the positon of the nxt variable
                # position: (Prev -> Nxt) and (Runner -> Nxt)
                prev.next = nxt
                #remove the runner from the list by setting its 'next' attribute equal to Null or None
                runner.next = None
        return self

    def removeNeg(self, val):
        runner = self.head
        prev = None
        while runner:
            next = runner.next
            runner = runner.next


class Node:
    def __init__(self,val):
        self.value = val
        self.next = None

list1 = SSL()
list1.add_to_back(1).add_to_back(2).add_to_back(3).add_to_back(4).print_values()



# Remove all negative values from a Singly Linked List
# Ex: given a list with 1 -> -2 -> 3 -> 4 -> -5 return: 1 -> 3 -> 4
# Ex: given a list with -1 -> -2 -> 3 -> -4 return: 3
# Ex: given a list with -1 -> -2 -> -3 return: An empty list



# Prepend Val -> given a value in the list and a value to be added, add the new value BEFORE the given val
# Ex: prepend_val(2,4): With 2 being the value already in the list and 4 being the value to add, we should see: 4 -> 2
# Return False if the given value is not found in the list

# Append Val -> given a value in the list and value to be added, add the new value AFTER the given val
# Ex: append_val(2,4): With 2 being the value already in the list and 4 being the value to add, we should see: 2 -> 4
# Return False if the given value is not in the list



#iterate though SLL
#compare each number to runner
#if number is smaller make that temp value
#when runner is finsihed, make temp value new head
#link runner to next node


# def remove_from_back(self):
#         runner = self.head
#         while (runner.next != None):
#             runner = runner.next
#             print(runner.value)
#         # print(runner.value)

# def min_front():



# def removeFront(self):
#         if self.head != None:
#             self.head = self.head.next
#         else:
#             return False
#         return self

# def removeTail(self):
#     if self.head == None:
#         print("Bwam-bwam. Try again.")
#         return self
#     elif self.head.next == None:
#         self.head = None
#         return self
#     runner = self.head
#     while runner.next.next != None:
#         runner = runner.next
#     runner.next = None
#     return self











# Singly Linked Lists Algos

# Write a function that removes the front node from a SLL

# Write a function that removes the back node from a SLL

# Move the min value in a SLL to the front of the list
# Move the max value in a SLL to the back of the list
