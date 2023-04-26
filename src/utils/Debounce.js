export const useDebounce = (fn, timeout) =>{
    let isCooldown = false;

    return function() {
        if (isCooldown) return;

        fn.apply(this, arguments);

        isCooldown = true;

        setTimeout(() => isCooldown = false, timeout);
    };
}
