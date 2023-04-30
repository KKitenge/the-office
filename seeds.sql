INSERT INTO deparment (name)
VALUES  ('Crafting'),
        ('Exploration'),
        ('Gastronomy'),
        ('Horiculture'),
        ('Scribing');

INSERT INTO role (title, salary, department_id)
VALUES  ('Knit Lead', 75,000, 'Crafting'),
        ('Crochet Lead', 80,000, 'Crafting'),
        ('Executive Chef', 100,000, 'Gastronomy'),
        ('Sommelier', 96,500, 'Gastronomy'),
        ('Arborist', 85,000, 'Horiculture'),
        ('Florist', 90,000, 'Horiculture'),
        ('Scribe Analyst', 90,500, 'Scribing'),
        ('Scribe Specialist', 91,500, 'Scribing'),
        ('Liason', 110,000, 'Exploration'),
        ('Adventurer', 115,000, 'Exploration');
        
