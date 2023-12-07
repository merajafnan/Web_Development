CREATE TABLE student (
    id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT
);

CREATE TABLE contact_detail (
    id INTEGER REFERENCES student(id) UNIQUE,
    tel TEXT,
    address TEXT
)

INSERT INTO student (first_name,last_name) VALUES ('Meraj','Hassan');
INSERT INTEGER contact_detail (id,tel,address) VALUES (1,'7488790606','Bangalore JHBCS Layout');

SELECT * 
FROM student 
JOIN contact_detail
ON student.id = contact_detail.id

CREATE TABLE homework_submission (
    id SERIAL PRIMARY KEY,
    sub TEXT,
    mark INTEGER,
    student_id INTEGER REFERENCES student(id)
);

INSERT INTO homework_submission (sub,mark,student_id) VALUES ('Computer',98,1), ('Maths',92,1), ('English',87,1)

SELECT *
FROM student
JOIN homework_submission
ON student.id = homework_submission.student_id



