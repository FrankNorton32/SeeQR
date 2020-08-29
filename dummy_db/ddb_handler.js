// import types from './dd_types.js';
const faker = require('faker');
 
console.log(faker.name.findName()); // Rowan Nikolaus
console.log(faker.internet.email()); // Kassandra.Haley@erich.biz
console.log(faker.helpers.createCard());


const types = {};

types.string = function (data) {return 'string'};

types.integer = function (data) {return 'integer'};

types.phoneNumbers = function (data) {return 'phone number'};

types.email = function (data) {return 'email'};

types.foreign = function (data) {return '$#<table|column|index>#$'}



const fromApp = [
  {
    schema : 'schema1',
    table : 'table1',
    scale : 5,
    columns : [
      {
        name : 'username',
        dataType : 'string',
        data : {
          unique : true,
          strLength : [8, 20],
        }
      },
      {
        name : 'phone_numbers',
        dataType : 'phoneNumbers',
        data : {
          unique : true
        }
      }
    ]
  },
  {
    schema : 'schema1',
    table : 'table2',
    scale : 3,
    columns : [
      {
        name : 'user_id',
        dataType : 'integer',
        data : {
          unique : true,
        }
      },
      {
        name : 'email',
        dataType : 'email',
        data : {
          unique : true,
          required : false,
          percentWith : 0.5,
        }
      },
      {
        name : 'username',
        dataType : 'string',
        data : {
          unique : true,
          strLength : [8, 20],
        }
      },
      {
        name : 'foreign_id',
        dataType : 'foreign',
        data : {
          table : 'table3',
          column : '_id',
        }
      }
    ]
  }

]

// deconstruct and convert to string the column names
const columnList = (columns) => {      
  let list = '';
  columns.forEach( (e , i) => {
    list += e.name;
    if (i < columns.length - 1) list += ', ';
  } );
  return list;
}

// populate the values, repeat for scale
const valuesList = (columns, scale) => {
  let list = '';
  // create the number of records equal to the scale of the table
  for (let i = 0; i < scale; i += 1) {
    let record = '';
    columns.forEach( (e, k) => {
      record += `${types[e.dataType](e.data, i)}`;
      if (k < columns.length - 1) record += ', ';
    })
    list += `(${record})`
    if (i < scale - 1) list += ', ';
  }
  return list;
};

// populate all information into a single set of INSERT INTO queries
const createInsert = (data) => {
  let insertString = '';
  for (let i = 0; i < data.length; i += 1) {
    insertString += `INSERT INTO "${data[i].schema}"."${data[i].table}"(${columnList(data[i].columns)}) VALUES ${valuesList(data[i].columns, data[i].scale)}; `;
  }
  return insertString;
}



// console.log(createInsert(fromApp));



/* 
INSERT INTO 
  "Manager"
  (_id, mgr_firstname, mgr_lastname, hire_date, years_as_mgr, email, phone)
VALUES 
  (0001, 'Bobby', 'Bobberton', '2010-01-01', 3) ('thebob@bob.com', 555-555-5555, 0001), 
  (0002, 'Carrie', 'Carry', '2010-01-03', 3, 'kerry@kerey.com', 555-555-5555);
*/


/*
INSERT INTO 
  "schema1"."table1"(username, phone_numbers) 
VALUES 
  (string, phone number), 
  (string, phone number), 
  (string, phone number), 
  (string, phone number), 
  (string, phone number); 

INSERT INTO 
  "schema1"."table2"(user_id, email, username, foreign_id) 
VALUES 
  (integer, email, $#<table|column|index>#$, $#<table|column|index>#$), 
  (integer, email, string, $#<table|column|index>#$), 
  (integer, email, string, $#<table|column|index>#$);
*/


// cross foreign 
