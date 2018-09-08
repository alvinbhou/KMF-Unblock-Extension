window.onload = function () {
    /* remove blocking box */
    document.querySelectorAll('.shield-box').forEach(s => s.remove());
    /* remove blur effect */
    (() => {
        let times = 10;
        (function run () {
            document.querySelectorAll('.blur').forEach(b => {
                b.classList.remove('blur');
                times = 0;
            } );
            if(times--){
                setTimeout(run, 200);
            }
        })();
    })();
}();
