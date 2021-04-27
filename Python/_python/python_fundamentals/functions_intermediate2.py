# 1. Update Values in Dictionaries and Lists
x = [ [5,2,3], [10,8,9] ] 
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

#1.1 Change the value 10 in x to 15. Once you're done, x should now be [ [5,2,3], [15,8,9] ].
def valunes_In_Dictionary():
    x = [ [5,2,3], [10,8,9] ] 
    for i in range(len(x)):
        for j in range(len(x[i])):
            x[i][j] = 15
        return x
print(valunes_In_Dictionary())





#1.2 Change the last_name of the first student from 'Jordan' to 'Bryant'
def values_In_Dictionary():
    students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
    ]
    for i in range(len(students)):
        if students[0]['last_name'] == "Jordan":
            students[0]['last_name'] = "Bryant"
        return students
print(values_In_Dictionary())





#1.3 In the sports_directory, change 'Messi' to 'Andres'

def sport_Function():
    sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
    for k,v in sports_directory.items():
        if sports_directory['soccer'][0] == 'Messi':
            sports_directory['soccer'][0] = 'Andres'
        return sports_directory
print(sport_Function())



#1.4 Change the value 20 in z to 30
def z_Function():
    z = [ {'x': 10, 'y': 20} ]
    for i in range(len(z)):
        if z[0]['y'] == 20:
            z[0]['y'] = 30
        return z
print(z_Function())


#2. Iterate Through a List of Dictionaries
def iterate_Dictionary(students):
    for i in range(len(students)):
        for key,value in students[i].items():
            print(f"{key}:{value}")


iterate_Dictionary(students = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ])



#3. Get Values From a List of Dictionaries
students = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]
def iterate_Dictionary2(some_list, key_name):
    for i in some_list:
        print(i[key_name])

iterate_Dictionary2(students,'first_name')


# 4. Iterate Through a Dictionary with List Values
# Create a function printInfo(some_dict) that given a dictionary whose values are all lists, prints the name of each key along with the size of its list, and then prints the associated values within each key's list. For example:

dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
def print_Info(some_dict):
        for key,value in some_dict.items():
            print(len(some_dict[key]), key, *value, sep = "\n")
            print('we\'re here')

print_Info(dojo)



