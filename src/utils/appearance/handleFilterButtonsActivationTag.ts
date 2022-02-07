const handleFilterButtonActivationTag = (button: HTMLButtonElement, currentState: boolean) => {
    button.onmouseleave = (e) => {
        handleTags(button, currentState);
    }
}

const handleTags = (button: HTMLButtonElement, currentState: boolean) => {
    const activationTag = 'tag-active';
    const tags = button.className.split(' ');
    if (alreadyHasTag(tags, activationTag) && isNotSelected(currentState)) {
        button.className = removeTagFrom(tags, activationTag);
    }
    else if (!alreadyHasTag(tags, activationTag) && isSelected(currentState)) {
        button.className += ` ${activationTag}`;
    }
}


const alreadyHasTag = (tagsList: string[], tag: string) => {
    return tagsList.some(el => el === tag);
}

const isSelected = (currentState: boolean) => {
    return currentState === true;
}

const isNotSelected = (currentState: boolean) => {
    return currentState === false;
}

const removeTagFrom = (tagsList: string[], tag: string) => {
    return tagsList.filter(item => {
        return item !== tag;
    }).join(' ');
}

export default handleFilterButtonActivationTag;