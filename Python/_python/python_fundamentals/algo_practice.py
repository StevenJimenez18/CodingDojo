
# //Acronyms
# TGIF -> Thank God it's Friday
# given: Thank God it's Friday -> TGIF

# Given: Laugh out Loud -> LOL

my_list = 'Thank God Its Friday'
new_value = my_list[0]
for i in range(len(my_list)):
    if my_list[i] == ' ':
        new_value += my_list[i+1]
print(new_value)

# //Reverse string
# given: "Hello World!"
# Return: "!dlroW olleH"
greeting = "Hello World!" 
new_greeting = ''
for i in range(len(greeting)-1,-1,-1):
    new_greeting += greeting[i]
print(new_greeting)

#set up a function that takes a string
def parens_Valid(string):
    pair_count = 0 
    for i in range(0,len(string)):
        if string[i] == "(":
            for i in range(i,len(string)):
                if string[i] == ")":
                    pair_count += 1
        elif pair_count > 0:
            print(pair_count)
            print("we got here")
print(parens_Valid("1((23)4)"))




# Easy mode: string is palindrome
# Given a string, return True or False whether the string is a palindrome
# ex: given: "racecar" -> return True
# ex: given: "hello" -> return False


def palindrome(any_string):
    matches = 0
    for i in range(0,len(any_string) // 2, 1):
        if any_string[i] == any_string[len(any_string)-(i+1)]: #0 / -1
            matches += 1
        elif any_string[i] != any_string[len(any_string)-(i+1)]:
            return False
    if matches > 0:
        return True
print(palindrome('racecar'))




# Challenging mode: longest palindrome
# Given a string, return the length of the longest palindrome in the string -- if no palindrome exists, return 1
# ex: given "ban ana" -> return 5 (anana)  
# ex: given "racecar" -> return 7 (racecar)
# ex: given "hello" -> return 2 (ll)
# ex: given "hi" -> return 1 (h)


def palindrome(any_string):
    matches = 0
    for i in range(0,len(any_string) // 2, 1):
          
        if any_string[i] == any_string[len(any_string)-1]:
            print(any_string[i])
            if any_string[i+1] == any_string[len(any_string)-(i+1)]:
                testVal = any_string[i + 1]
                print(testVal)

print(palindrome('banana'))
               

# Book Index
# Given an array of numbers, return a "book index" string 
# Ex: given [1,2,3,5,8,9,10,13,15]
# Return: "1-3,5,8-10,13,15"
# Ex: given [1,2,3,4,7,10,11,12,13]
# Return: "1-4,7,10-13"

#set up function that takes an array
#loop through array
#add index to something
#compare next index to previous number 
#if previous number + 1 equals the index then add that index to previous something
#if not, index starts new something
#print

def book_Index(arr):
    temp_Arr = ''
    in_sequence = False
    for i in range(len(arr)-1):
        if arr[i] == arr[i+1]-1:
            temp_Arr += str(arr[i])
            while arr[i] == arr[i+1]-1:
                i += 1
                if arr[i] != arr[i+1]-1:
                    temp_Arr += str(arr[i])
        elif arr[i] != arr[i+1]-1: 
                temp_Arr += str(arr[i]) 
    temp_Arr += str(arr[len(arr)-1])
    print(temp_Arr)

book_Index([1,2,3,5,8,9,10,13,15])
#1,2,3 ,
#5, 
# #8,9,10 
# #13

def book_Index(arr):
    temp_Arr = ''
    in_sequence = False
    for i in range(len(arr)-1):
        while arr[i] == arr[i+1]-1:
            temp_Arr += str(arr[i])
            
    temp_Arr += str(arr[len(arr)-1])
    print(temp_Arr)

book_Index([1,2,3,5,8,9,10,13,15])


















# Calculate change
# Given a number, return a dictionary of the optimal change distribution of quarters, dimes, nickels, and pennies
# ex: Given 81, return {'quarters': 3, 'dimes': 0, 'nickels': 1, 'pennies': 1}
# ex: Given 12, return {'quarters': 0, 'dimes': 1, 'nickels': 0, 'pennies': 2}


def change(coin):
    coins = {
        'quarters': 0,
        'dimes' : 0,
        'nickels': 0,
        'pennies': 0
    }
    if coin >= 25:
        coins['quarters'] = int(coin/25)
        coin-= 25 * coins['quarters']
        # print(coin)
    if coin >= 10:
        coins['dimes'] = int(coin/10)
        coin-= 10 * coins['dimes']
        # print(coin)
    if coin >=5:
        coins['nickels'] = int(coin/5)
        coin-=5 * coins['nickels']
        # print(coin)
    if coin >=1:
        coins['pennies'] = int(coin/1)
        coin-=1 * coins['pennies']
    return coins
print(change(81))
print(change(12))
print(change(100))
print(change(132))







#singly linked lists


#Function to add to front
#Function to add to back
#Function to display list
#Function to see if a value is in 



class SSL():
    def __init__(self):
        self.head = None
    def add_to_front(self,val):
        new_node = SLNode(val) #creates a new instance of a node
        current_head = self.head
        new_node.next = current_head
        self.head = new_node
        return self
    def add_to_back(self,val):
        if self.head == None:	# if the list is empty
            self.add_to_front(val)	# run the add_to_front method
            return self
        new_node = SLNode(val)
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


class SLNode:
    def __init__(self,val):
        self.value = val
        self.next = None


list1 = SSL()
list1.add_to_front("I").add_to_back("Love").add_to_back("Ice Cream").print_values()


# Singly Linked Lists Algos

# Write a function that removes the front node from a SLL

# Write a function that removes the back node from a SLL
