#1. Biggie Size

#define function that takes list
def biggie_Size(list):
#set for loop to run through list
    for i in range(len(list)):
#check index if positive
        if list[i] > 0:
#if positive change to big
            list[i] = 'big'
#return list
    return list
print(biggie_Size([-1,3,5,-5]))


#2. Count Positives

#define a function that accepts lists
def count_Positives(list):
#declare a sum variable
    sum = 0
#create loop to run through list
    for i in range(len(list)):
#check index for positive numbers
        if list[i] > 0:
#if positive add to total sum
            sum += list[i]
            
#replace final index with sum
        
#return list
    # list.pop()
    # list.append(sum)
    list[-1] = sum 
    return list
print(count_Positives([-1,1,1,1]))

#3. Sum Total
# create function that takes a list
def sum_Total(list):
    #define variable for sum
    sum = 0
#create for loop through list
    for i in range(len(list)):
# sum all the numbers
        sum += list[i]
#return sum
    return sum
print(sum_Total([1,2,3,4]))

#4. Average
#create function that takes a list
def average(list):
#create variable for sum
    sum = 0
#create for loop that iterates through list
    for i in range(len(list)):
#sum the index 
        sum += list[i]
#return sum dived by length
    return sum / len(list)
print(average([1,2,3,4]))

#5. Length
#create function that takes a list
def length(list):
#return length 
    return len(list)
print(length([37,2,1,-9]))

#6. Minimum

def minimum(list):
    min = list[1]
    for i in range(len(list)):
       if list[i] < min:
            min = list[i]
    return min
print(minimum([37,2,1,-9]))

def minimum(list):
    print(min(list))
minimum([37,2,1,-9])

#7. Maximum

def maximum(list):
    max = list[1]
    for i in range(len(list)):
       if list[i] > max:
            max = list[i]
    return max
print(maximum([37,2,1,-9]))

def maximum(list):
    print(max(list))
maximum([37,2,1,-9])

#8. ultimate analysis
def ultimate_Analysis(list):
    new_dict = {
        'sum_Total': sum(list),
        'average': sum(list) / 2,
        'minimum': min(list),
        'maximum': max(list),
        'length': len(list)
    }
    print(new_dict)
ultimate_Analysis([37,2,1,-9])


#9. Reverse
# Create a function that takes a list and return that list with values reversed. Do this without creating a second list. (This challenge is known to appear during basic technical interviews.)
# Example: reverse_list([37,2,1,-9]) should return [-9,1,2,37]

def reverse(list):
    for i in range(0,len(list) // 2, 1 ):
        temp = list[i]
        list[i] = list[len(list)-(i+1)]
        list[len(list)-(i+1)] = temp
    return list
print(reverse([37,2,1,-9,10])) 


