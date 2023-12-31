---
title: MySQL 数据定义功能
order: 5
icon: /mysql-item.svg
category:
  - BOOK
  - MD
---

> MySQL 中主要的数据库对象包括数据库、基本表、视图、索引、触发器和存储过程等
>
> - 本处只介绍数据库、基本表和视图的创建及维护
> - 关于视图、触发器等对象的创建及使用涉及到 SQL 的数据操纵功能，在 [MySQL 视图和触发器的使用](./mysql07.md) 中有相关介绍。

::: tip 关于格式的说明:

1. 命令中 中括号 `[]` 的内容为可选项，其余是必选项
2. 命令中 大括号 `{}`  或用 分隔符` |`中的内容为必选项，即必选其中的一项
3. `IF NOT EXISTS` 为可选项，如果出现新建的数据库名已经存在的情况，带上这个选项则不执行任何操作，如果没有带这个选项系统会报错
4. `DEFAULT CHARACTER SET` 和 `DEFAULT COLLATE` 为可选项，作用是指定默认的字符集和校对规则

:::

## 一、数据库的定义及维护

### 创建数据库

创建数据库使用的命令是 `CREATE DATABASE` ，语法格式如下：

```sql
CREATE {DATABASE|SCHEMA} [IF NOT EXISTS] <数据库名> [DEFAULT CHARACTER SET <字符集>] [DEFAULT COLLATE <校对规则>]
```

::: info 例 5-1

创建一个名为 **学生课程** 的数据库，字符集是 `gb2312` ，校对规则是 `gb2312_chinese_ci` 。

```sql
CREATE DATABASE IF NOT EXISTS `学生课程` DEFAULT CHARACTER SET `gb2312` DEFAULT COLLATE `gb2312_chinese_ci`
```

:::

<img src="https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231204225613112.png" alt="image-20231204225613112" style="zoom:67%;" />

此时 **学生课程** 数据库已经成功创建，这时如果执行如下所示的 **SQL** 语句，由于语句中没有带 ` IF NOT EXISTS `选项，系统会报错

```sql
CREATE DATABASE `学生课程` DEFAULT CHARACTER SET `gb2312` DEFAULT COLLATE `gb2312_chinese_ci`
```

<img src="https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231204225707592.png" alt="image-20231204225707592" style="zoom:67%;" />

### 修改数据库

修改数据库使用的命令是 `ALTER DATABASE` ，语法格式如下：

```sql
ALTER {DATABASE|SCHEMA} <数据库名>[DEFAULT CHARACTER SET <字符集>][DEFAULT COLLATE <校对规则>]
```

::: info 例 5-2

将 `[例 5-1 ]`中创建的 **学生课程** 数据库，字符集修改为 `utf-8` ，校对规则是 `utf8_general_ci` 。

```sql
ALTER DATABASE `学生课程` DEFAULT CHARACTER SET `utf8mb4` DEFAULT COLLATE `utf8mb4_general_ci`
```

:::

<img src="https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231204230201498.png" alt="image-20231204230201498" style="zoom:67%;" />

### 删除数据库

删除数据库使用的命令是 `DROP DATABASE` ，语法格式如下：

```sql
DROP {DATABASE|SCHEMA} <数据库名>
```

::: info 例 5-3

将 `[例 5-1 ]`中创建的 **学生课程** 数据库删除

```sql
DROP DATABASE `学生课程`
```

:::

<img src="https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231204230530621.png" alt="image-20231204230530621" style="zoom:67%;" />

::: danger

数据库的删除操作是不可逆的，数据库中全部数据都会丢失，原来分配的空间也会被收回

:::

## 二、基本表的定义及维护

MySQ L 中基本表是最重要的对象，基本表的定义及维护功能可以使用基本表的 创建、修改和删除 3 种语句实现。

### 创建基本表

创建基本表使用 `CREATE TABLE` 语句，该语句的基本格式如下：

```sql
CREATE TABLE [<库名>] <表名> (
	<列名> <数据类型> [<列级完整性约束条件>]
    [, <列名> <数据类型> [<列级完整性约束条件>]] [, ···n]
    [, <表级完整性约束条件>] [, ···n]);
```

### - 列级完整性约束条件

列级完整性约束是针对字段值设置的限制条件或说明，主要有以下几种

- `not null` 和 `null`
  - `not null` ：非空约束(不允许字段值为空)
  - `null` ：可空约束 (允许字段值为空) **不清楚、不确定或无意义** 的字段可以使用 **null 约束**，允许不输人该字段的值
- `unique `：唯一性约束，要求该字段的值不能有重复

- `default` ：缺省值约束，将字段中使用频率最高的字段值设置为该列的缺省值，这样可以减少数据输人的工作量

### - 表级完整性约束条件

- `unique`：唯一性约束约束要求某些字段的组合值不能有重复时。可以在这些字段上定义 `unique` 约束

-  `primary key`： 主键约束，实现关系的实体完整性。
  - 若主键中只包含一个字段，则 **primary key 约束** 可以放在字段类型定义之后
  - 若主键包含两个以上的字段，则需要按语法单独列出

```sql
[ constraint `约束名`] primary key (<字段 1 ，字段 2 >[，···])
```

如果需要自己定义约束的名称，则使用 `constraint 约束名` 选项，否则可省略

- `foreign key`： 外键约束，实现关系的参照完整性。
  - 若外键中只包含一个字段，则 **foreign key 约束** 可以放在字段类型定义之后
  - 若主键包含两个以上的字段，则需要按语法单独列出


> 外键中只包含一个字段:
>
> ```sql
> `字段名` `数据类型` references 对应主键所在表 (对应主键字段名)
> ```

> 外键中只包含两个以上字段:
>
> ```sql
> [ constraint `约束名`] foreign key （<外键字段名>） references <对应主键所在表> (<对应主键字段名>)
> ```

### 修改基本表

### - 查看表结构

表创建好后可以使用命令 `DESCIBE ` 命令查看表的结构，语法格式是： `DESCRIBE/EXPLAIN 表名`，用该命令查看 student 数据库中学生、课程和选课表的结构，命令执行结果



命令的输出结果包含 field 、 type 、 null 、 key 、default 和 extra 五项，具体每项的含义如下:

- Field ：字段名；
- Type ：字段类型；
- Null ：表示该列是否可以取 null 值；
- key ：表示该列是否已编制索引
  - P RI 表示该列是主键的一部分，比如图中三个表的主键字段对应的 key 值就是 PRI
  - UNI 表示该列是一个唯一索引的第一列（前导列），且不能取 NULL 值，比如课程表的课程号字段上创建了唯一索引，因此该字段对应的 KEY 值是 UNI
  - MUL 表示该列是一个非唯一索引的第一列或者是一个唯一索引的组成部分，其值可以重复且可以取 NULL 值，比如学生表的所在班级字段是外键，该字段对应的 KEY 值就是 MUL
  - NULL 表示该列没有索引，或者是一个非唯一的复合索引的非前导列，其值可以重复；
- default 和 extra ：
  - default 表示该列的默认值；
  - extra 表示可以获取的与给定列有关的附加信息，例如

### - 修改表结构

修改表的结构使用的命令是 `ALTER TABLE` ，使用该命令可以对表结构进行以下操作

- 修改表名
- 修改字段名或字段类型
- 添加或删除字段、添加或删除约束等。

注意，该命令只影响表的结构，不影响表中的数据

### - 修改表名

```sql
ALTER TABLE <原表名> RENAME [TO] <新表名>
```



### - 修改字段名

```sql
ALTER TABLE <表名> CHANGE <原字段名> <新字段名> <新数据类型>
```

如果只是修改字段名，字段类型不变，也不能省略“新数据类型"，这时将新数据类型设置为和原来一样即可



### - 修改字段的数据类型

```sql
ALTER TABLE <表名> MODIFY <字段名><数据类型>
```



### - 添加字段

```sql
ALTER TABLE <表名> ADD <字段名><数据类型>
```



### - 删除字段

```sql
ALTER TABLE <表名> DROP <字段名>
```



### 删除基本表

语法格式： DROP TABLE <表名>

::: info 例 5-12

将学生表中的选课表删除，然后将选课表删除

```sql
 DROP TABLE `选课`
 DROP TABLE `学生`
```

本例中，因为学生表中 `所在班级` 字段是外键，引用了选课表中的 `班级名称` 字段，学生表是子表而选课表是父表，因此必须先删除子表再删除父表。

:::

## 三、索引的定义和作用

数据库查询是数据库的最主要功能之一，我们都希望查询数据的速度尽可能的快，因此数据库系统的设计者会从查询算法的角度进行优化。最基本的查询算法有：

- 顺序查找（ LINEARSEARCH)
- 二分查找（ BINARY SEARCH ）
- 二叉树查找（ BINARY TREE SEARCH ）

但是每种查找算法都只能应用于特定的数据结构之上，例如：

- 二分查找要求被检索数据有序
- 二叉树查找只能应用于二叉查找树上

数据本身的组织结构不可能完全满足各种数据结构（例如，理论上不可能同时将两列都按顺序进行组织）。因此，在数据之外，数据库系统还维护着满足特定查找算法的数据结构一索引，这种数据结构以某种方式引用（指向）数据以实现高级查找算法。

MYSQL 官方对索引的定义为：索引 (INDEX) 是帮助 MYSQL 高效获取数据的数据结构，通俗地说，索引就是基本表的目录，其作用相当于一本书的目录，可以根据索引项对应的元组地址，快速找到某条特定记录。一个基本表可以根据需要建立多个索引，以提供多种存取路径，加快数据查询速度。



### 索引的作用及分类

### 索引的作用

索引的目的是为了优化数据库的查询速度，使用索引来检索数据不需要遍历整个数据库，大大提高了系统的性能，索引的作用主要有以下两种：

- 索引能明显加快查询速度对于行和列比较多的基本表，如果没有索引，查找数据必须从第一条记录开始，逐条记录进行字段值的比较操作。而且由于数据文件较大，需要将文件分块后逐个读到内存，大大增加了磁盘的 1/0 次数，降低了查询效率。索引文件很小，可以一次读人内存，而且索引文件中是按索引项有序排列的，可以很快找到索引项值和元组地址对于数据量很大的基本表，在查询条件字段、排序字段或分组字段上建立索引，能大大加快查询的速度
- 索引能明显加快表之间的连接速度表之间的连接操作，本质上是根据连接字段的值在表中进行查找比如学生和选课两个关系，按学号字段的值是否相等进行等值连接，假设学生表中第一位学生的学号为“ 0 "，则按“学生．学号=选课．学号”的连接条件需要在选课表中查询学号为“佩 0 ”的记录，若选课表中存在学号字段上的索引则能加快查询速度，从而提高连接操作的速度。因此对于数据量很大的基本表，有必要对连接字段建立索引。

### 索引的分类

- 普通索引最基本的索引类型，对字段值是否唯一或是否非空没有限制，比如要根据性别查找学生信息，可在学生表中性别字段上建立普通索引。
- 唯一索引（ UNIQUE 索引）不允许重复的索引值，要求建立索引的字段不允许有重复值，比如要根据身份证号查找学生信息，可在学生表中身份证号字段上建立唯一索引。另外，当表中某个字段建立了唯一性约束时， MySQL 会自动创建一个唯一性索引，如果此时表中已有数据， MySQL 会检查表中已有数据在该字段上是否有重复值，若有则索引创建失败。
- 主键索引（ PRI MARY KEY 索引）在创建主键约束时，系统自动创建了一个唯一性的聚簇索引，聚簇索引决定表中数据的物理顺序，因此一个表只能有一个聚簇索引，而且在 MySQL 中不允许用户自己建聚簇索引，只能通过创建主键的方式间接地为表建立聚簇索引。
- 复合索引当查询条件涉及到多个字段，或需要按多个字段的值进行排序或分组操作时，可以在表的多个字段上建立一个索引，这个索引指向创建时对应的多个字段，可以通过这几个字段进行查询，但是，只有查词条件中使用了这些字段中的第一个字段时，索引才会被使用

复合索引如果也是唯一索引，则要求索引中包含的所有字段的组合值在表中是唯一的。

### 索引的创建

创建索引的方法主要有两种：

- 建表的同时创建索引
- 在已经建好的表上创建索引

### - 建表的同时创建索引

在创建基本表的语句基础上，在所有字段定义完后，再添加定义索引的语句。

- 单列普通/唯一索引

```sql
[UNIQUE] INDEX [`索引名`] (`属性名`[(长度)] [ASC|DESC])
```

说明：**`长度` 参数指定索引长度，`ASC` 指按索引项升序排列， `DESC`指按索引项降序排列**

如果是唯一索引，在 `INDEX`前面加上 `UNIQUE` 选项；

功能：**在该属性上建立一个指定长度的普通／唯一索引。**

- 多列普通/唯一索引

```sql
[UNIQUE] INDEX [`索引名`]
(`属性名 1` [(长度)][ASC|DESC]),
(`属性名 2` [(长度)][ASC|DESC]),
···
(`属性名 n` [(长度)][ASC|DESC]);
```

功能：**在 `属性 1 到属性  n ` 这  n 列上建立一个普通/唯一复合索引。**

### - 在已经建好的表上创建索引

```sql
CREATE INDEX `索引名` ON `表名`(属性名 [(长度)][ASC|DESC ])
```



### 索引的查看

查询操作有没有使用索引或者使用的哪个索引

1. 可以在查询语句前面加上 `EXPLAIN ` 命令
2. 当一个表中有多个索引时，可以在一个查询语句的 `WHERE` 子句前加上 `FORCE INDEX (索引名)` 选项，以指定哪个索引在本次查询操作中起作用

下面几个例题中的查询操作是用 select 语句实现的，关于 select 语句的详细内容将在第 6章中讲解。

### 为表创建索引的原则

建立索引是加快数据查询的有效手段，但过多的索引也会带来一些问题。

- 首先，索引是完全独立于基础数据之外的一部分数据，因此在对表进行 INSERT 、 UPDATE 和 DELETE 操作时， MySQL 不仅要更新表中的数据，还必须要更新表中所有索引的数据
- 其次，当表中数据量增加时，索引文件也会变大而占用更多的存储空间。

这都将大大增加系统的开销，降低系统的效率。因此我们在建立索引时应遵循以下原则:

1. 经常所为查询条件的字段、经常作为排序或分组的字段以及表之间连接的关联字段，可以根据具体情况建立合适的索引
2. 更新非常频繁的字段不适合建索引，这里的“频繁"的衡量标准是更新操作的频率相对于查询操作频率的一个比值，比值越大表示更新操作越频繁
3. 表中记录较少，则不必建索引，这里的“较少”也是相对的，一般一两千条记录甚至几百条记录的表，没必要建索引，直接遍历全表即可
4. 选择性较低的字段不适合建索引，这里的“选择性"是指索引列中不同值的数目与表中记录的比值，一个索引的选择性越接近于 1 ，该索引的效率就越高假如学生表中有 1000条记录，其中籍贯列的值有 100 个不同的值，而性别列只有 2 个不同的值，如果在籍贯和性别字段上都建立索引，那么这两个索引的选择性分别是 0.1 和 0.2 ，因此在籍贯列上建索引的必要性远大于性别列。
5. 应定期对数据库中各表的索引进行维护，当表中数据大量更新或者数据的使用方式发生改变后，原有的一些索引可能不再需要，这时应定期找出这些索引并删除它们以减少系统开销
