---
title: PDF.js(demo)
author: "scillidan"
date: 2022-08-01
weight: 
---

…🐌

tool: [pdfalyzer](https://github.com/michelcrypt4d4mus/pdfalyzer), [tabula](https://tabula.technology), [sublime-text](https://www.sublimetext.com)([rainbow csv](https://github.com/mechatroner/sublime_rainbow_csv), [insertnums](https://github.com/jbrooksuk/InsertNums)), [pdf-toc](https://github.com/HareInWeed/pdf-toc), [xpdfreader](https://www.xpdfreader.com/download.html), [pdfjs](https://github.com/mozilla/pdf.js)  
reference: [How to Build a JavaScript PDF Viewer with PDF.js](https://pspdfkit.com/blog/2021/how-to-build-a-javascript-pdf-viewer-with-pdfjs/)

```
pdfalyzer, 取出toc页面到1.pdf；保留正文，移动license等页到末尾，导出为2.pdf
tabula, 从1.pdf取出toc数据到csv格式
sublime-text, 编辑数据，另存为.txt
	insertnums, 在多行生成编号
pdf-toc, 从.txt给2.pdf写入toc
xpdfreader, 预览pdf
```

see [demo](/viewer.html?file=pinouts_v0.3_toc.pdf#pagemode=bookmarks&zoom=page-height)  
ps: the pdf edit from [the pinouts book](https://pinouts.org) by [NODE](https://n-o-d-e.net/index.html) & Baptiste / [cc by-sa 4.0](https://creativecommons.org/licenses/by-sa/4.0/)