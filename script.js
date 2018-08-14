window.onload = function () {
    /* remove blocking box */
    document.querySelectorAll('.shield-box').forEach(s => s.remove())
    /* remove blur effect after loaded */
    setTimeout(function(){
        document.querySelectorAll('.blur').forEach(b => b.classList.remove('blur'))
    }, 777);
};

