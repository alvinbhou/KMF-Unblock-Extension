window.onload = function() {
    /* TOEFL section */
    /* Remove blocking box */
    document.querySelectorAll('.shield-box').forEach(s => s.remove());
    document.querySelectorAll('.login-cont').forEach(s => s.remove());
    /* Remove blur effect */
    (() => {
        let times = 10;
        (function run() {
            document.querySelectorAll('.blur').forEach(b => {
                b.classList.remove('blur');
                times = 0;
            });
            if (times--) {
                setTimeout(run, 200);
            }
        })();
    })();

    /* GMAT section */
    /* Remove blocking box and text for single practice questions*/
    document.querySelectorAll('.dart .mark-text').forEach(e => e.remove());
    document.querySelectorAll('.dart .mark-no-copyright').forEach(e => e.classList.remove('mark-no-copyright'));

    /* Remove disable tab and text for mock section*/
    document.querySelectorAll('.tab-forbidden[data-type="PREP"]').forEach(e => e.classList.remove('tab-forbidden'));

}();