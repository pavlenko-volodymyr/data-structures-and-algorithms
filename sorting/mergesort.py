def merge(left, right):
    result = []
    i = 0
    j = 0
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        elif left[i] > right[j]:
            result.append(right[j])
            j += 1
        else:
            result.append(left[i])
            result.append(right[j])
            i += 1
            j += 1
    
    result.extend(left[i:])
    result.extend(right[j:])

    return result


def merge_sort(arr: list) -> list:
    if len(arr) < 2:
        return arr

    mid = len(arr) // 2
    return merge(merge_sort(arr[:mid]), merge_sort(arr[mid:]))