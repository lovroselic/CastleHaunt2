/** run in the console */

(function () {
    let total = 0;
    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            total += (localStorage[key].length + key.length) * 2; // Approximate bytes
        }
    }
    console.log(`LocalStorage Usage: ${total} bytes (${(total / 1024).toFixed(2)} KB)`);
})();
