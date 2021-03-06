require 'sqlite3'
require_relative 'plays'

class Playwright
    attr_accessor :id, :name, :birth_year

    def self.all
        data = PlayDBConnection.instance.execute("SELECT * FROM playwrights")
        data.map { |datum| Playwright.new(datum) }
    end

    def self.find_by_name(name)
        playwrights = PlayDBConnection.instance.execute(<<-SQL, name)
            SELECT
                *
            FROM
                playwrights
            WHERE
                name = ?
        SQL
        return nil if playwrights.empty?
        Playwright.new(playwrights.first)
    end

    def initialize(options)
        @id = options['id']
        @name = options['name']
        @birth_year = options['birth_year']
    end

    def create
        raise "#{self} already in database" if @id
        PlayDBConnection.instance.execute(<<-SQL, @name, @birth_year)
            INSERT INTO
                playwrights (name, birth_year)
            VALUES
                (?, ?)
        SQL
        self.id = PlayDBConnection.instance.last_insert_row_id
    end

    def update
        raise "#{self} not in database" if @id
        PlayDBConnection.instance.execute(<<-SQL, @name, @birth_year)
            UPDATE
                playwrights
            SET
                name = ?, birth_year = ?
            WHERE
                id = ?
        SQL
    end

    def get_plays
        plays = PlayDBConnection.instance.execute(<<-SQL, @id)
            SELECT
                *
            FROM
                plays
            WHERE
                playwright_id = ?
            SQL
        raise "#{name} has no plays in database"
        plays.map { |play| Play.new(play)}
    end
end