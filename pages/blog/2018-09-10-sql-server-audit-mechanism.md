---
path: "/blog/2018-09-10-sql-server-audit-mechanism.html"
date: "2018-09-10T18:17:00.000Z"
title: "Creating a SQL Server audit mechanism (and a simple time machine)"
---
# Creating a SQL Server audit mechanism (and a simple time machine)
## Index
This article is split in three parts:

1. The mechanism
2. [Implementation]()
3. [Time machine]()

## Introduction
In this article, I am goind to explain a simple way on how to create a mechanism for auditing data changes in every table, and also get a cool time machine along the way.

If you need something more robust, please refer to something like [SQL Server Audit](https://docs.microsoft.com/en-us/sql/2014/relational-databases/security/auditing/sql-server-audit-database-engine?view=sql-server-2017), or even [nHibernate implementation](http://nhibernate.info/doc/howto/various/creating-an-audit-log-using-nhibernate-events).

Good to go? So let's start with a simple example, consider this very simple **payroll.employee** table on a **COMPANY** database:

**COMPANY.payroll.employee** table:
| ID    | Name      | Salary|
| ------|:---------:| -----:|
| 1     | John 		| 	$15	|
| 2		| Peter     |   $12 |
| 3 	| Nancy     |   $16 |


Now, imagine I add another row to this table:

| ID    | Name      | Salary|
| ------|:---------:| -----:|
| 4     | Mario		| 	$10	|

if I want to detect every change made in a single table, I could create one trigger to give me this information:

```sql
CREATE TRIGGER [COMPANY].[payroll].[audit_employee]
	ON [COMPANY].[payroll].[employee]
	FOR INSERT, DELETE, UPDATE
AS
BEGIN
	DECLARE @operation nvarchar(20) = 'INSERT'

	IF (EXISTS(SELECT * FROM Inserted) AND EXISTS(SELECT * FROM Deleted))
	BEGIN
		SET @operation = 'UPDATE'
	END
	IF (EXISTS(SELECT * FROM Deleted) AND NOT EXISTS(SELECT * FROM Inserted))
	BEGIN
		SET @operation = 'DELETE'
	END
END
```

We would need a place to store it, so lets create a second database, **COMPANY_HISTORY**, with another table on it (**payroll.employee**):

**COMPANY_HISTORY.payroll.employee** table:
| HistoryID    | HistoryOperation      | HistoryDate| ID    | Name      | Salary|
| ------|:---------:| -----:| ------|:---------:| -----:|
| **1**     | **INSERT** 		| 	**2018-09-10 22:37:00.000**| 1     | John 		| 	$15	|

On this table, there are three new columns at the start, that tells the operation and the time the event ocurred. We will always insert new rows, never update or delete them (except when purging or archiving old data).


<small>last edited: 2018-09-10 18:18</small>