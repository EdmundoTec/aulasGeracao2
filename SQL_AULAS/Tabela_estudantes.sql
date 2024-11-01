SELECT nome, email, cpf, registro, data_nasc
FROM estudantes
;

ALTER TABLE estudantes
ADD unidade VARCHAR(50);


SELECT * FROM estudantes
ORDER BY nome;

UPDATE estudantes
SET registro = 'Sul'
WHERE unidade IS NULL;

DELETE FROM estudantes
WHERE data_nasc > '2001-01-01';


