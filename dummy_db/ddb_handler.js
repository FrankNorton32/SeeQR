// import types from './dd_types.js';
const faker = require('faker');
const fakerLink = {
  'address.zipCode' : faker.address.zipCode,
  'address.zipCodeByState' : faker.address.zipCodeByState,
  'address.city' : faker.address.city,
  'address.cityPrefix' : faker.address.cityPrefix,
  'address.citySuffix' : faker.address.citySuffix,
  'address.streetName' : faker.address.streetName,
  'address.streetAddress' : faker.address.streetAddress,
  'address.streetSuffix' : faker.address.streetSuffix,
  'address.streetPrefix' : faker.address.streetPrefix,
  'address.secondaryAddress' : faker.address.secondaryAddress,
  'address.county' : faker.address.county,
  'address.country' : faker.address.country,
  'address.countryCode' : faker.address.countryCode,
  'address.state' : faker.address.state,
  'address.stateAbbr' : faker.address.stateAbbr,
  'address.latitude' : faker.address.latitude,
  'address.longitude' : faker.address.longitude,
  'address.direction' : faker.address.direction,
  'address.cardinalDirection' : faker.address.cardinalDirection,
  'address.ordinalDirection' : faker.address.ordinalDirection,
  'address.nearbyGPSCoordinate' : faker.address.nearbyGPSCoordinate,
  'address.timeZone' : faker.address.timeZone,
  'commerce.color' : faker.commerce.color,
  'commerce.department' : faker.commerce.department,
  'commerce.productName' : faker.commerce.productName,
  'commerce.price' : faker.commerce.price,
  'commerce.productAdjective' : faker.commerce.productAdjective,
  'commerce.productMaterial' : faker.commerce.productMaterial,
  'commerce.product' : faker.commerce.product,
  'commerce.productDescription' : faker.commerce.productDescription,
  'company.suffixes' : faker.company.suffixes,
  'company.companyName' : faker.company.companyName,
  'company.companySuffix' : faker.company.companySuffix,
  'company.catchPhrase' : faker.company.catchPhrase,
  'company.bs' : faker.company.bs,
  'company.catchPhraseAdjective' : faker.company.catchPhraseAdjective,
  'company.catchPhraseDescriptor' : faker.company.catchPhraseDescriptor,
  'company.catchPhraseNoun' : faker.company.catchPhraseNoun,
  'company.bsAdjective' : faker.company.bsAdjective,
  'company.bsBuzz' : faker.company.bsBuzz,
  'company.bsNoun' : faker.company.bsNoun,
  'database.column' : faker.database.column,
  'database.type' : faker.database.type,
  'database.collation' : faker.database.collation,
  'database.engine' : faker.database.engine,
  'date.past' : faker.date.past,
  'date.future' : faker.date.future,
  'date.between' : faker.date.between,
  'date.recent' : faker.date.recent,
  'date.soon' : faker.date.soon,
  'date.month' : faker.date.month,
  'date.weekday' : faker.date.weekday,
  'finance.account' : faker.finance.account,
  'finance.accountName' : faker.finance.accountName,
  'finance.routingNumber' : faker.finance.routingNumber,
  'finance.mask' : faker.finance.mask,
  'finance.amount' : faker.finance.amount,
  'finance.transactionType' : faker.finance.transactionType,
  'finance.currencyCode' : faker.finance.currencyCode,
  'finance.currencyName' : faker.finance.currencyName,
  'finance.currencySymbol' : faker.finance.currencySymbol,
  'finance.bitcoinAddress' : faker.finance.bitcoinAddress,
  'finance.litecoinAddress' : faker.finance.litecoinAddress,
  'finance.creditCardNumber' : faker.finance.creditCardNumber,
  'finance.creditCardCVV' : faker.finance.creditCardCVV,
  'finance.ethereumAddress' : faker.finance.ethereumAddress,
  'finance.iban' : faker.finance.iban,
  'finance.bic' : faker.finance.bic,
  'finance.transactionDescription' : faker.finance.transactionDescription,
  'git.branch' : faker.git.branch,
  'git.commitEntry' : faker.git.commitEntry,
  'git.commitMessage' : faker.git.commitMessage,
  'git.commitSha' : faker.git.commitSha,
  'git.shortSha' : faker.git.shortSha,
  'hacker.abbreviation' : faker.hacker.abbreviation,
  'hacker.adjective' : faker.hacker.adjective,
  'hacker.noun' : faker.hacker.noun,
  'hacker.verb' : faker.hacker.verb,
  'hacker.ingverb' : faker.hacker.ingverb,
  'hacker.phrase' : faker.hacker.phrase,
  'helpers.randomize' : faker.helpers.randomize,
  'helpers.slugify' : faker.helpers.slugify,
  'helpers.replaceSymbolWithNumber' : faker.helpers.replaceSymbolWithNumber,
  'helpers.replaceSymbols' : faker.helpers.replaceSymbols,
  'helpers.replaceCreditCardSymbols' : faker.helpers.replaceCreditCardSymbols,
  'helpers.repeatString' : faker.helpers.repeatString,
  'helpers.regexpStyleStringParse' : faker.helpers.regexpStyleStringParse,
  'helpers.shuffle' : faker.helpers.shuffle,
  'helpers.mustache' : faker.helpers.mustache,
  'helpers.createCard' : faker.helpers.createCard,
  'helpers.contextualCard' : faker.helpers.contextualCard,
  'helpers.userCard' : faker.helpers.userCard,
  'helpers.createTransaction' : faker.helpers.createTransaction,
  'image.image' : faker.image.image,
  'image.avatar' : faker.image.avatar,
  'image.imageUrl' : faker.image.imageUrl,
  'image.abstract' : faker.image.abstract,
  'image.animals' : faker.image.animals,
  'image.business' : faker.image.business,
  'image.cats' : faker.image.cats,
  'image.city' : faker.image.city,
  'image.food' : faker.image.food,
  'image.nightlife' : faker.image.nightlife,
  'image.fashion' : faker.image.fashion,
  'image.people' : faker.image.people,
  'image.nature' : faker.image.nature,
  'image.sports' : faker.image.sports,
  'image.technics' : faker.image.technics,
  'image.transport' : faker.image.transport,
  'image.dataUri' : faker.image.dataUri,
  'image.lorempixel' : faker.image.lorempixel,
  'image.unsplash' : faker.image.unsplash,
  'image.lorempicsum' : faker.image.lorempicsum,
  'internet.avatar' : faker.internet.avatar,
  'internet.email' : faker.internet.email,
  'internet.exampleEmail' : faker.internet.exampleEmail,
  'internet.userName' : faker.internet.userName,
  'internet.protocol' : faker.internet.protocol,
  'internet.url' : faker.internet.url,
  'internet.domainName' : faker.internet.domainName,
  'internet.domainSuffix' : faker.internet.domainSuffix,
  'internet.domainWord' : faker.internet.domainWord,
  'internet.ip' : faker.internet.ip,
  'internet.ipv6' : faker.internet.ipv6,
  'internet.userAgent' : faker.internet.userAgent,
  'internet.color' : faker.internet.color,
  'internet.mac' : faker.internet.mac,
  'internet.password' : faker.internet.password,
  'lorem.word' : faker.lorem.word,
  'lorem.words' : faker.lorem.words,
  'lorem.sentence' : faker.lorem.sentence,
  'lorem.slug' : faker.lorem.slug,
  'lorem.sentences' : faker.lorem.sentences,
  'lorem.paragraph' : faker.lorem.paragraph,
  'lorem.paragraphs' : faker.lorem.paragraphs,
  'lorem.text' : faker.lorem.text,
  'lorem.lines' : faker.lorem.lines,
  'name.firstName' : faker.name.firstName,
  'name.lastName' : faker.name.lastName,
  'name.findName' : faker.name.findName,
  'name.jobTitle' : faker.name.jobTitle,
  'name.gender' : faker.name.gender,
  'name.prefix' : faker.name.prefix,
  'name.suffix' : faker.name.suffix,
  'name.title' : faker.name.title,
  'name.jobDescriptor' : faker.name.jobDescriptor,
  'name.jobArea' : faker.name.jobArea,
  'name.jobType' : faker.name.jobType,
  'phone.phoneNumber' : faker.phone.phoneNumber,
  'phone.phoneNumberFormat' : faker.phone.phoneNumberFormat,
  'phone.phoneFormats' : faker.phone.phoneFormats,
  'random.number' : faker.random.number,
  'random.float' : faker.random.float,
  'random.arrayElement' : faker.random.arrayElement,
  'random.arrayElements' : faker.random.arrayElements,
  'random.objectElement' : faker.random.objectElement,
  'random.uuid' : faker.random.uuid,
  'random.boolean' : faker.random.boolean,
  'random.word' : faker.random.word,
  'random.words' : faker.random.words,
  'random.image' : faker.random.image,
  'random.locale' : faker.random.locale,
  'random.alpha' : faker.random.alpha,
  'random.alphaNumeric' : faker.random.alphaNumeric,
  'random.hexaDecimal' : faker.random.hexaDecimal,
  'system.fileName' : faker.system.fileName,
  'system.commonFileName' : faker.system.commonFileName,
  'system.mimeType' : faker.system.mimeType,
  'system.commonFileType' : faker.system.commonFileType,
  'system.commonFileExt' : faker.system.commonFileExt,
  'system.fileType' : faker.system.fileType,
  'system.fileExt' : faker.system.fileExt,
  'system.directoryPath' : faker.system.directoryPath,
  'system.filePath' : faker.system.filePath,
  'system.semver' : faker.system.semver,
  'time.recent' : faker.time.recent,
  'vehicle.vehicle' : faker.vehicle.vehicle,
  'vehicle.manufacturer' : faker.vehicle.manufacturer,
  'vehicle.model' : faker.vehicle.model,
  'vehicle.type' : faker.vehicle.type,
  'vehicle.fuel' : faker.vehicle.fuel,
  'vehicle.vin' : faker.vehicle.vin,
  'vehicle.color' : faker.vehicle.color,
};
let test = fakerLink['helpers.slugify'];
console.log(test());

const types = {
  unique : {
    str : {},
    num : {},
  },
  repeating : {
    loop : {},
    weighted : {},
    counted : {},
  },
};

types.unique.str.record = (data, index, vars) => {
  /*
data = {
  length : [1, 15],
  inclNum : true,
  inclSpaces : true,
  inclSpecChar : true,
  include : ["include", "these", "once", "austS"],
}
  */
  const {chars, unique, lockedIndexes} = vars;
  let output = unique[index];
  if (lockedIndexes.includes(index)) return output;
  const strLen = Math.round(Math.random() * (data.length[1] - data.length[0])) + data.length[0];
  for (let i = unique[index].length; i < strLen; i += 1) {
    output += chars[Math.floor(Math.random() * Math.floor(chars.length))]
  }
  return output;
};

types.unique.str.variable = (data, scale) => {
  const output = {
    chars : 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    unique : [],
    lockedIndexes : [],
  }
  // if character types are 'true', append them to the character list
  if (data.inclNum) output.chars += '0123456789';
  if (data.inclSpaces) output.chars += ' ';
  if (data.inclSpecChar) output.chars += ',.?;:!@#$%^&*';
  // ensure that the minimum length can accommodate unique values to the length of the scale
  let min = 1;
  while (output.chars.length ** min < scale) min += 1;
  // create minimum unique keys in sequence for quick retrieval when creating record
  // stop once scale is reached
  (buildUnique = (str = '') => {
    if (str.length === min) {
      output.unique.push(str);
      return;
    }
    for (const char of output.chars) {
      if (output.unique.length === scale) return;
      buildUnique(str + char);
    }
  })();
  // handle INCLUDE values : values the user requires to exist
  // find the first chars up to the index of min (prefix) then search the unique array for that prefix.
  // if it exist, replace it with the full string.
  // if not, find a random index and insert the full string there.
  // Keep track of the indexes already use to avoid overwriting something we need to save (lockedIndex on output)
  if (data.include > scale) console.log(`ERROR: Entries in 'Include' exceed the scale of the table, some values will not be represented.` )
  data.include.sort();
  for (let i = 0; i < data.include.length && i < scale; i += 1) {
    let prefix = ''; 
    for (let k = 0; k < min && k < data.include[i].length; k += 1) prefix += data.include[i][k];
    let index = output.unique.indexOf(prefix);
    while (output.lockedIndexes.includes(index) || index === -1) {
      index = Math.floor(Math.random() * Math.floor(scale));
    }
    output.lockedIndexes.push(index);
    output.unique[index] = data.include[i];
  }
  output.lockedIndexes.sort();
  return output;
};

types.unique.num.record = (data) => {return 'unique.number'};
types.unique.num.variable = (vars, i) => {vars[i] = {      }};
types.repeating.loop.record = (data) => {return 'loop'};
types.repeating.loop.variable = (vars, i) => {vars[i] = {      }};
types.repeating.weighted.record = (data) => {return 'weighted'};
types.repeating.loop.variable = (vars, i) => {vars[i] = {      }};
types.repeating.counted.record = (data) => {return 'counted'};
types.repeating.loop.variable = (vars, i) => {vars[i] = {      }};

const fromApp = [
  {
    schema : 'schema1',
    table : 'table1',
    scale : 5,
    columns : [
      {
        name : 'last_name',
        dataCategory : 'unique', // random, repeating, unique, combo, foreign
        dataType : 'str',
        data : {
          length : [5, 15],
          inclNum : true,
          inclSpaces : false,
          inclSpecChar : false,
          include : ["include", "these", "once", "austS"],
        },
      },
      {
        name : 'first_name',
        dataCategory : 'random', // random, repeating, unique, combo, foreign
        dataType : 'name.firstName', 
        data : {
        }
      },
      {
        name : 'company_name',
        dataCategory : 'random',
        dataType : 'company.companyName', 
        data : {
        }
      }
    ]
  },
  // {
  //   schema : 'schema1',
  //   table : 'table2',
  //   scale : 3,
  //   columns : [
  //     {
  //       name : 'user_id',
  //       dataType : 'integer',
  //       data : {
  //         unique : true,
  //       }
  //     },
  //     {
  //       name : 'email',
  //       dataType : 'email',
  //       data : {
  //         unique : true,
  //         required : false,
  //         percentWith : 0.5,
  //       }
  //     },
  //     {
  //       name : 'username',
  //       dataType : 'string',
  //       data : {
  //         unique : true,
  //         strLength : [8, 20],
  //       }
  //     },
  //     {
  //       name : 'foreign_id',
  //       dataType : 'foreign',
  //       data : {
  //         table : 'table3',
  //         column : '_id',
  //       }
  //     }
  //   ]
  // }

];

// GENERATE 'INSERT INTO' QUERY STRING
// populate all information into a single set of INSERT INTO queries
// FORM (argument) = DB generation form object submitted by user - from front end
const createInsertQuery = (form) => {
  let insertString = '';
  for (let i = 0; i < form.length; i += 1) {
    insertString += `INSERT INTO "${form[i].schema}"."${form[i].table}"(${columnList(form[i].columns)}) VALUES ${valuesList(form[i].columns, form[i].scale)}; `;
  }
  return insertString;
}


// CREATE 'COLUMN' STRING FOR QUERY
// deconstruct and convert the column names to a single string
const columnList = (columns) => {      
  let list = '';
  columns.forEach( (e , i) => {
    list += e.name;
    if (i < columns.length - 1) list += ', ';
  } );
  return list;
}


// CREATE ALL VALUES FOR ALL RECORDS AT SCALE
// Arguments: column = form.columns, scale = form.scale
const valuesList = (columns, scale) => {
  const recordBuilder = {};
  // create an array with each element as the necessary function to call that column's data type (first column = first element, etc)
  // this will remove the need to run switch statements on each record as this happens at the table level.
  const columnTypes = createRecordFunc(columns);
  // create variables that need to exist on the table level
  const variables = createVariables(columnTypes, columns);
  let list = '';
  // create the number of records equal to the scale of the table
  for (let i = 0; i < scale; i += 1) {
    // start each record as an empty string
    let record = '';
    // traverse each column and concat the results of calling the the data type function
    columnTypes.forEach( (e, k) => {
    console.log("valuesList -> columnTypes", columnTypes.record)
      // concat to the record the results of passing 
      record += `${e.record(columns[k].data, i, variables[k])}`;
      if (k < columns.length - 1) record += ', ';
    })
    list += `(${record})`
    if (i < scale - 1) list += ', ';
  }
  return list;
};


// DEFINE TYPE FORMULAS FOR EACH COLUMN (prior to iterating)
// Helper function: connect each column to its appropriate function prior to creating records to reduce redundant function calls.
const createRecordFunc = (columns) => {
  let output = [];
  columns.forEach(e => {    
    const {dataCategory, dataType} = e;
    console.log("createRecordFunc -> dataCategory", dataCategory)
    if (dataCategory === 'random') output.push(fakerLink[dataType]);
    else if (dataCategory === 'repeating' || dataCategory === 'unique') output.push(types[dataCategory][dataType]);
    // ADD OTHER DATA TYPES HERE
    else {
      console.log(`ERROR: Column ${e.name} has an invalid data type. Table will still populate but this column will be empty.`)
      output.push (() => {});
    }
  } );
  return output;
};


// APPEND ANY NECCESSARY VARIABLES TO THE TABLE LEVEL 
// loop through column data types and run element.variable to assign variables to the index of the column on "variables".
// use the index to handle any tables that have multiple columns of the same data type.
const createVariables = (columnTypes, columns, scale) => {
  let vars = [];
  columnTypes.forEach ( (e, i) => {
    (e.variable) ? vars[i] = e.variable(columns[i].data, scale) : vars[i] = false;
  } )
  return vars;
};

console.log(createInsertQuery(fromApp));



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
