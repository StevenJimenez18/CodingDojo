#1.Countdown
def countdown(num):
    for i in range(num,-1,-1):
        print(i)
countdown(5)
#2. Print and Return
def print_and_return(num1,num2):
    print(num1)
    return num2
print_and_return(1,2)

#3.First Plus Length 
def first_plus_length(list):
    for i in list:
        sum = 0
        sum += i
    return list[0] + sum
print(first_plus_length([1,2,3,4,5]))

def first_plus_length(list):
    return list[0] + len(list)
print(first_plus_length([1,2,3,4,5]))

#4.Values Greater than Second

def values_greater_than_second(list):
    new_list = []
    for i in range(len(list)):
        if len(list) <= 2:
            return False
        elif list[i] > list[2]:
            new_list.append(list[i])
        elif list[i] < list[2]:
            return "You have no values greater than the second"
    return new_list
print(values_greater_than_second([2,2,4,2,5,8]))

# 5. This Length, That Value

def this_length_that_value(size,value):
    new_list = []
    for i in range(size):
        new_list.append(value)
    return new_list
print(this_length_that_value(4,5))

