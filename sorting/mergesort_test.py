from sorting.mergesort import merge, merge_sort


def test_merge():
    left = [3, 4, 5]
    right = [5, 8, 12]
    expected = [3, 4, 5, 5, 8, 12]
    given = merge(left, right)
    assert given == expected


def test_mergesort():
    arr = [3, 2, 6, 1, 4, 6, 100, -1]
    given = merge_sort(arr)
    expected = [-1, 1, 2, 3, 4, 6, 6, 100]
    assert given == expected

    arr = []
    given = merge_sort(arr)
    expected = []
    assert given == expected

    arr = [2, 1]
    given = merge_sort(arr)
    expected = [1, 2]
    assert given == expected