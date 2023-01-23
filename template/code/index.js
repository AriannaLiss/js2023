/*
 Згенерувати теги теги через javascript. 
 Додати на сторінку семантичні теги та метагеги опису сторінки.
 прописати стилі для для елементів використовуючи css id та класи
 при натиску на тег ми можемо додати будь-який контент і він зберігається в тегу
*/

import { createTag, createArticle } from "./functions.js";

const header = createTag('header');
header.appendChild(createTag('nav','header__nav'));

const section = createTag('section')
section.appendChild(createTag('header','section__header'));

const article = createTag('article');
article.appendChild(createTag('header','article__header'));
article.appendChild(createTag('p','article__p'));
article.appendChild(createTag('div','columns',''));
article.lastElementChild.appendChild(createTag('p','article__p'));
article.lastElementChild.appendChild(createTag('aside','article__aside'));
article.appendChild(createTag('footer','article__footer'));

section.appendChild(article);
section.appendChild(createArticle('header','p','p','footer'));
section.appendChild(createTag('footer','section__footer'));

const sectionRight = createTag('section','section');
sectionRight.appendChild(createTag('header','section__header'));
sectionRight.appendChild(createTag('nav','section__nav'));

const flex=createTag('div','columns','');
flex.appendChild(section);
flex.appendChild(sectionRight);

const footer = createTag('footer');

document.body.replaceChildren('body',header,flex,footer);
document.body.contentEditable = true;
