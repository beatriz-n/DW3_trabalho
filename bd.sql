CREATE TABLE salasdeaula (
    id serial PRIMARY KEY,
    descricao character varying(255),
    localizacao character varying(255),
    capacidade integer,
    remoto boolean
);
