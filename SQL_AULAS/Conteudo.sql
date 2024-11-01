-- SQL CONTEUDO -- 

-- COMANDOS --
-- DQL --
SELECT -- Selecionar
-- DML --
INSERT -- Inserir
UPDATE
DELETE -- Deletar
-- DDL --
CREATE -- Criar
ALTER -- Alterar
DROP -- 
-- DCL --
GRANT
REVOKE
-- DTL --
BEGIN
COMMIT
ROLBAC


-- Filtrado por partes da string
SELECT id, nome, email FROM tabela
WHERE nome LIKE %João% 
-- NOT LIKE faz o contrario


-- Selecionando por meio de lista
WHERE id IN (1, 3, 7, 12, 15)
-- NOT IN faz o contrario


-- Selecionado por meio de intervalo
WHERE id BETWEEN 2 and 10
ou
WHERE data_nasc BETWEEN '2006-01-01'
AND '2008-12-31'