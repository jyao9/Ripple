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
status      | integer   | not null, default 0

##rewards
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
project_id      | integer   | not null
value           | integer   | not null
description     | text      | not null

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
project_id      | integer   | not null
user_id         | integer   | not null
body            | text      | not null
