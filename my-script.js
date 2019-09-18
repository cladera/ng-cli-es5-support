const myPromise = new Promise(function(resolve) {
  setTimeout(function(){
    resolve('Promise resolved');
  }, 500);
});

myPromise.then(console.log);
