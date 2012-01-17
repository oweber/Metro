(function () {
    'use strict';
    // Uncomment the following line to enable first chance exceptions.
    // Debug.enableFirstChanceException(true);

    WinJS.Application.onmainwindowactivated = function (e) {
        if (e.detail.kind === Windows.ApplicationModel.Activation.ActivationKind.launch) {
            var counter = 0;
            document.addEventListener("click", function () {
                counter++;
                text.innerText = "Hello Nexiles! You clicked " + counter + " times...";
            });
        }
    }

    WinJS.Application.start();
})();