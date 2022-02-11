const handleFilterButtonActivationTag = (button: HTMLButtonElement, currentState: boolean) => {
    button.onmouseleave = (e) => {
        handleTags(button, currentState);
    }
}

const handleTags = (button: HTMLButtonElement, currentState: boolean) => {
    const activationTag = 'tag-active';
    const buttonTags = button.className.split(' ');
    if (alreadyHasTag(buttonTags, activationTag) && isFilterNotSelected(currentState)) {
        button.className = removeTagFrom(buttonTags, activationTag);
    }
    else if (tagIsNotPresentIn(buttonTags, activationTag) && isFilterSelected(currentState)) {
        button.className = addTagTo(button.className, activationTag);
    }
}

const addTagTo = (tags: string, tag: string) => {
    return tags += ` ${tag}`;
}

const alreadyHasTag = (tagsList: string[], tag: string) => {
    return tagsList.some(el => el === tag);
}

const tagIsNotPresentIn = (tagsList: string[], tag: string) => {
    return !alreadyHasTag(tagsList, tag);
}

const isFilterSelected = (currentState: boolean) => {
    return currentState === true;
}

const isFilterNotSelected = (currentState: boolean) => {
    return currentState === false;
}

const removeTagFrom = (tagsList: string[], tag: string) => {
    return tagsList.filter(item => {
        return item !== tag;
    }).join(' ');
}

export default handleFilterButtonActivationTag;