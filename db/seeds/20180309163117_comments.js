exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function() {
      // Inserts seed entries
      return knex('comments').insert([{
        "id": 1,
        "user_id": "e0fb4e2c-a395-465f-9369-3c5731b889eb",
        "agree": false,
        "content": "mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in",
        "section_id": 20
      }, {
        "id": 2,
        "user_id": "236fe96a-4807-40d9-9d00-0ff9baea72c0",
        "agree": true,
        "content": "nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam",
        "section_id": 30
      }, {
        "id": 3,
        "user_id": "e40f6b70-43be-4db2-b817-e8e28081390e",
        "agree": true,
        "content": "duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis",
        "section_id": 6
      }, {
        "id": 4,
        "user_id": "236fe96a-4807-40d9-9d00-0ff9baea72c0",
        "agree": false,
        "content": "in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis",
        "section_id": 16
      }, {
        "id": 5,
        "user_id": "3723ef8d-bb85-4d45-a718-f9d82bc36b8f",
        "agree": false,
        "content": "enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui",
        "section_id": 10
      }, {
        "id": 6,
        "user_id": "e40f6b70-43be-4db2-b817-e8e28081390e",
        "agree": true,
        "content": "justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum",
        "section_id": 30
      }, {
        "id": 7,
        "user_id": "e0fb4e2c-a395-465f-9369-3c5731b889eb",
        "agree": false,
        "content": "lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla",
        "section_id": 3
      }, {
        "id": 8,
        "user_id": "c1ffcdb1-131a-46ed-a644-c1b98c8ff824",
        "agree": true,
        "content": "in sagittis dui vel",
        "section_id": 9
      }, {
        "id": 9,
        "user_id": "c9f055e0-90a4-4999-ac54-3c309f981e7b",
        "agree": false,
        "content": "convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus",
        "section_id": 7
      }, {
        "id": 10,
        "user_id": "e40f6b70-43be-4db2-b817-e8e28081390e",
        "agree": true,
        "content": "aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla",
        "section_id": 23
      }, {
        "id": 11,
        "user_id": "3723ef8d-bb85-4d45-a718-f9d82bc36b8f",
        "agree": true,
        "content": "amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet",
        "section_id": 13
      }, {
        "id": 12,
        "user_id": "a65d8cf5-f7fd-413a-9b1d-f9c2e957f6ab",
        "agree": false,
        "content": "ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero",
        "section_id": 6
      }, {
        "id": 13,
        "user_id": "3723ef8d-bb85-4d45-a718-f9d82bc36b8f",
        "agree": true,
        "content": "molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet",
        "section_id": 5
      }, {
        "id": 14,
        "user_id": "c9f055e0-90a4-4999-ac54-3c309f981e7b",
        "agree": true,
        "content": "porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis",
        "section_id": 23
      }, {
        "id": 15,
        "user_id": "e0fb4e2c-a395-465f-9369-3c5731b889eb",
        "agree": true,
        "content": "ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet",
        "section_id": 23
      }, {
        "id": 16,
        "user_id": "e40f6b70-43be-4db2-b817-e8e28081390e",
        "agree": true,
        "content": "et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec",
        "section_id": 14
      }, {
        "id": 17,
        "user_id": "e40f6b70-43be-4db2-b817-e8e28081390e",
        "agree": true,
        "content": "fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue",
        "section_id": 20
      }, {
        "id": 18,
        "user_id": "3723ef8d-bb85-4d45-a718-f9d82bc36b8f",
        "agree": false,
        "content": "placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo",
        "section_id": 17
      }, {
        "id": 19,
        "user_id": "3723ef8d-bb85-4d45-a718-f9d82bc36b8f",
        "agree": false,
        "content": "tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra",
        "section_id": 16
      }, {
        "id": 20,
        "user_id": "e0fb4e2c-a395-465f-9369-3c5731b889eb",
        "agree": true,
        "content": "hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et",
        "section_id": 25
      }, {
        "id": 21,
        "user_id": "e40f6b70-43be-4db2-b817-e8e28081390e",
        "agree": true,
        "content": "tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo",
        "section_id": 6
      }, {
        "id": 22,
        "user_id": "c9f055e0-90a4-4999-ac54-3c309f981e7b",
        "agree": true,
        "content": "fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in",
        "section_id": 11
      }, {
        "id": 23,
        "user_id": "c9f055e0-90a4-4999-ac54-3c309f981e7b",
        "agree": false,
        "content": "curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel",
        "section_id": 23
      }, {
        "id": 24,
        "user_id": "3723ef8d-bb85-4d45-a718-f9d82bc36b8f",
        "agree": true,
        "content": "donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in",
        "section_id": 30
      }, {
        "id": 25,
        "user_id": "c9f055e0-90a4-4999-ac54-3c309f981e7b",
        "agree": false,
        "content": "dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero",
        "section_id": 7
      }, {
        "id": 26,
        "user_id": "c9f055e0-90a4-4999-ac54-3c309f981e7b",
        "agree": true,
        "content": "at velit eu est congue elementum in hac habitasse platea dictumst",
        "section_id": 11
      }, {
        "id": 27,
        "user_id": "a65d8cf5-f7fd-413a-9b1d-f9c2e957f6ab",
        "agree": false,
        "content": "posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui",
        "section_id": 9
      }, {
        "id": 28,
        "user_id": "a65d8cf5-f7fd-413a-9b1d-f9c2e957f6ab",
        "agree": true,
        "content": "blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum",
        "section_id": 15
      }, {
        "id": 29,
        "user_id": "e0fb4e2c-a395-465f-9369-3c5731b889eb",
        "agree": true,
        "content": "volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque",
        "section_id": 3
      }, {
        "id": 30,
        "user_id": "c9f055e0-90a4-4999-ac54-3c309f981e7b",
        "agree": true,
        "content": "tempor turpis nec euismod scelerisque",
        "section_id": 22
      }]);
    });
};
