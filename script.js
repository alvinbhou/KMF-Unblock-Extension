window.onload = function () {
    /* HTTPS upgrade */
    /* Prevent possible microphone API permissions issues */
    if (location.protocol !== "https:") {
        location.protocol = "https:";
    }

    /* TOEFL section */
    /* Remove blocking box */
    document.querySelectorAll('.shield-box').forEach(s => s.remove());

    /*  Select the nodes to remove the blur and login block */
    const targetNodes = document.querySelectorAll('.questions-tools, .practice-container');
    console.log(targetNodes);

    // Options for the observer (which mutations to observe)
    const config = {
        attributes: true,
        childList: true,
        subtree: true
    };
    for (let targetNode of targetNodes) {
        // Callback function to execute when mutations are observed
        let callback = function (e) {
            document.querySelectorAll('.login-cont').forEach(s => s.remove());
            document.querySelectorAll('.blur').forEach(b => {
                b.classList.remove('blur')
            });
        };

        // Create an observer instance linked to the callback function
        let observer = new MutationObserver(callback);

        // Start observing the target node for configured mutations
        observer.observe(targetNode, config);
    }

    /* GMAT section */
    /* Remove blocking box and text for single practice questions*/
    document.querySelectorAll('.dart .mark-text').forEach(e => e.remove());
    document.querySelectorAll('.dart .mark-no-copyright').forEach(e => e.classList.remove('mark-no-copyright'));

    /* Remove disable tab and text for mock section*/
    document.querySelectorAll('.tab-forbidden[data-type="PREP"]').forEach(e => e.classList.remove('tab-forbidden'));

}();