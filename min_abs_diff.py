import sys
import math
# find sum with the least possible absolute difference
def arrSum(array):
  sum = 0
  for item in array:
    sum += item
  return sum

def solution(A):
    abs_diff = 0
    #create all possible sums
    sums = {}
    #find break point to create sub arrays
    if len(A) == 1:
        print("List length must be > 1 : Input given: " , A)
        return 0
    break_point = 0
    if len(A) % 2 == 0:
        break_point = (len(A)/2)
    else:
        break_point = math.ceil((len(A)/2))
    #sub array 1
    i = 0
    sub_arr1 = []
    sub_arr2 = []
    while i < break_point:
        sub_arr1.append(A[i])
        i+=1
    #sub array 2
    while i < len(A):
        sub_arr2.append(A[i])
        i+=1
    
    # Create first key for dictionary
    mins_abs_diff_key = str(sub_arr1)+"-"+str(sub_arr2)
    
    # insert value for first key
    sums[mins_abs_diff_key] = abs((arrSum(sub_arr2)) - (arrSum(sub_arr1)))
    abs_diff = sums[mins_abs_diff_key]

    # generate all sums possible
    for x in range(len(sub_arr1)):
        a1 = sub_arr1
        for y in range(len(sub_arr2)):
            #switch positions for sum
            dummy = a1[x]
            a1[x] = sub_arr2[y]
            sub_arr2[y] = dummy

            # store possible sum
            sums[str(a1)+"-"+str(sub_arr2)] = abs(arrSum(sub_arr2) - (arrSum(a1)))

            # restore original array positions
            sub_arr2[y] = a1[x]
            a1[x] = dummy

    # find lowest value
    for key in sums:
        if sums[key] < sums[mins_abs_diff_key]:
            # set lowest key for lowest value
            mins_abs_diff_key = key



    print("--------final-------------")
    print(mins_abs_diff_key)
    print(sums[mins_abs_diff_key])
    print("------------------------")
    return sums[mins_abs_diff_key]


#Test cases
arr1 = [1,2,3,4,5,6,7,8]
arr2 = [7,8,9]
arr3 = [1,2]
arr4 = [1]
arr5 = [7,7,7]

solution(arr1)
solution(arr2)
solution(arr3)
solution(arr4)
solution(arr5)