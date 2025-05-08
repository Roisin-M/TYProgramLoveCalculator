function calculateLoveMatch() {
    // We set two names here, which we will use to get the love match between these two people
    // We set two names here, which we will use to get the love match between these two people
    var name1 = 'John Doe';
    var name2 = 'Jane Doe';

     // We need to set a few things here, to make sure our API works. Don't change these options, or you'll break it!
    const options = {
        method: 'GET',
        headers: {
           'x-api-key': '1f0d0629-463a-4850-887e-00149b7addd8'
        }
    };

       // This is where we fetch the data from our API.
       fetch('https://api.apiverve.com/v1/lovecalculator?name1=' + encodeURI(name1) + '&name2=' + encodeURI(name2), options)
        .then(response => response.json())
        .then(response => {
        console.log(response);
        console.log(response.data);
        // This is where you populate the html elements and
        // element attributes with values from the result;

        })
        .catch(err => console.error(err));
}