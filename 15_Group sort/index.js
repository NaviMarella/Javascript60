
// This method is to add sorting based on a set of properties

function orderByProperty(prop) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function (a, b) {
      var equality = a[prop].toLowerCase() > b[prop].toLowerCase() ? 1:
                                     ((b[prop].toLowerCase() > a[prop].toLowerCase()) ? -1: 0)
      if (equality === 0 && arguments.length > 1) {
        return orderByProperty.apply(null, args)(a, b);
      }
      return equality;
    };
  }


  // Example

  var data = [
    { a: 'Sayi', b: 'acd' },
    { a: 'Navi', b: 'bcd' },
    { a: 'Sayi', b: 'abc' },
    { a: 'Navi', b: 'abc' }
  ];

  data.sort(orderByProperty('a', 'b'));