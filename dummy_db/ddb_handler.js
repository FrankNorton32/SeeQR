// import types from './dd_types.js';
const faker = require('faker');
// const fakerlink = require('./fakerfile.js');
 
// console.log(faker.name.findName()); // Rowan Nikolaus
// console.log(faker.internet.email()); // Kassandra.Haley@erich.biz
// console.log(faker.name.lastName());



const types = {};
types.unique = {};
types.repeating = {};
types.unique.str = (data) => {return 'unique.string'};
types.unique.num = (data) => {return 'unique.number'};
types.repeating.loop = (data) => {return 'loop'};
types.repeating.weighted = (data) => {return 'weighted'};
types.repeating.counted = (data) => {return 'counted'}

console.log(types.unique.str());

const fromApp = [
  {
    schema : 'schema1',
    table : 'table1',
    scale : 5,
    columns : [
      {
        name : 'username',
        dataCategory : 'random', // random, repeating, unique, combo, foreign
        dataType : 'name.lastName',
        data : {
          unique : true,
          strLength : [8, 20],
        },
      },
      {
        name : 'phone_numbers',
        dataCategory : 'unique', // random, repeating, unique, combo, foreign
        dataType : 'phoneNumbers', ///////////////////////////
        data : {
          unique : true
        }
      },
      {
        name : 'phone_numbers',
        dataCategory : 'custom', // random, repeating, unique, combo, foreign
        dataType : 'phoneNumbers', /////////////////////////
        data : {
          unique : true
        }
      },
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

// deconstruct and convert the column names to a single string
const columnList = (columns) => {      
  let list = '';
  columns.forEach( (e , i) => {
    list += e.name;
    if (i < columns.length - 1) list += ', ';
  } );
  return list;
}

// appened any necessary tracking variables to the table level  
// loop through column data types and run element.addVariable to assign variables to the index of the column on "variables".
// use the index to handle any tables that have multiple columns of the same data type.
const createVariables = (cols) => {
  let vars = [];
  cols.forEach ( (e, i) => {if (e.addVariable) e.addVariable(vars, i);} )
  return vars;
};
/*
const columns = [
  {
    addVariable: (vars, i) => {
      vars[i] = {
        test : "Yes"
      }
    }
  }
];
*/


const createRecordFunc = (cols) => {
  let output = [];
  cols.forEach(e => {
    if (e.dataCategory === 'random') output.push(() => {})
  } );
};


// populate the values, repeat for scale
const valuesList = (columns, scale) => {
  const recordBuilder = {};
  // create an array with each element as the necessary function to call that column's data type (first column = first element, etc)
  // this will remove the need to run switch statements on each record as this happens at the table level.
  // recordBuilder.funcs = createRecordFunc(columns);
  // create variables that need to exist on the table level
  recordBuilder.vars = createVariables(columns);

  let list = '';

  // create the number of records equal to the scale of the table
  for (let i = 0; i < scale; i += 1) {
    // start each record as an empty string
    let record = '';
    // traverse each column and concat the results of calling the the data type function
    columns.forEach( (e, k) => {
      record += `${types[e.dataType](e.data, i, variables[i])}`;
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
