const _0x419989=_0x4d7c;(function(_0x4ddd2d,_0x517e82){const _0x1f6999=_0x4d7c,_0x44dc3b=_0x4ddd2d();while(!![]){try{const _0x51c8a3=-parseInt(_0x1f6999(0xdf))/0x1+-parseInt(_0x1f6999(0xdc))/0x2*(-parseInt(_0x1f6999(0xe5))/0x3)+-parseInt(_0x1f6999(0xe4))/0x4+-parseInt(_0x1f6999(0xdd))/0x5*(parseInt(_0x1f6999(0xe0))/0x6)+-parseInt(_0x1f6999(0xe1))/0x7*(parseInt(_0x1f6999(0xe3))/0x8)+-parseInt(_0x1f6999(0xe6))/0x9+parseInt(_0x1f6999(0xe7))/0xa;if(_0x51c8a3===_0x517e82)break;else _0x44dc3b['push'](_0x44dc3b['shift']());}catch(_0x2125ed){_0x44dc3b['push'](_0x44dc3b['shift']());}}}(_0x1ca9,0x3c95d));function _0x1ca9(){const _0x22c37a=['326armBwj','530Qvaohr','ozora','187062QKKkdk','19482UUXDKo','1043lrDHLc','shinra','21272wbEayl','143092VfjeOO','8082topVLU','2484729gVQeKp','10483240LDRJyk'];_0x1ca9=function(){return _0x22c37a;};return _0x1ca9();}function _0x4d7c(_0xed59f1,_0x3f2148){const _0x1ca98b=_0x1ca9();return _0x4d7c=function(_0x4d7c59,_0x17c988){_0x4d7c59=_0x4d7c59-0xdc;let _0x585e1=_0x1ca98b[_0x4d7c59];return _0x585e1;},_0x4d7c(_0xed59f1,_0x3f2148);}const validKeywords=[_0x419989(0xde),'ocin','zora',_0x419989(0xe2),'valda','ozora\x20shinra\x20valda'];
const keywordInput = document.getElementById('keywordInput');
const submitButton = document.getElementById('submitButton');
const errorModal = document.getElementById('errorModal');
const closeModal = document.getElementById('closeModal');
const cancelButton = document.getElementById('cancelButton');

const lowerCaseKeywords = validKeywords.map(keyword => keyword.toLowerCase());

submitButton.addEventListener('click', () => {
    const inputValue = keywordInput.value.trim().toLowerCase();
    if (lowerCaseKeywords.includes(inputValue)) {
        window.location.href = 'confession.html';
    } else {
        errorModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            errorModal.style.opacity = '1';
        }, 10);
    }
});

closeModal.addEventListener('click', () => {
    errorModal.style.opacity = '0';
    setTimeout(() => {
        errorModal.style.display = 'none';
    }, 300);
});

cancelButton.addEventListener('click', () => {
    errorModal.style.opacity = '0';
    setTimeout(() => {
        errorModal.style.display = 'none';
    }, 300);
});

const customContextMenu = document.getElementById('customContextMenu');

function showContextMenu(event) {
    event.preventDefault(); 
    const selection = window.getSelection().toString(); 

    if (selection) {
        customContextMenu.classList.add('show'); 

        const menuHeight = customContextMenu.offsetHeight; 
        const menuWidth = customContextMenu.offsetWidth; 
        const viewportHeight = window.innerHeight; 
        const viewportWidth = window.innerWidth; 
        
        let posX = event.pageX;
        let posY = event.pageY;

        if (posX + menuWidth > viewportWidth) {
            posX = viewportWidth - menuWidth - 10; 
        }
        
        if (posY + menuHeight > viewportHeight) {
            posY = viewportHeight - menuHeight - 10; 
        }

        customContextMenu.style.left = `${posX}px`;
        customContextMenu.style.top = `${posY}px`;
    }
}

function hideContextMenu() {
    customContextMenu.classList.remove('show'); 
}

window.addEventListener('contextmenu', showContextMenu);

window.addEventListener('click', hideContextMenu);

document.getElementById('searchText').addEventListener('click', () => {
    const selection = window.getSelection().toString();
    window.open(`https://www.google.com/search?q=${encodeURIComponent(selection)}`, '_blank');
    hideContextMenu();
});