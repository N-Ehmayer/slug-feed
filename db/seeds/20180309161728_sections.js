exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sections').del()
    .then(function() {
      // Inserts seed entries
      return knex('sections').insert([{
        "article_id": 8,
        "content": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
      }, {
        "article_id": 5,
        "content": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
      }, {
        "article_id": 2,
        "content": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
      }, {
        "article_id": 1,
        "content": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
      }, {
        "article_id": 8,
        "content": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."
      }, {
        "article_id": 3,
        "content": "In congue. Etiam justo. Etiam pretium iaculis justo."
      }, {
        "article_id": 5,
        "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
      }, {
        "article_id": 7,
        "content": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
      }, {
        "article_id": 6,
        "content": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
      }, {
        "article_id": 7,
        "content": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
      }, {
        "article_id": 8,
        "content": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
      }, {
        "article_id": 4,
        "content": "Phasellus in felis. Donec semper sapien a libero. Nam dui."
      }, {
        "article_id": 4,
        "content": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
      }, {
        "article_id": 1,
        "content": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
      }, {
        "article_id": 1,
        "content": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
      }, {
        "article_id": 7,
        "content": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."
      }, {
        "article_id": 4,
        "content": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
      }, {
        "article_id": 1,
        "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
      }, {
        "article_id": 2,
        "content": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
      }, {
        "article_id": 4,
        "content": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
      }, {
        "article_id": 6,
        "content": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
      }, {
        "article_id": 5,
        "content": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."
      }, {
        "article_id": 7,
        "content": "Fusce consequat. Nulla nisl. Nunc nisl."
      }, {
        "article_id": 1,
        "content": "Sed ante. Vivamus tortor. Duis mattis egestas metus."
      }, {
        "article_id": 8,
        "content": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
      }, {
        "article_id": 5,
        "content": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
      }, {
        "article_id": 4,
        "content": "Phasellus in felis. Donec semper sapien a libero. Nam dui."
      }, {
        "article_id": 4,
        "content": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."
      }, {
        "article_id": 5,
        "content": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
      }, {
        "article_id": 5,
        "content": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
      }]);
    });
};
