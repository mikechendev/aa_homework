class Map

    def initialize
        @map = []
    end

    def set(k,v)
        @map.push([k,v])
    end

    def get(k)
        @map.each do |arr|
            return arr[1] if arr[0] == k
        end
    end

    def delete(k)
        @map.each do |arr|
            @map.delete(arr) if arr[0] == k
        end
    end

    def show
        @map
    end

end