class HashTable:
    def __init__(self, size=53):
        self.array = [None] * size
        self.size = size
    
    def __hash(self, key):
        total = 0
        WEIRD_PRIME = 31
        key_length = min(len(key), 100)
        for i in range(key_length):
            char = ord(key[i]) - 96
            total = (total * WEIRD_PRIME + char) % self.size
        return total
    
    def set(self, key, value):
        index = self.__hash(key)
        if not self.array[index]:
            self.array[index] = []
        
        self.array[index].append((key, value,))
    
    def get(self, lookup_key):
        index = self.__hash(lookup_key)
        chain = self.array[index]
        if chain is None:
            return chain

        for (key, value) in chain:
            if key == lookup_key:
                return value