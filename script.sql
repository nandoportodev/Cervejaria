CREATE TABLE cervejas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    abv VARCHAR(10) NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    nacionalidade VARCHAR(50) NOT NULL
);
