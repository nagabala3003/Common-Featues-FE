    onmessage = function (event) {
    console.log('Received message from the main thread:', event.data);
  
    const result = event.data * 2;
    postMessage(result);
    };