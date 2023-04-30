INSERT INTO deparment (name)
VALUES  ('Crafting'),
        ('Exploration'),
        ('Gastronomy'),
        ('Horiculture'),
        ('Scribing');

INSERT INTO role (title, salary, department_id) --department_id is to be an integer
VALUES  ('Knit Lead', 80,000, '1'),
        ('Crochet Lead', 75,000, '1'),
        ('Executive Chef', 100,000, '3'),
        ('Sommelier', 96,500, '3'),
        ('Arborist', 85,000, '4'),
        ('Florist', 90,000, '4'),
        ('Scribe Analyst', 90,500, '5'),
        ('Scribe Specialist', 91,500, '5'),
        ('Liason', 110,000, '2'),
        ('Adventurer', 115,000, '2');

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Gia', 'Campbell', '1', NULL), -- no manager
        ('Nikolas', 'Cassadine' '2', '1'), --Gia = manager
        ('Victor', 'Newman', '3', NULL), 
        ('Drucilla', 'Winters', '4', '3'),
        ('Dorothy', 'Zbornak', '5', '6'),
        ('Lucas', 'Black', '6', NULL),
        ('Blanche', 'Devereaux', '7', '8'),
        ('Rose', 'Nylund', '8', NULL),
        ('Ichabod', 'Crane', '9', '10'),
        ('Abbie', 'Mills', '10', NULL);
        
