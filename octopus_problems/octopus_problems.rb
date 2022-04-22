arr = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 
 'fiiiissshhhhhh']

# O(n^2)
def sluggish_octopus(arr)
    arr.each_with_index do |el1, i|
        longest = true
        arr.each_with_index do |el2, j|
            next if i == j
            longest = false if el2.length > el1.length
        end
        return el1 if longest
    end
end

# O(n log n)
class Array
    def merge_sort(&prc)
        prc ||= Proc.new { |a,b| a <=> b }
        return self if self.length < 2
        mid = self.length / 2
        left_side = self[0...mid]
        right_side = self[mid..-1]
        left = left_side.merge_sort(&prc)
        right = right_side.merge_sort(&prc)
        Array.merge(left, right, &prc)
    end

    def self.merge(left, right, &prc)
        res = []
        while !left.empty? && !right.empty?
            if prc.call(left[0], right[0]) == -1
                res << left.shift
            else
                res << right.shift
            end
        end
        res + left + right
    end
end

def dominant_octopus(arr)
    prc = Proc.new { |a,b| a.length <=> b.length }
    sorted = arr.merge_sort(&prc)
    sorted[-1]
end

def clever_octopus(arr)
    arr.inject{ |acc, el| acc.length > el.length ? acc : el }
end

p sluggish_octopus(arr)
p dominant_octopus(arr)
p clever_octopus(arr)

tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up" ]

def slow_dance(direction, arr)
    arr.each_with_index do |el, i|
        return i if el == direction
    end
end

p slow_dance("up", tiles_array) # => 0
p slow_dance("right-down", tiles_array) # => 3

hash = { "up" => 0 , "right-up" => 1, "right" => 2, "right-down" => 3, "down" => 4, "left-down" => 5, "left" => 6, "left-up" => 7 }

def fast_dance(direction, hash)
    hash[direction]
end

p fast_dance("up", hash)
#> 0

p fast_dance("right-down", hash)
#> 3