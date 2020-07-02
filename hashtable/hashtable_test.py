from hashtable.hashtable import HashTable


def test_hashtable():
    hashtable = HashTable()

    hashtable.set("darkblue", 1)
    hashtable.set("salmon", 2)

    assert hashtable.get("darkblue") == 1
    assert hashtable.get("salmon") == 2
    assert hashtable.get("empty") == None