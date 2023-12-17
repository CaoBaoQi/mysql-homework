import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,a as e}from"./app-HNg_g3PK.js";const l={},i=e(`<p><strong>数据库是一种按照特定数据模型组织的可共享的数据集合</strong>，它已经成为现代计算环境中不可或缺的一部分。随着电子商务平台的兴起，越来越多的事务工作需要处理大量复杂的数据，而数据库技术的应用可以大大简化这些工作的业务逻辑。</p><img src="https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/39321124465d423d8a6cfcd4d4903131_2.png" style="zoom:67%;"><p>本章节将重点介绍 <strong>数据库系统的软硬件组成以及三级模式结构</strong>，并贯穿始终地讲解一些基本概念，例如 <strong>数据、数据库、数据库管理系统和数据库应用系统</strong> 等。</p><h2 id="一、数据库系统基本概念" tabindex="-1"><a class="header-anchor" href="#一、数据库系统基本概念" aria-hidden="true">#</a> 一、数据库系统基本概念</h2><h3 id="_1-1-信息与数据" tabindex="-1"><a class="header-anchor" href="#_1-1-信息与数据" aria-hidden="true">#</a> 1.1 信息与数据</h3><blockquote><p><strong>数据是信息的符号表示，而信息则是数据的内涵。</strong></p><p><strong>数据就像是语言的字母，只有组合成有意义的语言才能传达信息。</strong></p></blockquote><ul><li>例如，在学生选课数据库中，“学生”、“课程”和“选课”是数据，它们的组合构成了这个数据库的数据结构，也就是这个数据库的“型”。而每个学生的个人信息、每门课程的相关信息以及学生选课的成绩都是这个数据库的“值”，这些具体的数值才是这个数据库真正的“信息”。</li><li>又如一个数据 960 万 ,它可以描述为祖国的国土面积为 960 万平方公里，也可以描述为公司的营业额为 960 万 元。</li></ul><p>因此，数据只有结合其语义才能表达出完整的信息即数据只是信息的一种表现形式，只有将数据转化为有用的信息才能更好地理解和利用它。</p><h3 id="_1-2-数据库中数据的特点" tabindex="-1"><a class="header-anchor" href="#_1-2-数据库中数据的特点" aria-hidden="true">#</a> 1.2 数据库中数据的特点</h3><blockquote><ul><li>首先数据库中的数据需要按照某种数据模型进行组织，形成数据结构或称为“型”。</li><li>其次，数据库中的数据具有整体性、共享性和较高的独立性，能够满足多个用户和应用程序的需求。</li><li>此外，数据库中的数据需要具备一定的完整性，不能出现不完整的情况。</li><li>最后，数据库中的数据与应用程序在物理和逻辑上实现分离，数据结构的改变不会影响应用程序的运行。</li></ul></blockquote><ol><li><p><strong>永久存储</strong>：</p><ul><li>数据库的数据是长期存储在计算机内存中的，通常在硬盘上以文件形式存在。</li><li>数据一旦被存入数据库，就可以长期保持不变，直到被明确地删除或更新。</li></ul></li><li><p><strong>有组织</strong>：</p><ul><li>数据库中的数据按照一定的数据模型组织，如关系模型、对象模型、层次模型等。</li><li>数据结构化，使得数据能够以最小的冗余度存储，并容易进行查询和分析。</li></ul></li><li><p><strong>可共享</strong>：</p><ul><li>数据库支持多用户同时访问，允许多个应用程序共享同一数据源。</li><li>数据库管理系统（DBMS）负责管理和协调用户间的并发访问，确保数据的一致性和完整性。</li></ul></li><li><p><strong>数据独立性</strong>：</p><ul><li>物理独立性：数据库的设计和应用程序的开发可以相对独立，这样更改底层的物理存储结构不会影响应用程序。</li><li>逻辑独立性：当数据库的逻辑结构（即表和字段的定义）发生变化时，应用程序通常不需要做出相应的调整。</li></ul></li><li><p><strong>安全性和保护</strong>：</p><ul><li>数据库系统提供了多种安全机制来保护数据，如认证、授权、审计等。</li><li>数据库可以定期备份，以防止意外数据丢失，并可通过日志恢复数据。</li></ul></li><li><p><strong>一致性和完整性</strong>：</p><ul><li>数据库系统通过约束（如主键约束、外键约束、唯一性约束等）来确保数据的一致性和完整性。</li><li>系统还可以通过事务处理来保证数据的原子性、一致性、隔离性和持久性（ACID）。</li></ul></li><li><p><strong>可扩展性</strong>：</p><ul><li>数据库设计时考虑到了未来的扩展需求，可以根据需要添加新的表或字段。</li><li>一些数据库系统支持水平扩展和垂直扩展，以便随着数据量的增长进行性能优化。</li></ul></li><li><p><strong>查询效率高</strong>：</p><ul><li>通过索引和其他优化技术，数据库系统可以快速地查找和检索数据。</li></ul></li><li><p><strong>数据冗余低</strong>：</p><ul><li>通过合理设计数据库的架构，可以减少数据冗余，从而节省存储空间并减少数据不一致的风险。</li></ul></li><li><p><strong>易用性</strong>：</p><ul><li>数据库管理系统提供了图形化的界面和命令行工具，方便管理员和用户进行数据管理、查询和分析。</li></ul></li></ol><h3 id="_1-3-数据库管理系统功能" tabindex="-1"><a class="header-anchor" href="#_1-3-数据库管理系统功能" aria-hidden="true">#</a> 1.3 数据库管理系统功能</h3><p>DBMS 是一种计算机 <strong>系统软件</strong>，它能够帮助用户高效地组织、管理和获取数据。</p><p>它的功能包括</p><ul><li><p><strong>数据定义</strong> 提供了数据定义语言（DDL）</p><ul><li>用户可以用 DDL 来创建数据库中的各种对象</li></ul></li><li><p><strong>数据操纵</strong> 提供了数据操纵语言（DML）</p><ul><li>用户可以用 DML 来进行数据的基本操作</li></ul></li><li><p><strong>数据控制</strong> 提供了数据操纵语言（DCL）</p><ul><li>用户可以用 DCL 保证数据的安全性和完整性，包括安全性控制、完整性控制、并发控制和数据恢复等方面。</li></ul></li></ul><p>总之，DBMS 是现代信息技术中非常重要的一部分，它可以帮助我们更好地管理和利用数据。</p><h3 id="_1-4-数据库管理系统和数据库应用系统" tabindex="-1"><a class="header-anchor" href="#_1-4-数据库管理系统和数据库应用系统" aria-hidden="true">#</a> 1.4 数据库管理系统和数据库应用系统</h3><ul><li>DBMS 是一种计算机 <strong>系统软件</strong>，主要用于科学地组织和维护数据，让用户能够高效地获取和使用数据，<strong>安装在服务端</strong></li><li>DBAS 是一种计算机 <strong>应用软件</strong>，是对某一具体应用环境提供事务管理的计算机应用软件，它需要 DBMS 为其提供开发平台、设计方法和后台的数据支持，<strong>安装在客户端</strong>。</li></ul><h2 id="二、数据库管理技术及发展" tabindex="-1"><a class="header-anchor" href="#二、数据库管理技术及发展" aria-hidden="true">#</a> 二、数据库管理技术及发展</h2><h3 id="_2-1-手工管理" tabindex="-1"><a class="header-anchor" href="#_2-1-手工管理" aria-hidden="true">#</a> 2.1 手工管理</h3><p>数据和程序是不可分割的整体，数据不能大量保存，缺乏共享性和独立性。</p><p>随着计算机软硬件条件的提升，出现了磁盘、磁鼓等大容量、高速率的存储设备，并出现了操作系统和专门的数据管理软件——文件系统。文件系统将数据从程序中分离出来并组织成相互独立的数据文件，实现了对文件的查询、添加、删除、修改等各种操作。</p><h3 id="_2-2-文件管理" tabindex="-1"><a class="header-anchor" href="#_2-2-文件管理" aria-hidden="true">#</a> 2.2 文件管理</h3><p>在文件管理阶段，数据的存储从程序中抽离出来，实现了数据和程序的物理独立性。</p><p>程序员可以使用文件系统提供的功能将数据保存在文件中，并通过定义存取方法告诉文件系统如何访问这些数据。这样，即使程序的物理结构发生改变，也不会影响程序的运行。</p><p>然而，在文件管理阶段，数据的逻辑独立性仍然较差，因为应用程序对数据的操作依赖于存储数据的文件结构。如果数据的逻辑结构发生变化，程序员不仅需要修改文件的结构，还需要修改程序中涉及到这部分数据的代码，才能保证程序的正常运行。因此，文件管理阶段的数据逻辑独立性仍然有待提高。</p><h3 id="_2-3-数据库管理" tabindex="-1"><a class="header-anchor" href="#_2-3-数据库管理" aria-hidden="true">#</a> 2.3 数据库管理</h3><p>在上述的文件管理阶段中，文件之间缺乏联系，导致难以满足用户对数据的需求，也不利于复杂的查询或业务逻辑的支持。例如，在高校教师管理中，涉及到多个文件，但它们之间并没有直接的联系，需要在应用程序中手动建立联系。这样会导致一些繁琐的操作，比如在统计不同职称教师的授课情况时，需要将多个文件中的数据进行比较、组合才能得到所需信息。这些问题限制了文件系统的应用范围和发展潜力而且早期的文件系统存在着数据冗余问题，不同程序的数据必须建立各自的文件，无法共享数据。随着计算机硬件和软件的进步，数据规模不断扩大，文件系统已无法满足数据管理的需求，于是数据库技术应运而生。数据库系统能够对数据及其联系进行统一管理，并实现数据资源的共享。相比文件系统阶段，数据库系统阶段的数据管理更加高效和灵活。</p><p>数据库系统的两个特点：数据结构化和数据独立性高。</p><ul><li>首先，数据库系统从全局出发，按照一定的数据模型来组织数据，实现了整体数据的结构化。这样可以满足多用户多应用的不同数据需求。</li><li>其次，数据库系统管理数据时，数据和程序相互独立，数据的存取和数据的定义描述均由 DBMS 统一管理，减轻了程序员的工作量，提高了数据和程序间的独立性。</li></ul><p>数据的独立性包括</p><ul><li>物理独立性 指当数据的物理结构发生变化时应用程序不需要修改也可以正常工作</li><li>逻辑独立性 指当数据的全局逻辑结构发生变化时应用程序不需要修改也可以正常工作</li></ul><p>为了保证数据的独立性，数据库系统提供了三级数据抽象及两级映像技术。</p><ul><li>第一级映像是 模式/内模式 映像，它提供数据的全局逻辑结构到物理结构的转换技术；</li><li>第二级映像是 外模式/模式 映像，提供数据的局部逻辑结构到全局逻辑结构的转换技术。</li></ul><p>总之，数据库系统的数据结构化和数据独立性高的特点使得它可以更好地管理和利用数据资源，提高数据的可靠性和安全性。</p><h2 id="三、数据库系统的三级模式结构" tabindex="-1"><a class="header-anchor" href="#三、数据库系统的三级模式结构" aria-hidden="true">#</a> 三、数据库系统的三级模式结构</h2><p>数据库中的三级模式结构和两级映像技术是为了实现数据的独立性以及数据的安全性而提出的。这种结构确保了数据的逻辑结构独立于应用程序和硬件环境，同时又能够支持多用户共享数据。主要包括外模式、模式和内模式三个层次，以及对应的映像技术。</p><h3 id="_3-1-数据库三级模式" tabindex="-1"><a class="header-anchor" href="#_3-1-数据库三级模式" aria-hidden="true">#</a> 3.1 数据库三级模式</h3><ol><li><p><strong>外部模式（External Schema / User View）</strong></p><ul><li>外部模式，也称为用户视图，是最接近用户的一层，反映了用户看待和使用数据的方式。</li><li>不同用户可以有不同的外模式，同一个数据库可以有多个外模式。</li></ul></li><li><p><strong>概念模式（Conceptual Schema / Logical View）</strong></p><ul><li>概念模式是全局逻辑结构的描述，它是所有用户都能看到的数据视图的综合。</li><li>在概念模式下，数据被视为无冗余的、独立于应用程序和硬件的数据结构。</li><li>概念模式通常由数据库设计者创建，它描述了所有实体、属性、联系以及完整性约束。</li></ul></li><li><p><strong>内部模式（Internal Schema / Physical View）</strong></p><ul><li>内部模式是最低层，描述了数据在数据库内部的存储方式，包括文件结构、索引结构、数据压缩算法等。</li><li>内部模式涉及数据的实际物理表示，它受到硬件设备的影响，决定了数据在磁盘上的布局。</li></ul></li></ol><h3 id="_3-2-两级映射技术及数据独立性" tabindex="-1"><a class="header-anchor" href="#_3-2-两级映射技术及数据独立性" aria-hidden="true">#</a> 3.2 两级映射技术及数据独立性</h3><ul><li><p><strong>模式/外模式映像（Logical Mapping）</strong></p><ul><li>这一级映像是指从概念模式到各个外部模式的映射。</li><li>映射定义了不同用户视图与全局逻辑结构的关系，使得即使改变了全局数据结构，只要映射关系不变，用户的视图就不会受到影响。</li></ul></li><li><p><strong>模式/内模式映像（Physical Mapping）</strong></p><ul><li>这一级映像是指从概念模式到内部模式的映射。</li><li>映射定义了全局逻辑结构与物理存储结构的关系，使得改变数据的物理存储方式不影响全局逻辑结构。</li></ul></li></ul><p>通过这两级映像技术，数据库可以实现数据的逻辑独立性和物理独立性：</p><ul><li><strong>逻辑独立性</strong>：当概念模式发生变化时，只需要修改模式/外模式映像，而不必修改所有的应用程序，因为应用程序是基于各自的外模式工作的。</li><li><strong>物理独立性</strong>：当内部模式发生变化时，例如改变存储结构、存储策略时，只需要修改模式/内模式映像，而不必修改概念模式和应用程序。</li></ul><p>这种结构使得数据库设计者可以专注于全局的数据结构设计，而无需考虑具体的应用程序和硬件细节，同时也为用户提供了个性化的数据视图，提升了系统的灵活性和适应性。</p><h3 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h3><p>我们以一个学生管理系统的例子来具体说明数据库中的三级模式结构和两级映像技术。</p><p>假设我们正在设计一个学生管理系统，该系统需要处理学生的个人信息、选课信息和成绩信息。下面是这个系统中三级模式结构的例子：</p><ul><li>外模式（External Schema）</li></ul><blockquote><p>学生视图</p></blockquote><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">VIEW</span> Student_View <span class="token keyword">AS</span>
<span class="token keyword">SELECT</span> StudentID<span class="token punctuation">,</span> Name<span class="token punctuation">,</span> Gender<span class="token punctuation">,</span> Birthdate
<span class="token keyword">FROM</span> Student<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>教师视图</p></blockquote><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">VIEW</span> Teacher_View <span class="token keyword">AS</span>
<span class="token keyword">SELECT</span> TeacherID<span class="token punctuation">,</span> Name<span class="token punctuation">,</span> Department
<span class="token keyword">FROM</span> Teacher<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>概念模式（Conceptual Schema）</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> Student <span class="token punctuation">(</span>
    StudentID <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">,</span>
    Name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    Gender <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    Birthdate <span class="token keyword">DATE</span><span class="token punctuation">,</span>
    MajorID <span class="token keyword">INT</span> <span class="token keyword">REFERENCES</span> Major<span class="token punctuation">(</span>MajorID<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> Teacher <span class="token punctuation">(</span>
    TeacherID <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">,</span>
    Name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    Department <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> Course <span class="token punctuation">(</span>
    CourseID <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">,</span>
    Name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    TeacherID <span class="token keyword">INT</span> <span class="token keyword">REFERENCES</span> Teacher<span class="token punctuation">(</span>TeacherID<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> Enrollment <span class="token punctuation">(</span>
    StudentID <span class="token keyword">INT</span> <span class="token keyword">REFERENCES</span> Student<span class="token punctuation">(</span>StudentID<span class="token punctuation">)</span><span class="token punctuation">,</span>
    CourseID <span class="token keyword">INT</span> <span class="token keyword">REFERENCES</span> Course<span class="token punctuation">(</span>CourseID<span class="token punctuation">)</span><span class="token punctuation">,</span>
    Grade <span class="token keyword">DECIMAL</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>StudentID<span class="token punctuation">,</span> CourseID<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>内模式（Internal Schema）</li></ul><p>由于内模式涉及具体的物理存储方式和细节，这里不做详细展示。但它可能包括数据文件的格式、索引结构、页面大小等因素。</p><p>接下来，我们来看两级映像技术是如何在这个例子中发挥作用的。</p><hr><ul><li>模式/外模式映像</li></ul><blockquote><p>学生视图到概念模式映射</p></blockquote><p>学生视图只展示了学生表的部分信息。如果我们在概念模式中增加了新的字段，例如 <code>Email</code>，那么只需在学生视图中增加对应的映射即可，无需修改所有使用学生视图的应用程序。</p><blockquote><p>教师视图到概念模式映射</p></blockquote><p>类似地，教师视图只展示了教师表的部分信息。如果我们在概念模式中增加了新的字段，例如 <code>Phone</code>，那么只需在教师视图中增加对应的映射即可，无需修改所有使用教师视图的应用程序。</p><ul><li>模式/内模式映像</li></ul><p>假设我们最初使用的是 B 树索引，在后期发现更适合使用哈希索引。在这种情况下，我们可以修改内模式来使用哈希索引，但无需修改概念模式和所有的外模式。这是因为模式/内模式映像会负责维护这种转换。</p><p>通过这个例子，我们可以看到三级模式结构和两级映像技术如何确保数据的逻辑独立性和物理独立性，从而使系统更加灵活和易于维护。</p><h2 id="四、数据库系统的组成" tabindex="-1"><a class="header-anchor" href="#四、数据库系统的组成" aria-hidden="true">#</a> 四、数据库系统的组成</h2><p>数据库系统的组成包括</p><ul><li><p>数据库（Data Base, DB）</p></li><li><p>硬件（Hardware）</p></li><li><p>软件（Software）</p></li><li><p>人员（People）</p></li></ul><p>这些组成部分共同协作，使得数据库系统能够有效地存储、检索、管理和保护数据，从而支持企业的运营和服务交付。</p><h3 id="_4-1-数据库-data-base-db" tabindex="-1"><a class="header-anchor" href="#_4-1-数据库-data-base-db" aria-hidden="true">#</a> 4.1 数据库（Data Base, DB）</h3><p>数据库是一个持久化的、结构化的数据集合，被多个应用程序或用户共享。它是用来存储和组织数据的中心位置，并且数据以一种易于管理和检索的方式进行结构化。</p><h3 id="_4-1-硬件-hardware" tabindex="-1"><a class="header-anchor" href="#_4-1-硬件-hardware" aria-hidden="true">#</a> 4.1 硬件（Hardware）</h3><p>硬件是提供计算能力以及储存空间的基础物理设施。这包括中央处理器（CPU）、内存（RAM）、硬盘驱动器（HDD 或 SSD）、网络设备以及其他外部设备，比如打印机、扫描仪等。</p><h3 id="_4-2-软件-software" tabindex="-1"><a class="header-anchor" href="#_4-2-软件-software" aria-hidden="true">#</a> 4.2 软件（Software）</h3><p>软件包括运行数据库所必需的操作系统（Operating System, OS），例如 Windows、Linux 或 macOS，还有用于创建、维护和访问数据库的应用程序。具体来说，关键的软件组件有：</p><ul><li><p><strong>数据库管理系统（Database Management System, DBMS）</strong>： DBMS 是一种特殊的软件，它允许用户创建、更新、查询和管理数据库中的数据。一些常见的 DBMS 包括 Oracle、MySQL、Microsoft SQL Server 和 PostgreSQL。</p></li><li><p><strong>数据库应用系统（Database Application Systems, DBAS）</strong>： 这些是定制的或者商业化的应用程序，它们使用 DBMS 来处理特定业务需求的数据。</p></li></ul><h3 id="_4-3-人员-people" tabindex="-1"><a class="header-anchor" href="#_4-3-人员-people" aria-hidden="true">#</a> 4.3 人员（People）</h3><p>不同的角色参与数据库系统的管理和使用。这些角色可能包括：</p><ul><li><p><strong>系统分析员和数据库设计师</strong>：他们负责理解业务需求并设计符合要求的数据库结构。</p></li><li><p><strong>数据库管理员（Database Administrator, DBA）</strong>： DBA 是数据库系统的管理者，他们负责确保数据的安全性、完整性、可用性和性能。</p></li><li><p><strong>应用程序员</strong>： 应用程序员负责开发与数据库交互的应用程序，以满足用户的特定功能需求。</p></li><li><p><strong>最终用户</strong>： 最终用户是数据库系统的实际使用者，他们通过应用程序或直接通过查询语言来访问和操作数据库中的数据。</p></li></ul>`,80),p=[i];function t(o,r){return a(),s("div",null,p)}const d=n(l,[["render",t],["__file","mysql01.html.vue"]]);export{d as default};
