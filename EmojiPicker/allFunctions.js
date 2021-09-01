import { TypesEmojis } from './Emojis/typesEmojis';
import { Recent } from './Emojis/recent';

export function CheckScroll(e, titleSection, title, active) {
    const element = e.target;
    const child = document.getElementById(titleSection);
    const next = TypesEmojis.findIndex(x => x.title === titleSection) + 1;
    const prev = TypesEmojis.findIndex(x => x.title === titleSection) - 1;
    const scrollIsGreater = element.scrollTop > child.offsetTop;
    const childHeightPassed = element.scrollTop > (child.offsetTop + child.offsetHeight);

    if (scrollIsGreater && childHeightPassed && (next < TypesEmojis.length)){
        active(next + 1);
        title(TypesEmojis[next].title);

    } else if (prev > -1 && !scrollIsGreater) {

        active(prev + 1);
        title(TypesEmojis[prev].title);
    }
}

export function SeparedArray(array, size) {
    let tempArray = [];
    let myChunk;

    for (let index = 0; index < array.length; index += size) {
        myChunk = array.slice(index, index + size);
        tempArray.push(myChunk);
    }

    return tempArray;
}

export function AutoScroll(title, id, active) {
    const scrolling = document.getElementById('scrolling');
    const offsetTop = document.getElementById(title).offsetTop;

    scrolling.scrollTo({
        top: offsetTop + 20,
        behavior: "auto"
    });
    
    active(id);
}

export function AddRecent(emoji) {
    let exist = Recent.findIndex(x => x.codePoint === emoji.codePoint);

    if (exist !== -1) {
        return;
    }

    const newRecent = {
        'title': emoji.title,
        'codePoint': emoji.codePoint,
        'hasTone': emoji.hasTone
    }

    if (Recent.length >= 16) {
        Recent.pop();
    }

    Recent.unshift(newRecent);
    localStorage.setItem('lastEmojis', JSON.stringify(Recent));
}