drop table if exists oauth_access_token;
create table oauth_access_token (
  token_id VARCHAR(256),
  token LONGVARBINARY,
  authentication_id VARCHAR(256) PRIMARY KEY,
  user_name VARCHAR(256),
  client_id VARCHAR(256),
  authentication LONGVARBINARY,
  refresh_token VARCHAR(256)
);

drop table if exists oauth_refresh_token;
create table oauth_refresh_token (
  token_id VARCHAR(256),
  token LONGVARBINARY,
  authentication LONGVARBINARY
);


insert into person(id,name,surname)values(1,'Jon','Snow');
insert into person(id,name,surname)values(2,'Daenerys','Targeryan');
insert into person(id,name,surname)values(3,'Arya','Stark');
