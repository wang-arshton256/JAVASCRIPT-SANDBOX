fetch('http://httpstat.us/200')
  .then((res) => {
    return res
  })
  .then(() => {
    console.log('success');
  });


fetch('http://httpstat.us/400')
  .then((res) => {
    if(!res.ok) {
      throw new Error('Request failed');
    }
    return res;
  })

  .then(() => {
    console.log('success');
  })

  .catch((error) => {
    console.log(error);
  });


  fetch('http://httpstat.us/400')
  .then((res) => {
    if(res.status === 404) {
      throw new Error('Not Found');
    } else if(res.status === 500) {
      throw new Error('Server Error');
    } else if (res.status !== 200) {
      throw new Error('Request Failed');
    } 
    return res;
  })
  .then(() => {
    console.log('success');
  })

  .catch((error) => {
    console.log(error);
  });


fetch('http://hello123.net')
  .then((res) => {
    return res;
  })
  .then(() => {
    console.log('success');
  })
  .catch((error) => {
    console.log(error); 
  })