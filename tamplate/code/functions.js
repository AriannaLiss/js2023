const createTag = (name, className=name, text=name, contentEditable=true) => {
    const tag = document.createElement(name);
    tag.classList.add(className);
    tag.textContent = text;
    return tag;
}

function createArticle(...tags){
    const article = createTag('article');
    tags.forEach((tag) => article.appendChild(createTag(tag,'article__'+tag)))
    return article;
}

function createContainer(name, className, ...tags){
    const container = createTag(name, className);
    tags.forEach((tag) => container.appendChild(createTag(tag,className+'__'+tag)))
    return container;
}

export {createTag, createArticle, createContainer}
