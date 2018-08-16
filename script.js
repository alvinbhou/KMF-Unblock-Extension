window.onload = function () {
    /* remove blocking box */
    document.querySelectorAll('.shield-box').forEach(s => s.remove());
    /* remove blur effect */
    (() => {
        let times = 4;
        (function run () {
            document.querySelectorAll('.blur').forEach(b => b.classList.remove('blur'));
            if(--times){
                setTimeout(run, 500);
            }
        })();
    })();
}();
