(function () {
    function getMsg(str) {
        return "Hello " + str;
    }
    var text = "angsuo"; // works fine
    // let text = ["hello"] // show error because of typed parameter in getMsg()
    // Since we activated tsc --watch command and live-server is reading ./index.html
    // any change to this file will be reflected in ./js/index.js
    // and then be read in the rendered page
    console.log(getMsg(text));
})();
