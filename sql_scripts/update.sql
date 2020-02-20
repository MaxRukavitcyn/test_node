drop table if exists snake_users cascade;
drop table if exists equations cascade;
drop table if exists test_table cascade;
drop index if exists test_table_id_uindex;
drop index if exists equations_id_uindex;
drop index if exists snake_users_id_uindex;

create table snake_users
(
    id     serial not null
        constraint snake_users_pk
            primary key,
    name   text,
    scores integer
);

alter table snake_users
    owner to postgres;

create unique index snake_users_id_uindex
    on snake_users (id);

-- auto-generated definition
create table equations
(
    id       bigserial not null
        constraint equations_pk
            primary key,
    equation text
);

alter table equations
    owner to postgres;

create unique index equations_id_uindex
    on equations (id);

-- auto-generated definition
create table test_table
(
    id         serial not null
        constraint test_table_pk
            primary key,
    first_name text,
    last_name  text
);

alter table test_table
    owner to postgres;

create unique index test_table_id_uindex
    on test_table (id);


