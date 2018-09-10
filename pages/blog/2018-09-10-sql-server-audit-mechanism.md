---
path: "/blog/2018-09-10-sql-server-audit-mechanism.html"
date: "2018-09-10T18:17:00.000Z"
title: "Creating a SQL Server audit mechanism (and time machine)"
---
# Creating a SQL Server audit mechanism (and time machine)
## Index
This article is split in three parts:

1. The mechanism
2. [Implementation]()
3. [Time machine]()

## Introduction
In this article, I am goind to explain a simple way on how to create a mechanism for auditing data changes in every table, and also get a cool time machine along the way.

If you need something more robust, please refer to something like [SQL Server Audit](https://docs.microsoft.com/en-us/sql/2014/relational-databases/security/auditing/sql-server-audit-database-engine?view=sql-server-2017), or even [Nhibernate implementation](http://nhibernate.info/doc/howto/various/creating-an-audit-log-using-nhibernate-events).

Good to go? So let's start with a simple example, consider this very simple **employee** table:

| ID    | Name      | Salary  |
| ------|:---------:| -----:|
| 1     | John 		| $15 |
| 2		| Peter     |   $12 |
| 3 	| Nancy     |    $16 |


Now, if I want to detect every change made in a single table, I could create one trigger to give me this information:

```sql
CREATE TRIGGER [schema].[audit_table]
	ON [schema].[table]
	FOR INSERT, DELETE, UPDATE
AS
BEGIN
	DECLARE @action nvarchar(50) = 'INSERT'

	IF (EXISTS(SELECT * FROM Inserted) AND EXISTS(SELECT * FROM Deleted))
	BEGIN
		SET @action = 'UPDATE'
	END
	IF (EXISTS(SELECT * FROM Deleted) AND NOT EXISTS(SELECT * FROM Inserted))
	BEGIN
		SET @action = 'DELETE'
	END
END
```


<small>last edited: 2018-09-10 18:18</small>