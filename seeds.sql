INSERT INTO department (name)
VALUES  ('Crafting'),
        ('Exploration'),
        ('Gastronomy'),
        ('Horiculture'),
        ('Scribing');

INSERT INTO role (title, salary, department_id) 
VALUES  ('Knit Lead', 80000, 1),
        ('Crochet Lead', 75000, 1),
        ('Executive Chef', 100000, 3),
        ('Sommelier', 96500, 3),
        ('Arborist', 85000, 4),
        ('Florist', 90000, 4),
        ('Scribe Analyst', 90500, 5),
        ('Scribe Specialist', 91500, 5),
        ('Liason', 110000, 2),
        ('Adventurer', 115000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Gia', 'Campbell', 1, NULL), 
        ('Nikolas', 'Cassadine', 2, 1), 
        ('Victor', 'Newman', 3, 1), 
        ('Drucilla', 'Winters', 4, 3),
        ('Dorothy', 'Zbornak', 5, 4),
        ('Lucas', 'Black', 6, 1),
        ('Blanche', 'Devereaux', 7, 1),
        ('Rose', 'Nylund', 8, 1),
        ('Ichabod', 'Crane', 9, 1),
        ('Abbie', 'Mills', 10, 1);
        
