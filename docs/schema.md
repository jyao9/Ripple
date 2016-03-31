# Schema Information

## projects
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
category    | string    | not null
blurb       | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
duration    | integer   | not null
goal        | integer   | not null

##rewards
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
project_id      | integer   | not null, foreign key (references projects), indexed
value           | integer   | not null
description     | text      | not null

##backings
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
reward_id       | integer   | not null, foreign key (references rewards), indexed
user_id         | integer   | not null, foreign key (references users), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

##comments
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
project_id      | integer   | not null, foreign key (references project), indexed
user_id         | integer   | not null, foreign key (references user), indexed
body            | text      | not null
