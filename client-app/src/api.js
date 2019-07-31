const apiRoot = 'https://localhost:44309/api';

const standardHeader = {
  'Content-Type': 'application/json'
};

export const grid = (function () {

  const gridRoute = `${apiRoot}/grid`;

  return {
    create: function (contents) {
      return fetch(gridRoute,
        {
          method: 'POST',
          headers: standardHeader,
          body: JSON.stringify({ contents })
        });
    },
    update: function (id, contents) {
      return fetch(
        `${gridRoute}/${id}`,
        {
          method: 'PUT',
          headers: standardHeader,
          body: JSON.stringify({ contents })
        });
    }
  };
})();